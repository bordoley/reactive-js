import { ServerResponse, IncomingMessage } from "http";
import { Http2ServerRequest, Http2ServerResponse } from "http2";
import { DisposableValueLike, addDisposable } from "../disposable";
import { defer, pipe, returns, Function1, SideEffect2 } from "../functions";
import {
  HttpHeaders,
  HttpMethod,
  HttpRequest,
  HttpResponse,
  writeHttpResponseHeaders,
  createHttpRequest,
} from "../http";
import { IOSourceLike, IOSinkLike } from "../io";
import {
  createReadableIOSource,
  createWritableIOSink,
  createDisposableNodeStream,
} from "../node";
import {
  ObservableLike,
  await_,
  catchError,
  onNotify,
  subscribe,
  compute,
} from "../observable";
import { SchedulerLike } from "../scheduler";
import { sink } from "../streamable";

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

export const createHttpRequestListener = (
  handler: Function1<
    HttpRequest<IOSourceLike<Uint8Array>>,
    ObservableLike<HttpResponse<IOSourceLike<Uint8Array>>>
  >,
  scheduler: SchedulerLike,
  options: HttpRequestListenerOptions = {},
): SideEffect2<
  IncomingMessage | Http2ServerRequest,
  ServerResponse | Http2ServerResponse
> => {
  const { onError = defaultOnError } = options;

  const handleRequest = (
    request: DisposableValueLike<IncomingMessage>,
    response: DisposableValueLike<ServerResponse>,
  ) => {
    const {
      method,
      url: uri = "/",
      headers,
      httpVersionMajor,
      httpVersionMinor,
    } = request.value;
    const isTransportSecure = (request.value.socket as any).encrypted ?? false;

    const requestBody = createReadableIOSource(returns(request));
    const responseBody = createWritableIOSink(returns(response));

    return pipe(
      defer(
        {
          method: method as HttpMethod,
          uri,
          headers: headers as HttpHeaders,
          httpVersionMajor,
          httpVersionMinor,
          isTransportSecure,
          body: requestBody,
        },
        createHttpRequest,
      ),
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

    const handlerSubscription = pipe(
      handleRequest(request, response),
      subscribe(scheduler),
    );

    addDisposable(handlerSubscription, request);
    addDisposable(response, handlerSubscription);
  };
};
