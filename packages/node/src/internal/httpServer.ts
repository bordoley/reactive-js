import {
  createServer as createHttpServer,
  ServerResponse,
  IncomingMessage,
} from "http";
import {
  createDisposable,
  add,
  dispose,
  createDisposableWrapper,
  DisposableLike,
} from "@reactive-js/disposable";
import {
  HttpRequestLike,
  HttpContentBodyLike,
  HttpResponseLike,
  HttpMethod,
  HttpContentEncoding,
} from "./http";
import {
  ObservableLike,
  createObservable,
  subscribe,
  onNotify,
  map,
  switchAll,
} from "@reactive-js/observable";
import { OperatorLike, pipe } from "@reactive-js/pipe";
import { SchedulerLike } from "@reactive-js/scheduler";
import { emptyReadableAsyncEnumerable } from "./readable";
import { createWritableAsyncEnumerator } from "./writable";
import {
  createIncomingMessageContentBody,
  decodeContentBody,
  supportedEncodings,
  encodeContentBody,
} from "./httpContentBody";

class HttpServerRequestImpl implements HttpRequestLike<HttpContentBodyLike> {
  readonly add = add;
  readonly content: HttpContentBodyLike;
  readonly disposable: DisposableLike;
  readonly dispose = dispose;

  constructor(private readonly msg: IncomingMessage) {
    const disposable = createDisposableWrapper(msg, msg => msg.destroy());

    this.disposable = disposable;
    this.content = createIncomingMessageContentBody(disposable);
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
    return this.msg.url || "";
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

export const decodeServerRequest = (
  req: HttpRequestLike<HttpContentBodyLike>,
): HttpRequestLike<HttpContentBodyLike> => {
  const { content, headers, method, url } = req;
  return content !== undefined && content.contentEncodings.length > 0
    ? {
        content: decodeContentBody(content),
        headers,
        method,
        url,
      }
    : req;
};

export const encodeServerResponse = (req: HttpRequestLike<HttpContentBodyLike>) => (
  resp: HttpResponseLike<HttpContentBodyLike>,
): HttpResponseLike<HttpContentBodyLike> => {
  // FIXME: This parsing is completely not abnf compliant
  // FIXME: Special case Identity
  // FIXME: Add support for determining if content should be encoded.
  const rawAcceptHeader = String(req.headers["accept-encoding"] || "");
  const acceptedEncodings = rawAcceptHeader
    .split(",")
    .map(x => x.trim()) as HttpContentEncoding[];
  const encoding = acceptedEncodings.find(
    encoding => supportedEncodings.indexOf(encoding) > -1,
  ) as HttpContentEncoding | undefined;
  const { content, location, statusCode } = resp;

  return encoding !== undefined && content !== undefined
    ? {
        content: pipe(content, encodeContentBody(encoding)),
        location,
        statusCode,
      }
    : resp;
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

/** @ignore */
export const createServer = (
  requestHandler: (
    req: HttpRequestLike<HttpContentBodyLike>,
  ) => ObservableLike<HttpResponseLike<HttpContentBodyLike>>,
  options: {
    port: number;
    scheduler: SchedulerLike;
  } & any,
): OperatorLike<void, ObservableLike<void>> => {
  let close: ObservableLike<void> | undefined = undefined;
  const { port, scheduler, ...nodeOptions } = options;

  return () => {
    if (close === undefined) {
      const disposable = createDisposable().add(() => server.close());

      const handler = (req: IncomingMessage, resp: ServerResponse) => {
        const serverRequest = new HttpServerRequestImpl(req);

        const responseSubscription = pipe(
          serverRequest,
          requestHandler,
          onNotify(writeResponseMessage(resp)),
          map(writeResponseContentBody(resp)),
          switchAll(),
          subscribe(scheduler),
        ).add(serverRequest);

        disposable.add(responseSubscription);
      };

      const server = createHttpServer(nodeOptions, handler).listen(port);

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
