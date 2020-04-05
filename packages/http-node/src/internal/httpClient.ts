import {
  IncomingMessage,
  OutgoingHttpHeaders,
  request as httpRequest,
  Agent,
} from "http";
import { request as httpsRequest } from "https";
import { URL } from "url";
import {
  AsyncEnumerableOperatorLike,
  createAsyncEnumerable,
} from "@reactive-js/async-enumerable";
import {
  DisposableLike,
  dispose,
  add,
  createDisposableWrapper,
} from "@reactive-js/disposable";
import {
  createObservable,
  ObservableLike,
  ofValue,
  SafeSubscriberLike,
  map,
  concatAll,
  ObservableOperatorLike,
  subscribe,
  scan,
  onNotify,
} from "@reactive-js/observable";
import { pipe, compose } from "@reactive-js/pipe";
import {
  HttpResponseLike,
  HttpRequestLike,
  HttpMethod,
  HttpHeadersLike,
  HttpStatusCode,
  URI,
} from "@reactive-js/http";
import {
  HttpContentBodyLike,
  createIncomingMessageContentBody,
  encodeContentBody,
  emptyContentBody,
  lift as liftContentBody,
} from "./httpContentBody";
import {
  createWritableAsyncEnumerator,
  ReadableEventType,
} from "@reactive-js/node";
import {
  HttpContentEncoding,
  supportedEncodings,
  getFirstSupportedEncoding,
} from "./HttpContentEncoding";

export interface HttpClientResponseLike
  extends HttpResponseLike<HttpContentBodyLike>,
    DisposableLike {}

class HttpClientResponseImpl implements HttpClientResponseLike {
  readonly add = add;
  readonly content: HttpContentBodyLike;
  readonly disposable: DisposableLike;
  readonly dispose = dispose;

  constructor(private readonly msg: IncomingMessage) {
    const disposable = createDisposableWrapper(msg, msg => msg.destroy());

    this.disposable = disposable;
    this.content = createIncomingMessageContentBody(disposable);
  }

  get acceptEncodings(): readonly HttpContentEncoding[] | undefined {
    return [];
  }

  get headers() {
    return this.msg.headers;
  }

  get isDisposed() {
    return this.disposable.isDisposed;
  }

  get location() {
    try {
      return new URL(this.msg.headers.location || "");
    } catch (_) {
      return undefined;
    }
  }

  get statusCode(): number {
    return this.msg.statusCode || -1;
  }
}

export const enum HttpClientRequestStatusType {
  Begin = 1,
  Uploaded = 2,
  UploadComplete = 3,
  ResponseReady = 4,
}

export interface HttpClientRequestStatusBegin {
  readonly type: HttpClientRequestStatusType.Begin;
  readonly request: HttpRequestLike<HttpContentBodyLike>;
}

export interface HttpClientRequestStatusUploading {
  readonly type: HttpClientRequestStatusType.Uploaded;
  readonly total: number;
}

export interface HttpClientRequestStatusUploadComplete {
  readonly type: HttpClientRequestStatusType.UploadComplete;
}

export interface HttpClientRequestStatusResponseReady {
  readonly type: HttpClientRequestStatusType.ResponseReady;
  readonly response: HttpClientResponseLike;
}

export type HttpClientRequestStatus =
  | HttpClientRequestStatusBegin
  | HttpClientRequestStatusUploading
  | HttpClientRequestStatusUploadComplete
  | HttpClientRequestStatusResponseReady;

const redirectCodes = [
  HttpStatusCode.MovedPermanently,
  HttpStatusCode.Found,
  HttpStatusCode.SeeOther,
  HttpStatusCode.TemporaryRedirect,
  HttpStatusCode.PermanentRedirect,
];

