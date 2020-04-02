import {
  createServer as createHttpServer,
  ServerResponse,
  IncomingMessage,
} from "http";
import { createDisposable, add, dispose } from "@reactive-js/disposable";
import {
  HttpRequestLike,
  HttpContentBodyLike,
  HttpResponseLike,
  HttpIncomingMessageContentBody,
  HttpMethod,
} from "./http";
import {
  ObservableLike,
  createObservable,
  subscribe,
  onNotify,
  ofValue,
  map,
  switchAll,
} from "@reactive-js/observable";
import { OperatorLike, pipe } from "@reactive-js/pipe";
import { SchedulerLike } from "@reactive-js/scheduler";
import { getHostScheduler } from "./scheduler";
import { emptyReadableAsyncEnumerable } from "./readable";
import { createWritableAsyncEnumerator } from "./writable";

/** @ignore */
export interface HttpServerRequestLike
  extends HttpRequestLike<HttpContentBodyLike> {}

/** @ignore */
export interface HttpServerResponseLike
  extends HttpResponseLike<HttpContentBodyLike> {}

class HttpServerRequestImpl implements HttpServerRequestLike {
  readonly add = add;
  readonly content: HttpContentBodyLike;
  readonly disposable = createDisposable();
  readonly dispose = dispose;

  constructor(private readonly msg: IncomingMessage) {
    this.add(() => msg.destroy());
    this.content = new HttpIncomingMessageContentBody(this, msg);
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
  const { contentLength, contentType, contentEncoding } = content;
  if (contentLength > 0) {
    resp.setHeader("content-length", contentLength);
  }

  if (contentType.length > 0) {
    resp.setHeader("content-type", contentType);
  }

  if (contentEncoding.length > 0) {
    resp.setHeader("content-encoding", contentType);
  }
};

const writeResponseMessage = (resp: ServerResponse) => ({
  content,
  statusCode,
}: HttpServerResponseLike) => {
  resp.statusCode = statusCode;

  if (content !== undefined) {
    writeResponseContentHeaders(resp, content);
  }
};

const writeResponseContentBody = (resp: ServerResponse) => ({
  content,
}: HttpServerResponseLike) =>
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
    req: HttpServerRequestLike,
  ) => ObservableLike<HttpServerResponseLike>,
  options: {
    port: number;
    scheduler: SchedulerLike;
  } & any,
): OperatorLike<void, ObservableLike<void>> => {
  let close: ObservableLike<void> | undefined = undefined;
  const { port, scheduler } = options;

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

      const server = createHttpServer(options, handler).listen(port);

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

const connect = createServer(
  req =>
    pipe(
      ofValue(req),
      onNotify(console.log),
      map(_ => ({
        statusCode: 202,
      })),
    ),
  {
    scheduler: getHostScheduler(),
    port: 8080,
  },
);

connect();
