import {
  HttpContentRequestLike,
  HttpContentResponseLike,
  writeHttpRequestHeaders,
  parseHttpResponseFromHeaders,
  HttpHeadersLike,
} from "@reactive-js/http";
import { ObservableLike, createObservable } from "@reactive-js/observable";

export type HttpBody =
  | string
  | Document
  | Blob
  | ArrayBufferView
  | ArrayBuffer
  | FormData
  | URLSearchParams
  | ReadableStream<Uint8Array>;

export const enum HttpClientRequestStatusType {
  Begin = 1,
  Uploaded = 2,
  UploadComplete = 3,
  ResponseReady = 4,
}

export interface HttpClientRequestStatusBegin {
  readonly type: HttpClientRequestStatusType.Begin;
  readonly request: HttpContentRequestLike<HttpBody>;
}

export interface HttpClientRequestStatusUploading {
  readonly type: HttpClientRequestStatusType.Uploaded;
  readonly request: HttpContentRequestLike<HttpBody>;
  readonly total: number;
}

export interface HttpClientRequestStatusUploadComplete {
  readonly type: HttpClientRequestStatusType.UploadComplete;
  readonly request: HttpContentRequestLike<HttpBody>;
}

export interface HttpClientRequestStatusResponseReady {
  readonly type: HttpClientRequestStatusType.ResponseReady;
  readonly request: HttpContentRequestLike<HttpBody>;
  readonly response: HttpContentResponseLike<Blob>;
}

export type HttpClientRequestStatus =
  | HttpClientRequestStatusBegin
  | HttpClientRequestStatusUploading
  | HttpClientRequestStatusUploadComplete
  | HttpClientRequestStatusResponseReady;

const parseHeaders = (rawHeaders: string): HttpHeadersLike => {
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

export const sendHttpRequest = (
  request: HttpContentRequestLike<HttpBody>,
): ObservableLike<HttpClientRequestStatus> =>
  createObservable(subscriber => {
    // FIXME: Wild idea. Use Fetch for GET/HEAD/DELETE requests. Only use XHR for post.
    const xhr = new XMLHttpRequest();
    subscriber.add(() => xhr.abort());

    xhr.onerror = () => {
      const cause = new Error("Network request failed");
      subscriber.dispose({ cause });
    };

    xhr.onload = () => {
      xhr.response;

      const headersRaw = xhr.getAllResponseHeaders() || "";
      const headers = parseHeaders(headersRaw);

      // FIXME: Maybe update the request with the actual url?
      // is this even necessary if the header is set?
      //const url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')

      const body = xhr.response;

      const response = parseHttpResponseFromHeaders<Blob>(
        xhr.status,
        headers,
        body,
      );

      subscriber.dispatch({
        type: HttpClientRequestStatusType.ResponseReady,
        request,
        response,
      });
      subscriber.dispose();
    };

    xhr.onloadstart = () => {
      subscriber.dispatch({
        type: HttpClientRequestStatusType.Begin,
        request,
      });
    };

    xhr.onprogress = ({ loaded: total }) => {
      subscriber.dispatch({
        type: HttpClientRequestStatusType.Uploaded,
        request,
        total,
      });
    };

    xhr.ontimeout = () => {
      // FIXME: Kind of rather have a state for this
      const cause = new Error("Network request failed");
      subscriber.dispose({ cause });
    };

    // FIXME: We need a more typesafe body response
    xhr.responseType = "blob";

    // FIXME: See https://developer.mozilla.org/en-US/docs/Web/API/Request
    /*if (request.credentials === 'include') {
      xhr.withCredentials = true
    } else if (request.credentials === 'omit') {
      xhr.withCredentials = false
    }*/

    xhr.open(request.method, request.uri.toString(), true);
    writeHttpRequestHeaders(request, (k, v) => xhr.setRequestHeader(k, v));
    xhr.send(request?.content?.body);
  });
