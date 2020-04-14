import { identity } from "@reactive-js/async-enumerable";
import {
  HttpContentRequest,
  HttpContentResponse,
  writeHttpRequestHeaders,
  parseHttpResponseFromHeaders,
  HttpHeaders,
  httpRequestToUntypedHeaders,
} from "@reactive-js/http";
import {
  ObservableLike,
  createObservable,
  switchMap,
  ofValue,
} from "@reactive-js/observable";
import {
  DisposableValueLike,
  createDisposableValue,
  createDisposable,
} from "@reactive-js/disposable";
import { pipe } from "@reactive-js/pipe";

// BodyInit
export type WebRequestBody =
  | Blob
  | BufferSource
  | FormData
  | ReadableStream<Uint8Array>
  | string
  | URLSearchParams;

export interface WebResponseBodyLike {
  arrayBuffer(): ObservableLike<ArrayBuffer>;
  blob(): ObservableLike<Blob>;
  text(): ObservableLike<string>;
}

export const enum HttpClientRequestStatusType {
  Begin = 1,
  Uploaded = 2,
  UploadComplete = 3,
  ResponseReady = 4,
}

export type HttpClientRequestStatusBegin = {
  readonly type: HttpClientRequestStatusType.Begin;
  readonly request: HttpContentRequest<WebRequestBody>;
};

export type HttpClientRequestStatusUploading = {
  readonly type: HttpClientRequestStatusType.Uploaded;
  readonly request: HttpContentRequest<WebRequestBody>;
  readonly total: number;
};

export type HttpClientRequestStatusUploadComplete = {
  readonly type: HttpClientRequestStatusType.UploadComplete;
  readonly request: HttpContentRequest<WebRequestBody>;
};

export type HttpClientRequestStatusResponseReady = {
  readonly type: HttpClientRequestStatusType.ResponseReady;
  readonly request: HttpContentRequest<WebRequestBody>;
  readonly response: DisposableValueLike<
    HttpContentResponse<WebResponseBodyLike>
  >;
};

export type HttpClientRequestStatus =
  | HttpClientRequestStatusBegin
  | HttpClientRequestStatusUploading
  | HttpClientRequestStatusUploadComplete
  | HttpClientRequestStatusResponseReady;

const parseHeaders = (rawHeaders: string): HttpHeaders => {
  const headers: { [header: string]: string } = {};

  // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
  // https://tools.ietf.org/html/rfc7230#section-3.2
  const preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, " ");
  const lines = preProcessedHeaders.split(/\r?\n/);
  for (const line of lines) {
    const parts = line.split(":");
    const key = (parts.shift() as string).trim();

    if (key !== undefined && key !== "") {
      const value = parts.join(":").trim();
      headers[key.toLowerCase()] = value;
    }
  }

  return headers;
};

export type HttpWebRequest = HttpContentRequest<WebRequestBody> & {
  cache?: RequestCache;
  credentials?: RequestCredentials;
  integrity?: string;
  mode?: RequestMode;
  redirect?: RequestRedirect;
  referrerPolicy?: ReferrerPolicy;
};

const supportsArrayBuffer = "ArrayBuffer" in self;
const supportsBlob =
  "FileReader" in self &&
  "Blob" in self &&
  (() => {
    try {
      new Blob();
      return true;
    } catch (e) {
      return false;
    }
  })();

const blobToString = (blob: Blob): ObservableLike<string> =>
  createObservable(subscriber => {
    const reader = new FileReader();
    reader.onload = () => {
      subscriber.dispatch(reader.result as string);
    };

    reader.onerror = function() {
      subscriber.dispose({ cause: reader.error });
    };

    reader.readAsText(blob);
  });

const blobToArrayBuffer = (body: Blob): ObservableLike<ArrayBuffer> =>
  createObservable(subscriber => {
    const reader = new FileReader();
    reader.onload = () => {
      subscriber.dispatch(reader.result as ArrayBuffer);
    };

    reader.onerror = function() {
      subscriber.dispose({ cause: reader.error });
    };

    reader.readAsArrayBuffer(body);
  });

const throwTypeError = <T>(): T => {
  throw new TypeError("invalid type");
};

const bodyToArrayBuffer = (body: unknown): ObservableLike<ArrayBuffer> => {
  return typeof body === "string" || body instanceof Blob
    ? blobToArrayBuffer(new Blob([body]))
    : body instanceof ArrayBuffer
    ? ofValue(body)
    : throwTypeError();
};

const bodyToBlob = (body: unknown): ObservableLike<Blob> => {
  return typeof body === "string" || body instanceof ArrayBuffer
    ? ofValue(new Blob([body]))
    : body instanceof Blob
    ? ofValue(body)
    : throwTypeError();
};

const bodyToText = (body: unknown): ObservableLike<string> => {
  return typeof body === "string"
    ? ofValue(body)
    : body instanceof Blob
    ? blobToString(body)
    : body instanceof ArrayBuffer
    ? blobToString(new Blob([body]))
    : throwTypeError();
};

class HttpResponseBodyImpl implements WebResponseBodyLike {
  constructor(readonly body: ObservableLike<unknown>) {}

  arrayBuffer(): ObservableLike<ArrayBuffer> {
    return pipe(this.body, switchMap(bodyToArrayBuffer));
  }

  blob(): ObservableLike<Blob> {
    return pipe(this.body, switchMap(bodyToBlob));
  }

  text(): ObservableLike<string> {
    return pipe(this.body, switchMap(bodyToText));
  }
}

