import { RequestListener, ServerResponse, IncomingMessage } from "http";
import {
  HttpServerRequestLike,
  HttpStatusCode,
  createHttpResponse,
  writeHttpResponseHeaders,
  HttpMethod,
  HttpHeadersLike,
  parseHttpRequestFromHeaders,
  HttpContentResponseLike,
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
import { AsyncEnumerableLike } from "@reactive-js/async-enumerable";
import {
  createDisposableValue,
  DisposableValueLike,
} from "@reactive-js/disposable";

const writeResponseMessage = (resp: ServerResponse) => (
  response: HttpContentResponseLike<
    AsyncEnumerableLike<ReadableMode, ReadableEvent>
  >,
) => {
  resp.statusCode = response.statusCode;

  writeHttpResponseHeaders(response, (header, value) =>
    resp.setHeader(header, value),
  );
};

const writeResponseContentBody = (resp: ServerResponse) => ({
  content,
}: HttpContentResponseLike<AsyncEnumerableLike<ReadableMode, ReadableEvent>>) =>
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
): ObservableLike<HttpContentResponseLike<
  AsyncEnumerableLike<ReadableMode, ReadableEvent>
>> => {
  const content =
    process.env.NODE_ENV === "production"
      ? undefined
      : e instanceof Error && e.stack !== undefined
      ? createStringHttpContent(e.stack || "", "text/plain")
      : createStringHttpContent(String(e), "text/plain");

  return ofValue(
    createHttpResponse(HttpStatusCode.InternalServerError, {
      content,
    }),
  );
};

export interface HttpRequestListenerOptions {
  readonly onError?: (
    e: unknown,
  ) => ObservableLike<
    HttpContentResponseLike<AsyncEnumerableLike<ReadableMode, ReadableEvent>>
  >;
}

export interface HttpRequestListenerHandler {
  (
    req: HttpServerRequestLike<
      AsyncEnumerableLike<ReadableMode, ReadableEvent>
    >,
  ): ObservableLike<
    HttpContentResponseLike<AsyncEnumerableLike<ReadableMode, ReadableEvent>>
  >;
}

const destroy = <T extends { destroy: () => void }>(val: T) => {
  val.destroy();
};

export const createHttpRequestListener = (
  handler: HttpRequestListenerHandler,
  scheduler: SchedulerLike,
  options: HttpRequestListenerOptions = {},
): RequestListener => {
  const { onError = defaultOnError } = options;

  const handleRequest = (
    disposableRequest: DisposableValueLike<IncomingMessage>,
    disposableResponse: DisposableValueLike<ServerResponse>,
  ) => {
    const req = disposableRequest.value;
    const resp = disposableResponse.value;

    const {
      method,
      url: path = "/",
      headers,
      httpVersionMajor,
      httpVersionMinor,
    } = req;
    const body = createReadableAsyncEnumerable(() => req);
    const isTransportSecure = (req.socket as any).encrypted || false;

    return pipe(
      parseHttpRequestFromHeaders({
        method: method as HttpMethod,
        path,
        headers: headers as HttpHeadersLike,
        httpVersionMajor,
        httpVersionMinor,
        isTransportSecure,
        body,
      }),
      handler,
      catchError(onError),
      onNotify(writeResponseMessage(resp)),
      await_(writeResponseContentBody(resp)),
    );
  };

  return (req, resp) =>
    pipe(
      using(
        (): [
          DisposableValueLike<IncomingMessage>,
          DisposableValueLike<ServerResponse>,
        ] => [
          createDisposableValue(req, destroy),
          createDisposableValue(resp, destroy),
        ],
        handleRequest,
      ),
      subscribe(scheduler),
    );
};
