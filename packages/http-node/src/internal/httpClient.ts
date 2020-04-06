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
  HttpContentEncoding,
  HttpResponseLike,
  HttpRequestLike,
  HttpStatusCode,
  makeRedirectRequest,
} from "@reactive-js/http";
import {
  HttpContentBodyLike,
  createIncomingMessageContentBody,
  encodeContentBody,
  emptyContentBody,
  lift as liftContentBody,
  decodeContentBody,
} from "./httpContentBody";
import {
  createWritableAsyncEnumerator,
  ReadableEventType,
  ReadableEvent,
} from "@reactive-js/node";
import {
  supportedEncodings,
  getFirstSupportedEncoding,
} from "./HttpContentEncoding";
import { ZlibOptions, BrotliOptions } from "zlib";

export interface HttpClientResponseLike
  extends HttpResponseLike<HttpContentBodyLike>,
    DisposableLike {}

class HttpClientResponseImpl implements HttpClientResponseLike {
  readonly add = add;
  readonly content: HttpContentBodyLike | undefined;
  readonly disposable: DisposableLike;
  readonly dispose = dispose;

  constructor(private readonly msg: IncomingMessage) {
    const disposable = createDisposableWrapper(msg, msg => msg.destroy());
    const content = createIncomingMessageContentBody(disposable);

    this.disposable = disposable;
    this.content = content.contentLength !== 0 ? content : undefined;
  }

  get acceptedEncodings(): readonly HttpContentEncoding[] {
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

  get vary(): readonly string[] {
    // We're not going to use this so just return empty string.
    return [];
  }
}

class HttpContentDecodingClientResponse implements HttpClientResponseLike {
  readonly add = add;
  readonly content: HttpContentBodyLike | undefined;
  readonly dispose = dispose;

  constructor(
    readonly disposable: HttpClientResponseLike,
    options: BrotliOptions | ZlibOptions,
  ) {
    const { content } = disposable;
    this.content =
      content !== undefined ? decodeContentBody(content, options) : undefined;
  }

  get acceptedEncodings() {
    return this.disposable.acceptedEncodings;
  }

  get headers() {
    return this.disposable.headers;
  }

  get isDisposed() {
    return this.disposable.isDisposed;
  }

  get location() {
    return this.disposable.location;
  }

  get statusCode(): number {
    return this.disposable.statusCode;
  }

