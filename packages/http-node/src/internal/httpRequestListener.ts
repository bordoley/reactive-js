import { ServerResponse, IncomingMessage } from "http";
import { Http2ServerRequest, Http2ServerResponse } from "http2";
import { AsyncEnumerableLike, StreamMode, StreamEvent, emptyStream } from "@reactive-js/async-enumerable";
import {
  HttpServerRequest,
  writeHttpResponseHeaders,
  HttpMethod,
  HttpHeaders,
  parseHttpRequestFromHeaders,
  HttpContentResponse,
} from "@reactive-js/http";
import {
  createBufferStreamFromReadable,
  BufferStreamLike,
  createBufferStreamSinkAsyncEnumeratorFromWritable,
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
  compute,
} from "@reactive-js/observable";
import { pipe } from "@reactive-js/pipe";
import { SchedulerLike } from "@reactive-js/scheduler";

import {
  createDisposableValue,
  DisposableValueLike,
} from "@reactive-js/disposable";

const writeResponseMessage = (resp: ServerResponse) => (
  response: HttpContentResponse<
    AsyncEnumerableLike<StreamMode, StreamEvent<Buffer>>
  >,
) => {
  resp.statusCode = response.statusCode;

  writeHttpResponseHeaders(response, (header, value) =>
    resp.setHeader(header, value),
  );
};

const writeResponseContentBody = (resp: ServerResponse) => ({
  content,
}: HttpContentResponse<BufferStreamLike>) =>
  createObservable(subscriber => {
    const contentReadableEnumerator = (
      content?.body ?? emptyStream()
    ).enumerateAsync(subscriber);
    const responseWritableEnumerator = createBufferStreamSinkAsyncEnumeratorFromWritable(
      resp,
      subscriber,
    );

    subscriber.add(contentReadableEnumerator).add(responseWritableEnumerator);
    responseWritableEnumerator.add(subscriber);

    contentReadableEnumerator.subscribe(responseWritableEnumerator);
    responseWritableEnumerator.subscribe(contentReadableEnumerator);
  });

const defaultOnError = (_: unknown): ObservableLike<void> => empty();

export type HttpRequestListenerOptions = {
  readonly onError?: (e: unknown) => ObservableLike<unknown>;
};

export type HttpRequestListenerHandler = {
  (
    req: HttpServerRequest<AsyncEnumerableLike<StreamMode, StreamEvent<Buffer>>>,
  ): ObservableLike<
    HttpContentResponse<AsyncEnumerableLike<StreamMode, StreamEvent<Buffer>>>
  >;
};

const destroy = <T extends { destroy: () => void }>(val: T) => {
  val.destroy();
};

export type HttpRequestListener = (
  req: IncomingMessage | Http2ServerRequest,
  resp: ServerResponse | Http2ServerResponse,
) => void;

export const createHttpRequestListener = (
  handler: HttpRequestListenerHandler,
  scheduler: SchedulerLike,
  options: HttpRequestListenerOptions = {},
): HttpRequestListener => {
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
    const body = createBufferStreamFromReadable(() => req);
    const isTransportSecure = (req.socket as any).encrypted ?? false;

    return pipe(
      () =>
        parseHttpRequestFromHeaders({
          method: method as HttpMethod,
          path,
          headers: headers as HttpHeaders,
          httpVersionMajor,
          httpVersionMinor,
          isTransportSecure,
          body,
        }),
      compute,
      await_(handler),
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
          createDisposableValue(req as IncomingMessage, destroy),
          createDisposableValue(resp as ServerResponse, destroy),
        ],
        handleRequest,
      ),
      subscribe(scheduler),
    );
};
