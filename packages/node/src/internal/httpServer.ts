import {
  createServer as createHttpServer,
  ServerResponse,
  IncomingMessage,
} from "http";
import {
  createDisposable,
  add,
  dispose,
} from "@reactive-js/disposable";
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

const consumeResponseContent = (dest: ServerResponse) => ({ content }: HttpServerResponseLike) => createObservable(subscriber => {
  const contentReadableEnumerator = (
    content || emptyReadableAsyncEnumerable
  ).enumerateAsync(subscriber);
  const responseWritableEnumerator = createWritableAsyncEnumerator(
    dest,
    subscriber,
  );

  subscriber
    .add(contentReadableEnumerator)
    .add(responseWritableEnumerator);

  contentReadableEnumerator.subscribe(
    responseWritableEnumerator,
  );
  responseWritableEnumerator.subscribe(
    contentReadableEnumerator,
  );

  responseWritableEnumerator.add(subscriber);
})

/** @ignore */
export const createServer = (
  handler: (
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

      const server = createHttpServer(
        options,
        (req: IncomingMessage, resp: ServerResponse) => {
          const serverRequest = new HttpServerRequestImpl(req);

          const responseSubscription = pipe(
            serverRequest,
            handler,
            onNotify(({ statusCode, statusMessage }) => {
              resp.statusCode = statusCode;
              resp.statusMessage = statusMessage;
            }),
            map(consumeResponseContent(resp)),
            switchAll(),
            subscribe(scheduler),
          ).add(serverRequest);

          // FIXME: Might have to change the underlying data structure
          // used by disposable for adding and removing child disposables.
          // In a real world scenario this could lead to some real overhead
          // due to the cost of finding a request and removing it when
          // the responseSubscription is disposed.
          disposable.add(responseSubscription);
        },
      ).listen(port);

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
        httpVersion: "1.1",
        statusCode: 200,
        statusMessage: "Works",
      })),
    ),
  {
    scheduler: getHostScheduler(),
    port: 8080,
  },
);

connect();
