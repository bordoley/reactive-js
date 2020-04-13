import { RequestListener, ServerResponse, IncomingMessage } from "http";
import {
  HttpServerRequest,
  writeHttpResponseHeaders,
  HttpMethod,
  HttpHeaders,
  parseHttpRequestFromHeaders,
  HttpContentResponse,
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
  subscribe,
  using,
  empty,
} from "@reactive-js/observable";
import { pipe } from "@reactive-js/pipe";
import { SchedulerLike } from "@reactive-js/scheduler";
import { AsyncEnumerableLike } from "@reactive-js/async-enumerable";
import {
  createDisposableValue,
  DisposableValueLike,
} from "@reactive-js/disposable";

const writeResponseMessage = (resp: ServerResponse) => (
  response: HttpContentResponse<
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
}: HttpContentResponse<AsyncEnumerableLike<ReadableMode, ReadableEvent>>) =>
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
// FIXME: Special case some exceptions like URILike parsing exceptions that are due to bad user input
const defaultOnError = (_: unknown): ObservableLike<void> => empty();

export type HttpRequestListenerOptions = {
  readonly onError?: (e: unknown) => ObservableLike<unknown>;
};

export type HttpRequestListenerHandler = {
  (
    req: HttpServerRequest<AsyncEnumerableLike<ReadableMode, ReadableEvent>>,
  ): ObservableLike<
    HttpContentResponse<AsyncEnumerableLike<ReadableMode, ReadableEvent>>
  >;
};

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
        headers: headers as HttpHeaders,
        httpVersionMajor,
        httpVersionMinor,
        isTransportSecure,
        body,
      }),
      handler,
      onNotify(writeResponseMessage(resp)),
      await_(writeResponseContentBody(resp)),
      catchError(onError),
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
