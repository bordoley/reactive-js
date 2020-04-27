import { IncomingMessage, request as httpRequest } from "http";
import { request as httpsRequest } from "https";
import { URL } from "url";
import {
  HttpClient,
  HttpClientRequestStatusType,
} from "@reactive-js/core/dist/js/http-client";
import { none, isSome } from "@reactive-js/core/dist/js/option";
import {
  subscribe,
  scan,
  onNotify,
  ofValue,
  map,
  concatMap,
  keepType,
  switchMap,
  StreamLike,
  using,
  createSubject,
  merge,
  SubjectLike,
} from "@reactive-js/core/dist/js/observable";
import {
  DisposableLike,
  AbstractDisposable,
} from "@reactive-js/core/dist/js/disposable";
import {
  httpRequestToUntypedHeaders,
  parseHttpResponseFromHeaders,
  HttpHeaders,
  HttpStatusCode,
  HttpRequest,
  createRedirectHttpRequest,
  HttpResponse,
} from "@reactive-js/core/dist/js/http";
import { SchedulerLike } from "@reactive-js/core/dist/js/scheduler";
import { pipe } from "@reactive-js/core/dist/js/pipe";
import { BrotliOptions, ZlibOptions } from "zlib";
import { encodeHttpRequest } from "./httpRequest";
import { HttpClientRequest } from "./interfaces";
import {
  createBufferFlowableSinkFromWritable,
  createDisposableNodeStream,
  BufferFlowableLike,
  createBufferFlowableFromReadable,
} from "../../streams";
import {
  FlowEvent,
  FlowMode,
  FlowEventType,
} from "@reactive-js/core/dist/js/flowable";
import { returns } from "@reactive-js/core/dist/js/functions";

export type HttpClientOptions = {
  // Node options
  // don't support agents, we'll build an api to get sockets
  // built around resource-manager
  // readonly agent?: Agent | boolean;
  readonly insecureHTTPParser?: boolean;
  readonly maxHeaderSize?: number;
};

class ResponseBody extends AbstractDisposable implements BufferFlowableLike {
  private consumed = false;

  constructor(private readonly resp: IncomingMessage) {
    super();

    this.add(_ => {
      resp.removeAllListeners();
      resp.destroy();
    });

    const onError = (cause: any) => {
      this.dispose({ cause });
    };
    resp.on("error", onError);
  }

  stream(
    scheduler: SchedulerLike,
    replayCount?: number,
  ): StreamLike<FlowMode, FlowEvent<Buffer>> {
    if (this.consumed) {
      throw new Error("Response body already consumed");
    }
    this.consumed = true;
    const stream = createBufferFlowableFromReadable(() =>
      createDisposableNodeStream(this.resp),
    )
      .stream(scheduler, replayCount)
      .add(this);
    this.add(stream);
    return stream;
  }
}

export const createHttpClient = (
  options: HttpClientOptions = {},
): HttpClient<
  HttpRequest<BufferFlowableLike>,
  BufferFlowableLike & DisposableLike
