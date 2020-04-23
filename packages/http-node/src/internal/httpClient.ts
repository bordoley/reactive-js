import { ClientRequest, IncomingMessage, request as httpRequest } from "http";
import { request as httpsRequest } from "https";
import { URL } from "url";
import {
  BufferStreamLike,
  createBufferStreamFromReadable,
  createBufferStreamSinkFromWritable,
  BufferStreamSinkLike,
  createDisposableStream,
} from "@reactive-js/node";
import {
  HttpClient,
  HttpClientRequestStatusType,
  HttpClientRequestStatus,
} from "@reactive-js/http-common";
import { Option, none, isSome } from "@reactive-js/option";
import {
  createObservable,
  publish,
  subscribe,
  scan,
  onNotify,
  ofValue,
  map,
  concatMap,
  switchMap,
} from "@reactive-js/observable";
import {
  DisposableLike,
  AbstractDisposable,
  createSerialDisposable,
} from "@reactive-js/disposable";
import {
  httpRequestToUntypedHeaders,
  parseHttpResponseFromHeaders,
  HttpHeaders,
  HttpStatusCode,
  HttpRequest,
  createRedirectHttpRequest,
} from "@reactive-js/http";
import { SchedulerLike } from "@reactive-js/scheduler";
import {
  AsyncEnumeratorLike,
  StreamMode,
  StreamEvent,
  lift,
  StreamEventType,
  sink,
} from "@reactive-js/async-enumerable";
import { pipe } from "@reactive-js/pipe";
import { BrotliOptions, ZlibOptions } from "zlib";
import { encodeHttpRequest } from "./httpRequest";
import { HttpClientRequest } from "./interfaces";

export type HttpClientOptions = {
  // Node options
  // don't support agents, we'll build an api to get sockets
  // built around resource-manager
  // readonly agent?: Agent | boolean;
  readonly insecureHTTPParser?: boolean;
  readonly maxHeaderSize?: number;
};

class RequestBody extends AbstractDisposable implements BufferStreamSinkLike {
  private consumed = false;

  constructor(private readonly req: ClientRequest) {
    super();

    this.add(_ => {
      req.removeAllListeners();

      // Calling destory can result in onError being called
      // if we don't catch the error, it crashes the process.
      // This kind of sucks, but its the best we can do;
      req.once("error", () => {});
      req.once("close", () => {
        req.removeAllListeners();
      });
      req.destroy();
    });

    const onError = (cause: any) => {
      this.dispose({ cause });
    };
    req.on("error", onError);
  }

  enumerateAsync(
    scheduler: SchedulerLike,
    replayCount?: number,
  ): AsyncEnumeratorLike<StreamEvent<Buffer>, StreamMode> {
    if (this.consumed) {
      throw new Error("Request body already consumed");
    }
    this.consumed = true;
    const sink = createBufferStreamSinkFromWritable(
      () => createDisposableStream(this.req),
      false,
    )
      .enumerateAsync(scheduler, replayCount)
      .add(this);
    this.add(sink);
    return sink;
  }
}

class ResponseBody extends AbstractDisposable implements BufferStreamLike {
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

  enumerateAsync(
    scheduler: SchedulerLike,
    replayCount?: number,
  ): AsyncEnumeratorLike<StreamMode, StreamEvent<Buffer>> {
    if (this.consumed) {
      throw new Error("Response body already consumed");
    }
    this.consumed = true;
    const stream = createBufferStreamFromReadable(() =>
      createDisposableStream(this.resp),
    )
      .enumerateAsync(scheduler, replayCount)
      .add(this);
    this.add(stream);
    return stream;
  }
}

export const createHttpClient = (
  options: HttpClientOptions = {},
): HttpClient<
  HttpRequest<BufferStreamLike>,
  BufferStreamLike & DisposableLike
> => request => {
  return createObservable(subscriber => {
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

    const reqBody = new RequestBody(req);
    const sinkSubscription = createSerialDisposable().add(reqBody);
    subscriber.add(sinkSubscription);

    const onResponse = (resp: IncomingMessage) => {
      sinkSubscription.dispose();

      const body = new ResponseBody(resp);
      subscriber.add(body);
      body.add(subscriber);

      const response = parseHttpResponseFromHeaders(
        resp.statusCode ?? -1,
        resp.headers as HttpHeaders,
        body,
      );

      subscriber.dispatch({
        type: HttpClientRequestStatusType.HeadersReceived,
        response,
      });
    };
    req.on("response", onResponse);

    const content: BufferStreamLike = pipe(
      request.body,
      lift(ev =>
        createObservable(streamEventSubscriber => {
          const publishedEvents = pipe(ev, publish(streamEventSubscriber));
          const progressSubscription = pipe(
            publishedEvents,
            scan(
              ([incr, count], ev) =>
                ev.type === StreamEventType.Next
                  ? [ev.data.length, count + incr]
                  : [-1, count + incr],

              () => [0, 0],
            ),
            onNotify(([incr, count]) => {
              const ev: Option<HttpClientRequestStatus<
                BufferStreamLike & DisposableLike
              >> =
                incr < 0
                  ? { type: HttpClientRequestStatusType.Completed }
                  : count > 0
                  ? {
                      type: HttpClientRequestStatusType.Progress,
                      count,
                    }
                  : none;
              if (isSome(ev)) {
                // Subtle, but we're subscribed on the subscriber's scheduler,
                // so calling notify is safe.
                subscriber.notify(ev);
              }
            }),
            subscribe(streamEventSubscriber),
          );

          streamEventSubscriber.add(publishedEvents).add(progressSubscription);
          publishedEvents.subscribe(streamEventSubscriber);
        }),
      ),
    );

    subscriber.dispatch({ type: HttpClientRequestStatusType.Start });

    const onContinue = () => {
      sinkSubscription.inner = pipe(
        sink(content, reqBody),
        subscribe(subscriber),
      );
    };
    if (request.expectContinue) {
      req.on("continue", onContinue);
    } else {
      onContinue();
    }
  });
};

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
    HttpRequest<BufferStreamLike>,
    BufferStreamLike & DisposableLike
  >,
): HttpClient<HttpClientRequest, BufferStreamLike & DisposableLike> => {
  const sendRequest: HttpClient<
    HttpClientRequest,
    BufferStreamLike & DisposableLike
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
