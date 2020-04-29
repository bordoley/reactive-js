import { ServerResponse, IncomingMessage } from "http";
import { Http2ServerRequest, Http2ServerResponse } from "http2";
import { sink } from "@reactive-js/core/dist/js/streamable";
import {
  writeHttpResponseHeaders,
  HttpMethod,
  HttpHeaders,
  parseHttpRequestFromHeaders,
  HttpResponse,
  HttpServerRequest,
  HttpServer,
} from "@reactive-js/core/dist/js/http";
import {
  createBufferFlowableFromReadable,
  BufferFlowableLike,
  createBufferFlowableSinkFromWritable,
  BufferFlowableSinkLike,
  createDisposableNodeStream,
} from "../../streams";
import {
  ObservableLike,
  await_,
  catchError,
  onNotify,
  subscribe,
  empty,
  compute,
} from "@reactive-js/core/dist/js/observable";
import { pipe, returns } from "@reactive-js/core/dist/js/functions";
import { SchedulerLike } from "@reactive-js/core/dist/js/scheduler";
import { DisposableValueLike } from "@reactive-js/core/dist/js/disposable";
import { isSome } from "@reactive-js/core/dist/js/option";

const writeResponseMessage = (serverResponse: ServerResponse) => (
  response: HttpResponse<BufferFlowableLike>,
) => {
  serverResponse.statusCode = response.statusCode;

  writeHttpResponseHeaders(response, (header, value) =>
    serverResponse.setHeader(header, value),
  );
};

const writeResponseBody = (responseBody: BufferFlowableSinkLike) => ({
  body,
  contentInfo,
}: HttpResponse<BufferFlowableLike>) =>
  isSome(contentInfo) ? sink(body, responseBody) : empty();

const defaultOnError = (_: unknown): ObservableLike<void> => empty();

export type HttpRequestListenerOptions = {
  readonly onError?: (e: unknown) => ObservableLike<unknown>;
};

export type HttpRequestListener = (
  req: IncomingMessage | Http2ServerRequest,
  resp: ServerResponse | Http2ServerResponse,
) => void;

export const createHttpRequestListener = (
  handler: HttpServer<
    HttpServerRequest<BufferFlowableLike>,
    HttpResponse<BufferFlowableLike>
  >,
  scheduler: SchedulerLike,
  options: HttpRequestListenerOptions = {},
): HttpRequestListener => {
  const { onError = defaultOnError } = options;

  const handleRequest = (
    request: DisposableValueLike<IncomingMessage>,
    response: DisposableValueLike<ServerResponse>,
  ) => {
    const {
      method,
      url: path = "/",
      headers,
      httpVersionMajor,
      httpVersionMinor,
    } = request.value;
    const isTransportSecure = (request.value.socket as any).encrypted ?? false;

    const requestBody = createBufferFlowableFromReadable(returns(request));
    const responseBody = createBufferFlowableSinkFromWritable(
      returns(response),
      true,
    );

    return pipe(
      () =>
        parseHttpRequestFromHeaders({
          method: method as HttpMethod,
          path,
          headers: headers as HttpHeaders,
          httpVersionMajor,
          httpVersionMinor,
          isTransportSecure,
          body: requestBody,
        }),
      compute,
      await_(handler),
      onNotify(writeResponseMessage(response.value)),
      await_(writeResponseBody(responseBody)),
      catchError(onError),
    );
  };

  return (req, resp) => {
    const request = createDisposableNodeStream(req as IncomingMessage);
    const response = createDisposableNodeStream(resp as ServerResponse);

    response.add(
      pipe(handleRequest(request, response), subscribe(scheduler)).add(request),
    );
  };
};