const makeRedirectRequest = (
  request: HttpRequestLike<HttpContentBodyLike>,
  response: HttpClientResponseImpl,
): HttpRequestLike<HttpContentBodyLike> => {
  const { content, method } = request;
  const { location, statusCode } = response;

  const redirectToGet =
    statusCode === 303 ||
    ((statusCode === 301 || statusCode === 302) && method === "POST");

  return {
    ...request,
    content: redirectToGet ? undefined : content,
    method: redirectToGet ? HttpMethod.GET : method,

    // This function is only called if location is undefined.
    uri: location as URI,
  };
};

export interface HttpClientOptions {
  readonly contentEncoding?: HttpContentEncoding;
  readonly expectContinue?: boolean;
  readonly maxRedirects?: number;

  // Node options
  readonly agent?: Agent | boolean;
  readonly insecureHTTPParser?: boolean;
  readonly maxHeaderSize?: number;
}

const bannedHeaders = [
  "accept-encoding",
  "content-encoding",
  "content-length",
  "content-type",
  "expect",
];

const createHeaders = (
  headers: HttpHeadersLike,
  expectContinue: boolean,
  content?: HttpContentBodyLike,
  contentEncoding?: HttpContentEncoding,
) => {
  const headerPairs = Object.entries(headers).filter(
    ([key]) => !bannedHeaders.includes(key),
  );

  const reqHeaders: OutgoingHttpHeaders = {
    "accept-encoding": supportedEncodings.join(","),
  };

  for (const [header, value] of headerPairs) {
    reqHeaders[header] = value;
  }

  if (expectContinue) {
    reqHeaders["expect"] = "100-continue";
  }

  if (content !== undefined) {
    const { contentType, contentLength } = content;
    reqHeaders["content-type"] = contentType;

    if (contentLength > 0) {
      reqHeaders["content-length"] = content.contentLength;
    }

    if (contentEncoding !== undefined) {
      reqHeaders["content-encoding"] = contentEncoding;
    }
  }

  return reqHeaders;
};

// FIXME: This should be an operator in the AsyncEnumerable package
const spy = <TReq, T>(
  op: ObservableOperatorLike<T, unknown>,
): AsyncEnumerableOperatorLike<TReq, T, TReq, T> => enumerable =>
  createAsyncEnumerable(observable =>
    createObservable(subscriber => {
      const enumerator = enumerable.enumerateAsync(subscriber);
      subscriber.add(enumerator);

      observable.subscribe(enumerator);
      enumerator.subscribe(subscriber);

      subscriber.add(pipe(enumerator, op, subscribe(subscriber)));
    }),
  );