const sendHttpRequestUsingXHR = (
  request: HttpWebRequest,
): ObservableLike<HttpClientRequestStatus> =>
  createObservable(subscriber => {
    const xhr = new XMLHttpRequest();
    const xhrSupportsResponseType = "responseType" in xhr;
    const bodyEnumerator = identity().enumerateAsync(subscriber, 1);
    const body = new HttpResponseBodyImpl(bodyEnumerator);

    subscriber.add(() => xhr.abort()).add(bodyEnumerator);

    xhr.onerror = () => {
      const cause = new Error("Network request failed");
      subscriber.dispose({ cause });
    };

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 2) {
        const headersRaw = xhr.getAllResponseHeaders() || "";
        const headers = parseHeaders(headersRaw);

        // FIXME: Maybe update the request with the actual url?
        // is this even necessary if the header is set?
        //const url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')

        const contentResponse = parseHttpResponseFromHeaders(
          xhr.status,
          headers,
          body,
        );

        const content = contentResponse?.content;
        if (xhrSupportsResponseType && content !== undefined) {
          const {
            contentLength,
            contentType: { type, subtype, params },
          } = content;

          const hasCharset = params["charset"] !== undefined;
          const responseIsText =
            hasCharset ||
            type === "text" ||
            subtype.indexOf("json") >= 0 ||
            subtype.indexOf("text") >= 0 ||
            subtype.indexOf("xml") >= 0;

          xhr.responseType = responseIsText
            ? "text"
            : contentLength > 0 && supportsArrayBuffer
            ? "arraybuffer"
            : supportsBlob
            ? "blob"
            : "";
        }

        const response = createDisposableValue(contentResponse, _ => {}).add(
          subscriber,
        );
        subscriber.add(response);

        subscriber.dispatch({
          type: HttpClientRequestStatusType.ResponseReady,
          request,
          response,
        });
      } else if (xhr.readyState === 4) {
        bodyEnumerator.dispatch(xhr.response);
      }
    };

    xhr.onloadstart = () => {
      subscriber.dispatch({
        type: HttpClientRequestStatusType.Begin,
        request,
      });
    };

    xhr.onprogress = ev => {
      const { loaded: total } = ev;

      if (xhr.readyState === 1) {
        subscriber.dispatch({
          type: HttpClientRequestStatusType.Uploaded,
          request,
          total,
        });
      }
    };

    xhr.ontimeout = () => {
      // FIXME: Kind of rather have a state for this
      const cause = new Error("Network request failed");
      subscriber.dispose({ cause });
    };

    if (request.credentials === "include") {
      xhr.withCredentials = true;
    } else if (request.credentials === "omit") {
      xhr.withCredentials = false;
    }

    xhr.open(request.method, request.uri.toString(), true);
    writeHttpRequestHeaders(request, (k, v) => xhr.setRequestHeader(k, v));
    xhr.send(request?.content?.body);
  });

const sendHttpRequestUsingFetch = (
  request: HttpWebRequest,
): ObservableLike<HttpClientRequestStatus> => {
  const {
    cache,
    credentials,
    integrity,
    method,
    mode,
    redirect,
    referrerPolicy,
    uri,
  } = request;
  const url = uri.toString();
  const headers = httpRequestToUntypedHeaders(request);

  return createObservable(async subscriber => {
    const abortController = new AbortController();
    const abortControllerDisposable = createDisposable(() =>
      abortController.abort(),
    );
    const bodyEnumerator = identity().enumerateAsync(subscriber, 1);
    const body = new HttpResponseBodyImpl(bodyEnumerator);

    subscriber.add(abortControllerDisposable).add(bodyEnumerator);

    try {
      subscriber.dispatch({
        type: HttpClientRequestStatusType.Begin,
        request,
      });

      const fetchResponse = await fetch(url, {
        cache,
        credentials,
        headers,
        integrity,
        method,
        mode,
        redirect,
        referrerPolicy,
        signal: abortController.signal,
      });

      const fetchResponseHeaders = fetchResponse.headers;
      const responseHeaders: { [key: string]: string } = {};
      fetchResponseHeaders.forEach((v, k) => {
        responseHeaders[k] = v;
      });

      const contentResponse = parseHttpResponseFromHeaders(
        fetchResponse.status,
        responseHeaders,
        body,
      );

      const response = createDisposableValue(contentResponse, _ => {}).add(
        subscriber,
      );

      subscriber.dispatch({
        type: HttpClientRequestStatusType.ResponseReady,
        request,
        response,
      });

      const content = contentResponse?.content;
      if (content !== undefined) {
        const {
          contentLength,
          contentType: { type, subtype, params },
        } = content;

        const hasCharset = params["charset"] !== undefined;
        const responseIsText =
          hasCharset ||
          type === "text" ||
          subtype.indexOf("json") >= 0 ||
          subtype.indexOf("text") >= 0 ||
          subtype.indexOf("xml") >= 0;

        const responsePromise = responseIsText
          ? fetchResponse.text
          : contentLength > 0 && supportsArrayBuffer
          ? fetchResponse.arrayBuffer
          : supportsBlob
          ? fetchResponse.blob
          : () => Promise.reject(new Error("invalid type"));

        const response = await responsePromise();
        bodyEnumerator.dispatch(response);
        abortControllerDisposable.dispose();
      } else {
        subscriber.dispose();
      }
    } catch (cause) {
      subscriber.dispose({ cause });
    }
  });
};

// Only use fetch if it's the native implementation.
const fetchIsPolyfill = (fetch as any).polyfill !== undefined;

export const sendHttpRequest = (
  request: HttpWebRequest,
): ObservableLike<HttpClientRequestStatus> =>
  fetchIsPolyfill || request.content !== undefined
    ? sendHttpRequestUsingXHR(request)
    : sendHttpRequestUsingFetch(request);
