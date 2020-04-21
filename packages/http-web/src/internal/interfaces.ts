import { DisposableLike } from "@reactive-js/disposable";
import { HttpRequest } from "@reactive-js/http";
import { ObservableLike } from "@reactive-js/observable";

// BodyInit
export type WebRequestBody =
  | Blob
  | BufferSource
  | FormData
  | ReadableStream<Uint8Array>
  | string
  | URLSearchParams
  | undefined;

export type HttpWebRequest = HttpRequest<WebRequestBody> & {
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