// FIXME: Support HTTP2 as well.
const sendHttpRequestInternal = (
  request: HttpRequestLike<HttpContentBodyLike>,
  options: HttpClientOptions = {},
): ObservableLike<HttpClientRequestStatus> => {
  const {
    contentEncoding,
    expectContinue = false,
    maxRedirects = 0,
    ...nodeOptions
  } = options;

  const { content, headers, method, uri } = request;

  const url = uri instanceof URL ? uri : new URL(uri.toString());

  const send =
    uri.protocol === "https:"
      ? httpsRequest
      : uri.protocol === "http:"
      ? httpRequest
      : (() => {
          throw new Error();
        })();

  const onSubscribe = (
    subscriber: SafeSubscriberLike<HttpClientRequestStatus>,
  ) => {
    const reqHeaders = createHeaders(headers, expectContinue, content, contentEncoding);

    subscriber.dispatch({ type: HttpClientRequestStatusType.Begin, request });

    const req = send(url, {
      ...nodeOptions,
      headers: reqHeaders,
      method,
    });

    const onError = (cause: any) => {
      // FIXME: Maybe we should dispatch a message instead of an error.
      subscriber.dispose({ cause });
    };
    req.on("error", onError);

    const onResponse = (resp: IncomingMessage) => {
      const response = new HttpClientResponseImpl(resp).add(subscriber);
      subscriber.dispatch({
        type: HttpClientRequestStatusType.ResponseReady,
        response,
      });
    };
    req.on("response", onResponse);

    const definedContent = content || emptyContentBody;
    const contentEnumerator = pipe(
      definedContent,
      liftContentBody(
        spy(
          compose(
            scan(
              ([uploaded, total], ev) =>
                ev.type === ReadableEventType.Data
                  ? [ev.chunk.length, total + uploaded]
                  : [-1, total + uploaded],

              () => [0, 0],
            ),
            onNotify(([count, total]) => {
              const ev: HttpClientRequestStatus =
                count < 0
                  ? { type: HttpClientRequestStatusType.UploadComplete }
                  : { type: HttpClientRequestStatusType.Uploaded, total };
              subscriber.dispatch(ev);
            }),
          ),
        ),
        {
          contentLength: definedContent.contentLength,
          contentType: definedContent.contentType,
        },
      ),

      contentEncoding !== undefined
        ? encodeContentBody(contentEncoding)
        : x => x,
    ).enumerateAsync(subscriber);

    const reqBodyEnumerator = createWritableAsyncEnumerator(req, subscriber);

    const onContinue = () => {
      contentEnumerator.subscribe(reqBodyEnumerator);
      reqBodyEnumerator.subscribe(contentEnumerator);
    };
    if (expectContinue) {
      req.on("continue", onContinue);
    } else {
      onContinue();
    }

    // FIXME (ev: upgrade): Handle the upgrade header and either upgrade to https or http2 (once we have a client).

    // Intentionally ignored events:
    // * abort: The only way to abort is for the request to be disposed
    // * connect: Used for request proxying. We don't support the connect method.
    // * socket: Nothing really to do here.
    // * timeout: reactive-js has a timeout operator. use it instead.
    // * information: Not much to do, we already support continue via the continue event, and will support upgrade.

    subscriber
      .add(contentEnumerator)
      .add(reqBodyEnumerator)
      .add(_ => {
        req.abort();
        req.removeAllListeners();
        req.destroy();
      });
  };

  const handleResponse = (status: HttpClientRequestStatus) => {
    if (status.type === HttpClientRequestStatusType.ResponseReady) {
      const { response } = status as {
        type: HttpClientRequestStatusType.ResponseReady;
        response: HttpClientResponseImpl;
      };
      const { acceptEncodings, location, statusCode } = response;
      const shouldRedirect =
        redirectCodes.includes(statusCode) &&
        location !== undefined &&
        maxRedirects > 0;

      const firstSupportedEncoding = getFirstSupportedEncoding(
        acceptEncodings || [],
      );

      if (shouldRedirect) {
        response.dispose();

        const newRequest = makeRedirectRequest(request, response);
        return sendHttpRequestInternal(newRequest, {
          ...options,
          maxRedirects: maxRedirects - 1,
        });
      } else if (statusCode === HttpStatusCode.ExpectationFailed) {
        response.dispose();
        return sendHttpRequestInternal(request, {
          ...options,
          expectContinue: false,
        });
      } else if (
        statusCode === HttpStatusCode.UnsupportedMediaType &&
        contentEncoding !== undefined &&
        firstSupportedEncoding != undefined
      ) {
        response.dispose();

        return sendHttpRequestInternal(request, {
          ...options,
          contentEncoding: firstSupportedEncoding,
        });
      } else if (
        statusCode === HttpStatusCode.UnsupportedMediaType &&
        contentEncoding !== undefined &&
        acceptEncodings !== undefined
      ) {
        const { contentEncoding, ...newOptions } = options;
        return sendHttpRequestInternal(request, newOptions);
      } else {
        // fallthrough
      }
    }
    return ofValue(status);
  };

  return pipe(
    createObservable<HttpClientRequestStatus>(onSubscribe),
    map(handleResponse),
    concatAll(),
  );
};

export const sendHttpRequest = (options: HttpClientOptions = {}) => (
  request: HttpRequestLike<HttpContentBodyLike>,
) => sendHttpRequestInternal(request, options);
