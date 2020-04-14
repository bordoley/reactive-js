import { DisposableValueLike } from "@reactive-js/disposable";
import { HttpContentRequest, HttpContentResponse } from "@reactive-js/http";
import { ObservableLike } from "@reactive-js/observable";

// BodyInit
export type WebRequestBody =
  | Blob
  | BufferSource
  | FormData
  | ReadableStream<Uint8Array>
  | string
  | URLSearchParams;

export type HttpWebRequest = HttpContentRequest<WebRequestBody> & {
  cache?: RequestCache;
  credentials?: RequestCredentials;
  integrity?: string;
  mode?: RequestMode;
  redirect?: RequestRedirect;
  referrerPolicy?: ReferrerPolicy;
};

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
