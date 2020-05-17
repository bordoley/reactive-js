import { IncomingMessage, request as httpRequest } from "http";
import { request as httpsRequest } from "https";
import { URL } from "url";
import {
  add,
  dispose,
  DisposableLike,
  AbstractDisposable,
  toErrorHandler,
  addDisposableOrTeardown,
} from "@reactive-js/core/lib/disposable";
import { FlowMode } from "@reactive-js/core/lib/flowable"
import {
  IOEvent,
  IOEventType,
  IOSourceLike,
} from "@reactive-js/core/lib/io";
import { bind, pipe, returns } from "@reactive-js/core/lib/functions";
import {
  createWritableIOSink,
  createDisposableNodeStream,
  createReadableIOSource,
} from "@reactive-js/core/lib/node";
import {
  dispatch,
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
import { stream } from "@reactive-js/core/lib/streamable";
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
  implements IOSourceLike<Uint8Array> {
  private consumed = false;

  constructor(private readonly resp: IncomingMessage) {
    super();

    add(this, _ => {
      resp.removeAllListeners();
      resp.destroy();
    });

    const onError = toErrorHandler(this);
    resp.on("error", onError);
  }

  stream(
    scheduler: SchedulerLike,
    replayCount?: number,
  ): StreamLike<FlowMode, IOEvent<Uint8Array>> {
    if (this.consumed) {
      throw new Error("Response body already consumed");
    }
    this.consumed = true;
    const responseStream = add(
      stream(
        createReadableIOSource(bind(createDisposableNodeStream, this.resp)),
        scheduler,
        replayCount,
      ),
      this,
    );
    add(this, responseStream);
    return responseStream;
  }
}

export const createHttpClient = (
  options: HttpClientOptions = {},
): HttpClient<
  HttpRequest<IOSourceLike<Uint8Array>>,
  IOSourceLike<Uint8Array> & DisposableLike
> => request =>
  using(
    (
      scheduler: SchedulerLike,
    ): [
      StreamLike<FlowMode, IOEvent<Uint8Array>>,
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

      const requestSink = stream(
        createWritableIOSink(bind(createDisposableNodeStream, req)),
        scheduler,
      );

      const requestBody = add(stream(request.body, scheduler), requestSink);

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
          addDisposableOrTeardown(reqSubscription),
        );
        add(requestBody, dataSubscription);
      };

      if (request.expectContinue) {
        req.on("continue", onContinue);
      } else {
        onContinue();
      }

      const responseSubject = createSubject<HttpResponse<ResponseBody>>();
      const onResponse = (resp: IncomingMessage) => {
        dispose(requestBody);

        const body = new ResponseBody(resp);
        add(responseSubject, body);
        add(body, responseSubject);

        const response = parseHttpResponseFromHeaders(
          resp.statusCode ?? -1,
          resp.headers as HttpHeaders,
          body,
        );

        dispatch(responseSubject, response);
      };
      req.on("response", onResponse);

      return [requestBody, responseSubject];
    },
    (
      requestBody: StreamLike<FlowMode, IOEvent<Uint8Array>>,
      responseSubject: SubjectLike<HttpResponse<ResponseBody>>,
    ) =>
      merge(
        pipe(
          requestBody,
          scan(
            ([increment, count], ev): [number, number] =>
              ev.type === IOEventType.Next
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
