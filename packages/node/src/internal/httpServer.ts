import {
  createServer as createNodeHttpServer,
  ServerResponse,
  IncomingMessage,
} from "http";
import { createServer as createNodeHttpsServer } from "https";
import { URL } from "url";
import {
  createDisposable,
  add,
  dispose,
  createDisposableWrapper,
  DisposableLike,
} from "@reactive-js/disposable";
import { HttpRequestLike, HttpResponseLike, HttpMethod } from "./http";
import {
  ObservableLike,
  createObservable,
  subscribe,
  onNotify,
  map,
  switchAll,
  ofValue,
  catchError,
} from "@reactive-js/observable";
import { OperatorLike, pipe } from "@reactive-js/pipe";
import { SchedulerLike } from "@reactive-js/scheduler";
import { emptyReadableAsyncEnumerable } from "./readable";
import { createWritableAsyncEnumerator } from "./writable";
import {
  HttpContentEncoding,
  HttpContentBodyLike,
  createIncomingMessageContentBody,
  createStringContentBody,
} from "./httpContentBody";
import {
  decodeHttpRequest,
  encodeHttpResponse,
} from "./httpRequestResponseEncoding";

class HttpServerRequest implements HttpRequestLike<HttpContentBodyLike> {
  readonly add = add;
  readonly content: HttpContentBodyLike;
  readonly disposable: DisposableLike;
  readonly dispose = dispose;

  constructor(
    private readonly msg: IncomingMessage,
    private readonly base: string,
  ) {
    const disposable = createDisposableWrapper(msg, msg => msg.destroy());

    this.disposable = disposable;
    this.content = createIncomingMessageContentBody(disposable);
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

  get headers() {
    return this.msg.headers;
  }

  get isDisposed(): boolean {
    return this.disposable.isDisposed;
  }

  get method() {
    return (this.msg.method as HttpMethod) || HttpMethod.GET;
  }

  get url() {
    return new URL(this.msg.url || "", this.base);
  }
}

const writeResponseContentHeaders = (
  resp: ServerResponse,
  content: HttpContentBodyLike,
) => {
  const { contentLength, contentType, contentEncodings } = content;
  if (contentLength > 0) {
    resp.setHeader("content-length", contentLength);
  }

  if (contentType.length > 0) {
    resp.setHeader("content-type", contentType);
  }

  if (contentEncodings.length > 0) {
    resp.setHeader("content-encoding", contentEncodings.join(", "));
  }
};

const writeResponseMessage = (resp: ServerResponse) => ({
  content,
  statusCode,
}: HttpResponseLike<HttpContentBodyLike>) => {
  resp.statusCode = statusCode;

  if (content !== undefined) {
    writeResponseContentHeaders(resp, content);
  }
};

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

const defaultOnError = (
  e: unknown,
): ObservableLike<HttpResponseLike<HttpContentBodyLike>> =>
  ofValue({
    statusCode: 500,
    headers: {},
    content: createStringContentBody(
      e instanceof Error ? e.stack || "" : String(e),
      "text/plain",
    ),
  });

export const createHttpServer = (
  requestHandler: (
    req: HttpRequestLike<HttpContentBodyLike>,
  ) => ObservableLike<HttpResponseLike<HttpContentBodyLike>>,
  options: {
    domain: string;
    onError?: (
      e: unknown,
    ) => ObservableLike<HttpResponseLike<HttpContentBodyLike>>;
    port?: number;
    protocol?: "http:" | "https:" | undefined;
    scheduler: SchedulerLike;
    shouldEncodeResponse?: (
      resp: HttpResponseLike<HttpContentBodyLike>,
    ) => ObservableLike<boolean>;
  },
): OperatorLike<void, ObservableLike<void>> => {
  let close: ObservableLike<void> | undefined = undefined;

  const {
    domain,
    onError = defaultOnError,
    port = options.protocol === "https:" ? 443 : 80,
    protocol = "http:",
    scheduler,
    shouldEncodeResponse = (_: HttpResponseLike<HttpContentBodyLike>) =>
      ofValue(true),
    ...nodeOptions
  } = options;
  const createServer =
    protocol === "https:" ? createNodeHttpsServer : createNodeHttpServer;

  const base = `${protocol}//${domain}${port !== 80 ? `:${port}` : ""}/`;

  return () => {
    if (close === undefined) {
      const disposable = createDisposable().add(() => server.close());

      const handler = (req: IncomingMessage, resp: ServerResponse) => {
        const serverRequest = new HttpServerRequest(req, base);
        const encodeResponse = (
          response: HttpResponseLike<HttpContentBodyLike>,
        ): ObservableLike<HttpResponseLike<HttpContentBodyLike>> => {
          const onResult = (result: boolean) =>
            result
              ? pipe(
                  response,
                  encodeHttpResponse(serverRequest.acceptedEncodings),
                )
              : response;
          return pipe(response, shouldEncodeResponse, map(onResult));
        };

        const responseSubscription = pipe(
          ofValue(serverRequest),
          map(decodeHttpRequest),
          map(requestHandler),
          switchAll(),
          map(encodeResponse),
          switchAll(),
          catchError(onError),
          onNotify(writeResponseMessage(resp)),
          map(writeResponseContentBody(resp)),
          subscribe(scheduler),
        ).add(serverRequest);

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