  get vary(): readonly string[] {
    return this.disposable.vary;
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

export interface HttpClientOptions {
  readonly maxRedirects?: number;
  readonly contentEncoding?: HttpContentEncoding;

  // Node options
  readonly agent?: Agent | boolean;
  readonly insecureHTTPParser?: boolean;
  readonly maxHeaderSize?: number;

  // zlib options
  readonly zlibOptions?: BrotliOptions | ZlibOptions;
}

const bannedHeaders = [
  "accept-encoding",
  "content-encoding",
  "content-length",
  "content-type",
  "expect",
  "vary",
];

const createHeaders = (
  { content, expectContinue, headers }: HttpRequestLike<HttpContentBodyLike>,
  contentEncoding?: HttpContentEncoding,
) => {
  const reqHeaders: OutgoingHttpHeaders = {
    "accept-encoding": supportedEncodings.join(","),
  };

  if (expectContinue) {
    reqHeaders["expect"] = "100-continue";
  }

  if (
    content !== undefined &&
    content.contentType !== "" &&
    content.contentLength !== 0
  ) {
    const { contentLength, contentType } = content;

    reqHeaders["content-type"] = contentType;

    if (contentLength > 0) {
      reqHeaders["content-length"] = contentLength;
    }

    if (contentEncoding !== undefined) {
      reqHeaders["content-encoding"] = contentEncoding;
    }
  }

  const headerPairs = Object.entries(headers).filter(
    ([key]) => !bannedHeaders.includes(key),
  );

  for (const [header, value] of headerPairs) {
    reqHeaders[header] = String(value);
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
    maxRedirects = 0,
    zlibOptions = {},
    ...nodeOptions
  } = options;

  const { method, uri } = request;

  const url = uri instanceof URL ? uri : new URL(uri.toString());

  const send =
    uri.protocol === "https:"
      ? httpsRequest
      : uri.protocol === "http:"
      ? httpRequest
      : (() => {
          throw new Error();
        })();

  const spyContentBody = (
    subscriber: SafeSubscriberLike<HttpClientRequestStatus>,
  ) => (content: HttpContentBodyLike): HttpContentBodyLike => {
    const scanner = (
      [uploaded, total]: [number, number],
      ev: ReadableEvent,
    ): [number, number] =>
      ev.type === ReadableEventType.Data
        ? [ev.chunk.length, total + uploaded]
        : [-1, total + uploaded];

    const doOnNotify = ([count, total]: [number, number]) => {
      const ev: HttpClientRequestStatus =
        count < 0
          ? { type: HttpClientRequestStatusType.UploadComplete }
          : { type: HttpClientRequestStatusType.Uploaded, total };
      subscriber.dispatch(ev);
    };

    return pipe(
      content,
      liftContentBody(
        spy(
          compose(
            scan(scanner, (): [number, number] => [0, 0]),
            onNotify(doOnNotify),
          ),
        ),
        content,
      ),
    );
  };

  const reqHeaders = createHeaders(request, contentEncoding);
  const nodeRequestOptions = {
    ...nodeOptions,
    headers: reqHeaders,
    method,
  };

  const onSubscribe = (
    subscriber: SafeSubscriberLike<HttpClientRequestStatus>,
  ) => {
    subscriber.dispatch({ type: HttpClientRequestStatusType.Begin, request });

    const req = send(url, nodeRequestOptions);

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

    const reqBodyEnumerator = createWritableAsyncEnumerator(req, subscriber);
    const contentEnumerator = pipe(
      request.content || emptyContentBody,
      spyContentBody(subscriber),
      contentBody =>
        contentEncoding !== undefined
          ? encodeContentBody(contentBody, contentEncoding, zlibOptions)
          : contentBody,
    ).enumerateAsync(subscriber);

    const onContinue = () => {
      contentEnumerator.subscribe(reqBodyEnumerator);
      reqBodyEnumerator.subscribe(contentEnumerator);
    };
    if (request.expectContinue) {
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

  const handleResponse = (
    status: HttpClientRequestStatus,
  ): ObservableLike<HttpClientRequestStatus> => {
    if (status.type === HttpClientRequestStatusType.ResponseReady) {
      const { response } = status as {
        type: HttpClientRequestStatusType.ResponseReady;
        response: HttpClientResponseImpl;
      };
      const { acceptedEncodings, content, location, statusCode } = response;
      const shouldRedirect =
        redirectCodes.includes(statusCode) &&
        location !== undefined &&
        maxRedirects > 0;

      const firstSupportedEncoding = getFirstSupportedEncoding(
        acceptedEncodings || [],
      );

      const { newRequest, newOptions } = (() => {
        if (shouldRedirect) {
          const newRequest = makeRedirectRequest(request, response);
          const newOptions = {
            ...options,
            maxRedirects: maxRedirects - 1,
          };
          return { newRequest, newOptions };
        } else if (statusCode === HttpStatusCode.ExpectationFailed) {
          const newOptions = {
            ...options,
            expectContinue: false,
          };
          return { newRequest: request, newOptions };
        } else if (
          statusCode === HttpStatusCode.UnsupportedMediaType &&
          contentEncoding !== undefined
        ) {
          const newOptions = {
            ...options,
            contentEncoding: firstSupportedEncoding,
          };
          return { newRequest: request, newOptions };
        } else {
          return { newRequest: request, newOptions: options };
        }
      })();

      if (newRequest !== request || newOptions !== options) {
        response.dispose();
        return sendHttpRequestInternal(newRequest, newOptions);
      } else if (content !== undefined && content.contentEncodings.length > 0) {
        return ofValue({
          type: HttpClientRequestStatusType.ResponseReady,
          response: new HttpContentDecodingClientResponse(
            response,
            zlibOptions,
          ),
        });
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
