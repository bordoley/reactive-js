import { DisposableLike } from "@reactive-js/disposable";
import { HttpContentRequest } from "@reactive-js/http";
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

export interface WebResponseBodyLike extends DisposableLike {
  arrayBuffer(): ObservableLike<ArrayBuffer>;
  blob(): ObservableLike<Blob>;
  text(): ObservableLike<string>;
}
