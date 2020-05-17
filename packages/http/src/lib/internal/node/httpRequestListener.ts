import { ServerResponse, IncomingMessage } from "http";
import { Http2ServerRequest, Http2ServerResponse } from "http2";
import {
  DisposableValueLike,
  addDisposableOrTeardown,
  add,
} from "@reactive-js/core/lib/disposable";
import { IOSourceLike, IOSinkLike } from "@reactive-js/core/lib/io";
import {
  bind,
  pipe,
  returns,
  Function1,
  SideEffect2,
} from "@reactive-js/core/lib/functions";
import {
  createReadableIOSource,
  createWritableIOSink,
  createDisposableNodeStream,
} from "@reactive-js/core/lib/node";
import {
  ObservableLike,
  await_,
  catchError,
  onNotify,
  subscribe,
  compute,
} from "@reactive-js/core/lib/observable";
import { SchedulerLike } from "@reactive-js/core/lib/scheduler";
import { sink } from "@reactive-js/core/lib/streamable";
import {
  writeHttpResponseHeaders,
  HttpMethod,
  HttpHeaders,
  parseHttpRequestFromHeaders,
  HttpResponse,
  HttpServerRequest,
  HttpServer,
} from "../../http";

const writeResponseMessage = (serverResponse: ServerResponse) => (
  response: HttpResponse<IOSourceLike<Uint8Array>>,
) => {
  serverResponse.statusCode = response.statusCode;

  writeHttpResponseHeaders(response, (header, value) =>
    serverResponse.setHeader(header, value),
  );

  serverResponse.flushHeaders();
};

const writeResponseBody = (responseBody: IOSinkLike<Uint8Array>) => ({
  body,
}: HttpResponse<IOSourceLike<Uint8Array>>) => sink(body, responseBody);

const defaultOnError = (e: unknown) => {
  console.log(e);
};

export type HttpRequestListenerOptions = {
  readonly onError?: Function1<unknown, void | ObservableLike<unknown>>;
};

export type HttpRequestListener = SideEffect2<
  IncomingMessage | Http2ServerRequest,
  ServerResponse | Http2ServerResponse
>;

export const createHttpRequestListener = (
  handler: HttpServer<
    HttpServerRequest<IOSourceLike<Uint8Array>>,
    HttpResponse<IOSourceLike<Uint8Array>>
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

    const requestBody = createReadableIOSource(returns(request));
    const responseBody = createWritableIOSink(returns(response));

    return pipe(
      bind(parseHttpRequestFromHeaders, {
        method: method as HttpMethod,
        path,
        headers: headers as HttpHeaders,
        httpVersionMajor,
        httpVersionMinor,
        isTransportSecure,
        body: requestBody,
      }),
      compute(),
      await_(handler),
      onNotify(writeResponseMessage(response.value)),
      await_(writeResponseBody(responseBody)),
      catchError(onError),
    );
  };

  return (req, resp) => {
    const request = createDisposableNodeStream(req as IncomingMessage);
    const response = createDisposableNodeStream(resp as ServerResponse);

    add(
      response,
      pipe(
        handleRequest(request, response),
        subscribe(scheduler),
        addDisposableOrTeardown(request),
      ),
    );
  };
};