> => request =>
  using(
    (
      scheduler: SchedulerLike,
    ): [
      StreamLike<FlowMode, FlowEvent<Buffer>>,
      SubjectLike<HttpResponse<ResponseBody>>,
    ] => {
      const { method, uri } = request;

      const url = uri instanceof URL ? uri : new URL(uri.toString());
      const headers = httpRequestToUntypedHeaders(request);

      // FIXME: rework this to support http2
      const nodeRequestOptions = {
        ...options,
        headers,
        method,
      };
      const req =
        uri.protocol === "https:"
          ? httpsRequest(url, nodeRequestOptions)
          : uri.protocol === "http:"
          ? httpRequest(url, nodeRequestOptions)
          : (() => {
              throw new Error();
            })();

      const requestSink = createBufferFlowableSinkFromWritable(() =>
        createDisposableNodeStream(req),
      ).stream(scheduler);

      const requestBody = request.body.stream(scheduler).add(requestSink);

      const onContinue = () => {
        const reqSubscription = pipe(
          requestSink,
          onNotify(next => requestBody.dispatch(next)),
          subscribe(scheduler),
        );
        const dataSubscription = pipe(
          requestBody,
          onNotify(next => requestSink.dispatch(next)),
          subscribe(scheduler),
        ).add(reqSubscription);
        requestBody.add(dataSubscription);
      };

      if (request.expectContinue) {
        req.on("continue", onContinue);
      } else {
        onContinue();
      }

      const responseSubject = createSubject<HttpResponse<ResponseBody>>();
      const onResponse = (resp: IncomingMessage) => {
        requestBody.dispose();

        const body = new ResponseBody(resp);
        responseSubject.add(body);
        body.add(responseSubject);

        const response = parseHttpResponseFromHeaders(
          resp.statusCode ?? -1,
          resp.headers as HttpHeaders,
          body,
        );

        responseSubject.dispatch(response);
      };
      req.on("response", onResponse);

      return [requestBody, responseSubject];
    },
    (
      requestBody: StreamLike<FlowMode, FlowEvent<Buffer>>,
      responseSubject: SubjectLike<HttpResponse<ResponseBody>>,
    ) =>
      merge(
        pipe(
          requestBody,
          scan(
            ([incr, count], ev): [number, number] =>
              ev.type === FlowEventType.Next
                ? [ev.data.length, count + incr]
                : [-1, count + incr],

            returns<[number, number]>([0, 0]),
          ),
          map(([incr, count]) =>
            incr < 0
              ? { type: HttpClientRequestStatusType.Completed }
              : count > 0
              ? {
                  type: HttpClientRequestStatusType.Progress,
                  count,
                }
              : none,
          ),
          keepType(isSome),
        ),
        pipe(
          responseSubject,
          map(response => ({
            type: HttpClientRequestStatusType.HeadersReceived,
            response,
          })),
        ),
      ),
  );

const redirectCodes = [
  HttpStatusCode.MovedPermanently,
  HttpStatusCode.Found,
  HttpStatusCode.SeeOther,
  HttpStatusCode.TemporaryRedirect,
  HttpStatusCode.PermanentRedirect,
];

export const withDefaultBehaviors = (
  options?: ZlibOptions | (BrotliOptions & { maxRedirects: number }),
) => (
  httpClient: HttpClient<
    HttpRequest<BufferFlowableLike>,
    BufferFlowableLike & DisposableLike
  >,
): HttpClient<HttpClientRequest, BufferFlowableLike & DisposableLike> => {
  const sendRequest: HttpClient<
    HttpClientRequest,
    BufferFlowableLike & DisposableLike
  > = request =>
    pipe(
      ofValue(request),
      map(encodeHttpRequest(options)),
      switchMap(httpClient),
      concatMap(status => {
        // FIXME: Move this logic into http-common
        if (status.type === HttpClientRequestStatusType.HeadersReceived) {
          const { response } = status;
          const { location, preferences, statusCode } = response;
          const acceptedEncodings = preferences?.acceptedEncodings ?? [];
          const shouldRedirect =
            redirectCodes.includes(statusCode) &&
            isSome(location) &&
            (request?.maxRedirects ?? 10) > 0;

          const newRequest = shouldRedirect
            ? createRedirectHttpRequest(request, response)
            : statusCode === HttpStatusCode.ExpectationFailed
            ? { ...request, expectContinue: false }
            : statusCode === HttpStatusCode.UnsupportedMediaType &&
              acceptedEncodings.length > 0
            ? { ...request, acceptedEncodings }
            : request;

          if (request !== newRequest) {
            response.body.dispose();
            return sendRequest(newRequest);
          }
          // Fallthrough
        }
        return ofValue(status);
      }),
    );

  return sendRequest;
};
