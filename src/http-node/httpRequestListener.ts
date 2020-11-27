import { IncomingMessage, ServerResponse } from "http";
import { Http2ServerRequest, Http2ServerResponse } from "http2";
import { DisposableValueLike, addDisposable } from "../disposable";
import { Function1, SideEffect2, pipe, returns } from "../functions";
import {
  HttpHeaders,
  HttpMethod,
  HttpRequest,
  HttpResponse,
  createHttpRequest,
  writeHttpResponseHeaders,
} from "../http";
import { IOSourceLike } from "../io";
import {
  createDisposableNodeStream,
  createReadableIOSource,
  createWritableIOSink,
} from "../node";
import {
  ObservableLike,
  __await,
  __memo,
  async,
  catchError,
  defer,
  empty,
  subscribe,
} from "../observable";
import { map as mapOption } from "../option";
import { SchedulerLike } from "../scheduler";
import { sink } from "../streamable";

const writeToServerResponse = (
  serverResponse: DisposableValueLike<ServerResponse>,
) => {
  const responseBody = createWritableIOSink(returns(serverResponse));

  return (response: HttpResponse<IOSourceLike<Uint8Array>>) =>
    defer(() => observer => {
      serverResponse.value.statusCode = response.statusCode;

      writeHttpResponseHeaders(response, (header, value) =>
        serverResponse.value.setHeader(header, value),
      );

      serverResponse.value.flushHeaders();

      const sinkSubscription = pipe(
        sink(response.body, responseBody),
        subscribe(observer),
      );
      observer.add(sinkSubscription);
    });
};

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

    const requestOptions = {
      method: method as HttpMethod,
      uri,
      headers: headers as HttpHeaders,
      httpVersionMajor,
      httpVersionMinor,
      isTransportSecure,
      body: requestBody,
    };

    const writeResponse = pipe(response, writeToServerResponse, mapOption);

    return pipe(
      async(() => {
        const request = __memo(createHttpRequest, requestOptions);
        const handlerResponseObs = __memo(handler, request);
        const response = __await(handlerResponseObs);
        const writeResponseObs = __memo(writeResponse, response) ?? empty();
        __await(writeResponseObs);
      }),
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
