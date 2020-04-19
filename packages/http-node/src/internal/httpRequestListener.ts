import { ServerResponse, IncomingMessage } from "http";
import { Http2ServerRequest, Http2ServerResponse } from "http2";
import {
  AsyncEnumerableLike,
  StreamMode,
  StreamEvent,
  emptyStream,
  sink,
} from "@reactive-js/async-enumerable";
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
  createBufferStreamSinkFromWritable,
} from "@reactive-js/node";
import {
  ObservableLike,
  await_,
  catchError,
  onNotify,
  subscribe,
  empty,
  compute,
} from "@reactive-js/observable";
import { pipe } from "@reactive-js/pipe";
import { SchedulerLike } from "@reactive-js/scheduler";

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
}: HttpContentResponse<BufferStreamLike>) => {
  const body = content?.body ?? emptyStream();
  const responseBodySink = createBufferStreamSinkFromWritable(() => resp);
  return sink(responseBodySink)(body);
}

const defaultOnError = (_: unknown): ObservableLike<void> => empty();

export type HttpRequestListenerOptions = {
  readonly onError?: (e: unknown) => ObservableLike<unknown>;
};

export type HttpRequestListenerHandler = {
  (
    req: HttpServerRequest<
      AsyncEnumerableLike<StreamMode, StreamEvent<Buffer>>
    >,
  ): ObservableLike<
    HttpContentResponse<AsyncEnumerableLike<StreamMode, StreamEvent<Buffer>>>
  >;
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

  const handleRequest = (req: IncomingMessage, resp: ServerResponse) => {
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

  return (req, resp) => {
    const subscription = pipe(
      handleRequest(req as IncomingMessage, resp as ServerResponse),
      subscribe(scheduler),
    ).add(() => {
      req.removeAllListeners();
      resp.removeAllListeners();
      req.destroy();
    });

    const dispose = () => subscription.dispose();

    req.on("aborted", dispose);
    req.on("close", dispose);
    req.on("error", dispose);

    resp.on("close", dispose);
    resp.on("error", dispose);
    resp.on("finish", dispose);
  };
};
