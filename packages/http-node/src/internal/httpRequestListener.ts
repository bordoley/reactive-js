import { RequestListener, ServerResponse, IncomingMessage } from "http";
import {
  HttpRequestLike,
  HttpResponseLike,
  HttpStatusCode,
  createHttpResponse,
  writeHttpResponseHeaders,
  HttpMethod,
  HttpHeadersLike,
} from "@reactive-js/http";
import {
  createWritableAsyncEnumerator,
  emptyReadableAsyncEnumerable,
  ReadableMode,
  ReadableEvent,
  createReadableAsyncEnumerable,
} from "@reactive-js/node";
import {
  ObservableLike,
  await_,
  catchError,
  createObservable,
  onNotify,
  ofValue,
  subscribe,
  using,
} from "@reactive-js/observable";
import { pipe } from "@reactive-js/pipe";
import { SchedulerLike } from "@reactive-js/scheduler";
import { createStringHttpContent } from "./httpContent";
import { createHttpRequestFromHeaders } from "./httpRequest";
import { AsyncEnumerableLike } from "@reactive-js/async-enumerable";
import { createDisposableWrapper } from "@reactive-js/disposable";

const writeResponseMessage = (resp: ServerResponse) => (
  response: HttpResponseLike<AsyncEnumerableLike<ReadableMode, ReadableEvent>>,
) => {
  resp.statusCode = response.statusCode;

  writeHttpResponseHeaders(response, (header, value) =>
    resp.setHeader(header, value),
  );
};

const writeResponseContentBody = (resp: ServerResponse) => ({
  content,
}: HttpResponseLike<AsyncEnumerableLike<ReadableMode, ReadableEvent>>) =>
  createObservable(subscriber => {
    const contentReadableEnumerator = (
      content?.body || emptyReadableAsyncEnumerable
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
): ObservableLike<HttpResponseLike<
  AsyncEnumerableLike<ReadableMode, ReadableEvent>
>> =>
  ofValue(
    createHttpResponse(HttpStatusCode.InternalServerError, {
      content: createStringHttpContent(
        e instanceof Error ? e.stack || "" : String(e),
        "text/plain",
      ),
    }),
  );

export interface HttpRequestListenerOptions {
  readonly onError?: (
    e: unknown,
  ) => ObservableLike<
    HttpResponseLike<AsyncEnumerableLike<ReadableMode, ReadableEvent>>
  >;
  readonly protocol?: "http:" | "https:" | undefined;
}

export interface HttpRequestListenerHandler {
  (
    req: HttpRequestLike<AsyncEnumerableLike<ReadableMode, ReadableEvent>>,
  ): ObservableLike<
    HttpResponseLike<AsyncEnumerableLike<ReadableMode, ReadableEvent>>
  >;
}

const destroyRequest = (msg: IncomingMessage) => {
  msg.destroy();
};

export const createHttpRequestListener = (
  handler: HttpRequestListenerHandler,
  scheduler: SchedulerLike,
  options: HttpRequestListenerOptions = {},
): RequestListener => {
  const { onError = defaultOnError } = options;

  return (req, resp) =>
    pipe(
      using(
        () => createDisposableWrapper(req, destroyRequest),
        req => {
          const value = req.value;
          return pipe(
            createHttpRequestFromHeaders(
              value.method as HttpMethod,
              value.url || "",
              value.headers as HttpHeadersLike,
              createReadableAsyncEnumerable(() => value),
              (value.socket as any).encrypted || false,
              value.httpVersionMajor,
            ),

            handler,
            catchError(onError),
            onNotify(writeResponseMessage(resp)),
            await_(writeResponseContentBody(resp)),
          );
        },
      ),
      subscribe(scheduler),
    );
};
