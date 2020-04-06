import {
  createServer as createNodeHttpServer,
  ServerResponse,
  IncomingMessage,
  ServerOptions,
} from "http";
import { createServer as createNodeHttpsServer } from "https";
import { SecureContextOptions, TlsOptions } from "tls";
import { URL } from "url";
import {
  createDisposable,
  createDisposableWrapper,
  DisposableWrapperLike,
} from "@reactive-js/disposable";
import {
  HttpRequestLike,
  HttpResponseLike,
  HttpMethod,
  HttpContentEncoding,
  createHttpResponse,
  HttpStatusCode,
  URI,
} from "@reactive-js/http";
import {
  emptyReadableAsyncEnumerable,
  createWritableAsyncEnumerator,
} from "@reactive-js/node";
import {
  ObservableLike,
  createObservable,
  subscribe,
  onNotify,
  ofValue,
  catchError,
  await_,
  compute,
} from "@reactive-js/observable";
import { OperatorLike, pipe } from "@reactive-js/pipe";
import { SchedulerLike } from "@reactive-js/scheduler";
import {
  HttpContentBodyLike,
  createIncomingMessageContentBody,
  createStringContentBody,
} from "./httpContentBody";
import { writeResponseHeaders } from "./httpHeaders";

class HttpServerRequestImpl implements HttpRequestLike<HttpContentBodyLike> {
  readonly content: HttpContentBodyLike | undefined;
  readonly uri: URI;

  constructor(
    private readonly msg: DisposableWrapperLike<IncomingMessage>,
    private readonly protocol: "http:" | "https:",
  ) {
    const content = createIncomingMessageContentBody(msg);
    this.content = content.contentLength !== 0 ? content : undefined;
   
    const host = this.msg.value.headers.host || "";
    const base = `${this.protocol}//${host}/`;
    this.uri = new URL(this.msg.value.url || "", base);
  }

  get acceptedEncodings() {
    // FIXME: This parsing is completely not abnf compliant
    // FIXME: Special case Identity
    // FIXME: Add support for determining if content should be encoded.
    const rawAcceptHeader = String(this.headers["accept-encoding"] || "");
    return rawAcceptHeader
      .split(",")
      .map(x => x.trim()) as HttpContentEncoding[];
  }

  get expectContinue(): boolean {
    const rawExpectHeader = String(this.headers.expect || "");
    return rawExpectHeader === "100-continue";
  }

  get headers() {
    return this.msg.value.headers;
  }

  get method() {
    return (this.msg.value.method as HttpMethod) || HttpMethod.GET;
  }
}

const writeResponseMessage = (resp: ServerResponse) => (
  response: HttpResponseLike<HttpContentBodyLike>,
) => {
  resp.statusCode = response.statusCode;

  writeResponseHeaders(
    response,
    (header, value) => resp.setHeader(header, value),
  );
}

const writeResponseContentBody = (resp: ServerResponse) => ({
  content,
}: HttpResponseLike<HttpContentBodyLike>) =>
  createObservable(subscriber => {
    const contentReadableEnumerator = (
      content || emptyReadableAsyncEnumerable
    ).enumerateAsync(subscriber);
    const responseWritableEnumerator = createWritableAsyncEnumerator(
      resp,
      subscriber,
    );

    subscriber.add(contentReadableEnumerator).add(responseWritableEnumerator);
    responseWritableEnumerator.add(subscriber);

    contentReadableEnumerator.subscribe(responseWritableEnumerator);
    responseWritableEnumerator.subscribe(contentReadableEnumerator);
  });

// FIXME: Don't include content in prod mode
// FIXME: Special case some exceptions like URI parsing exceptions that are due to bad user input 
const defaultOnError = (
  e: unknown,
): ObservableLike<HttpResponseLike<HttpContentBodyLike>> =>
  ofValue(
    createHttpResponse(HttpStatusCode.InternalServerError, {
      content: createStringContentBody(
        e instanceof Error ? e.stack || "" : String(e),
        "text/plain",
      ),
    }),
  );

export interface HttpServerOptions {
  readonly onError?: (
    e: unknown,
  ) => ObservableLike<HttpResponseLike<HttpContentBodyLike>>;
  readonly port?: number;
  readonly protocol?: "http:" | "https:" | undefined;
  readonly scheduler: SchedulerLike;
}

export const createHttpServer = (
  requestHandler: (
    req: HttpRequestLike<HttpContentBodyLike>,
  ) => ObservableLike<HttpResponseLike<HttpContentBodyLike>>,
  options: HttpServerOptions &
    SecureContextOptions &
    TlsOptions &
    ServerOptions,
): OperatorLike<void, ObservableLike<void>> => {
  const {
    onError = defaultOnError,
    port = options.protocol === "https:" ? 443 : 80,
    protocol = "http:",
    scheduler,
    ...nodeOptions
  } = options;

  // FIXME: HTTP2?
  const createServer =
    protocol === "https:" ? createNodeHttpsServer : createNodeHttpServer;

  let close: ObservableLike<void> | undefined = undefined;

  return () => {
    if (close === undefined) {
      const disposable = createDisposable().add(() => server.close());

      const handler = (req: IncomingMessage, resp: ServerResponse) => {
        const message = createDisposableWrapper(req, req => req.destroy());
        const responseSubscription = pipe(
          compute(() => new HttpServerRequestImpl(message, protocol)),
          await_(requestHandler),
          catchError(onError),
          onNotify(writeResponseMessage(resp)),
          await_(writeResponseContentBody(resp)),
          subscribe(scheduler),
        ).add(message);

        disposable.add(responseSubscription);
      };

      const server = createServer(nodeOptions, handler).listen(port);

      close = createObservable(subscriber => {
        if (disposable.isDisposed) {
          subscriber.dispatch();
          subscriber.dispose();
        } else {
          server.once("close", () => {
            close = undefined;
            subscriber.dispatch();
            subscriber.dispose();
          });
          disposable.dispose();
        }
      });
    }

    return close;
  };
};
