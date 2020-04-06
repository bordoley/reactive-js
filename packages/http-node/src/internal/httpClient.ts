import {
  IncomingMessage,
  OutgoingHttpHeaders,
  request as httpRequest,
  Agent,
} from "http";
import { request as httpsRequest } from "https";
import { URL } from "url";
import { ZlibOptions, BrotliOptions } from "zlib";
import { identity, lift } from "@reactive-js/async-enumerable";
import {
  HttpContentEncoding,
  HttpRequestLike,
  HttpStatusCode,
  makeRedirectRequest,
} from "@reactive-js/http";
import {
  createWritableAsyncEnumerator,
  ReadableEvent,
  transform,
  ReadableEventType,
} from "@reactive-js/node";
import {
  createObservable,
  ObservableLike,
  ofValue,
  SafeSubscriberLike,
  map,
  concatAll,
  onNotify,
  scan,
} from "@reactive-js/observable";
import { pipe, compose } from "@reactive-js/pipe";
import {
  HttpClientResponseLike,
  HttpContentDecodingClientResponse,
  HttpClientResponseImpl,
} from "./httpClientResponse";
import { HttpContentBodyLike, emptyContentBody } from "./httpContentBody";
import {
  supportedEncodings,
  getFirstSupportedEncoding,
  createEncodingCompressTransform,
} from "./httpContentEncoding";
import { writeRequestHeaders } from "./httpHeaders";

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

const spyScanner = (
  [uploaded, total]: [number, number],
  ev: ReadableEvent,
): [number, number] =>
  ev.type === ReadableEventType.Data
    ? [ev.chunk.length, total + uploaded]
    : [-1, total + uploaded];

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

  request = {
    ...request,
    acceptedEncodings: supportedEncodings,
  };

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

  const nodeHeaders: OutgoingHttpHeaders = {};
  writeRequestHeaders(
    request,
    (header, value) => nodeHeaders[header] = value,
  );

  const nodeRequestOptions = {
    ...nodeOptions,
    headers: nodeHeaders,
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

    const doOnNotify = ([count, total]: [number, number]) => {
      const ev: HttpClientRequestStatus =
        count < 0
          ? { type: HttpClientRequestStatusType.UploadComplete }
          : { type: HttpClientRequestStatusType.Uploaded, total };
      subscriber.dispatch(ev);
    };

    const spyEnumerator = pipe(
      identity<ReadableEvent>(),
      lift(
        compose(
          scan(spyScanner, (): [number, number] => [0, 0]),
          onNotify(doOnNotify),
        ),
      ),
    ).enumerateAsync(subscriber);

    const contentEnumerator = pipe(
      request.content || emptyContentBody,
      lift(
        onNotify(ev => spyEnumerator.dispatch(ev)),
      ),
      contentEncoding !== undefined
        ? transform(createEncodingCompressTransform(contentEncoding, zlibOptions))
        : x => x,
    ).enumerateAsync(subscriber);

    subscriber
    .add(reqBodyEnumerator)
    .add(spyEnumerator)
    .add(contentEnumerator)
    .add(_ => {
      req.abort();
      req.removeAllListeners();
      req.destroy();
    });

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
  };

  const handleResponse = (
    status: HttpClientRequestStatus,
  ): ObservableLike<HttpClientRequestStatus> => {
    if (status.type === HttpClientRequestStatusType.ResponseReady) {
      const { response } = status;

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
