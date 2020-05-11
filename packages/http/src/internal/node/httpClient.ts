import { IncomingMessage, request as httpRequest } from "http";
import { request as httpsRequest } from "https";
import { URL } from "url";
import {
  DisposableLike,
  AbstractDisposable,
} from "@reactive-js/core/lib/disposable";
import {
  FlowEvent,
  FlowMode,
  FlowEventType,
  FlowableLike,
} from "@reactive-js/core/lib/flowable";
import { pipe, returns } from "@reactive-js/core/lib/functions";
import {
  createWritableFlowableSink,
  createDisposableNodeStream,
  createReadableFlowable,
} from "@reactive-js/core/lib/node";
import {
  subscribe,
  scan,
  onNotify,
  map,
  keepType,
  StreamLike,
  using,
  createSubject,
  merge,
  SubjectLike,
  dispatchTo,
} from "@reactive-js/core/lib/observable";
import { none, isSome } from "@reactive-js/core/lib/option";
import { SchedulerLike } from "@reactive-js/core/lib/scheduler";
import {
  httpRequestToUntypedHeaders,
  parseHttpResponseFromHeaders,
  HttpHeaders,
  HttpRequest,
  HttpResponse,
  HttpClient,
  HttpClientRequestStatusType,
} from "../../http";

export type HttpClientOptions = {
  // Node options
  // don't support agents, we'll build an api to get sockets
  // built around resource-manager
  // readonly agent?: Agent | boolean;
  readonly insecureHTTPParser?: boolean;
  readonly maxHeaderSize?: number;
};

class ResponseBody extends AbstractDisposable
  implements FlowableLike<Uint8Array> {
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
  ): StreamLike<FlowMode, FlowEvent<Uint8Array>> {
    if (this.consumed) {
      throw new Error("Response body already consumed");
    }
    this.consumed = true;
    const stream = createReadableFlowable(() =>
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
  HttpRequest<FlowableLike<Uint8Array>>,
  FlowableLike<Uint8Array> & DisposableLike
> => request =>
  using(
    (
      scheduler: SchedulerLike,
    ): [
      StreamLike<FlowMode, FlowEvent<Uint8Array>>,
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

      const requestSink = createWritableFlowableSink(() =>
        createDisposableNodeStream(req),
      ).stream(scheduler);

      const requestBody = request.body.stream(scheduler).add(requestSink);

      const onContinue = () => {
        const reqSubscription = pipe(
          requestSink,
          onNotify(dispatchTo(requestBody)),
          subscribe(scheduler),
        );
        const dataSubscription = pipe(
          requestBody,
          onNotify(dispatchTo(requestSink)),
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
      requestBody: StreamLike<FlowMode, FlowEvent<Uint8Array>>,
      responseSubject: SubjectLike<HttpResponse<ResponseBody>>,
    ) =>
      merge(
        pipe(
          requestBody,
          scan(
            ([increment, count], ev): [number, number] =>
              ev.type === FlowEventType.Next
                ? [ev.data.length, count + increment]
                : [-1, count + increment],

            returns<[number, number]>([0, 0]),
          ),
          map(([increment, count]) =>
            increment < 0
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
