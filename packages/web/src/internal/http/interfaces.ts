import { DisposableLike } from "@reactive-js/core/dist/js/disposable";
import { ObservableLike } from "@reactive-js/core/dist/js/observable";
import { HttpClientRequest } from "@reactive-js/core/dist/js/http";

// BodyInit
export type WebRequestBody =
  | Blob
  | BufferSource
  | FormData
  | ReadableStream<Uint8Array>
  | string
  | URLSearchParams
  | undefined;

export type HttpWebRequest = HttpClientRequest<WebRequestBody> & {
  cache?: RequestCache;
  credentials?: RequestCredentials;
  integrity?: string;
  mode?: RequestMode;
  redirect?: RequestRedirect;
  referrerPolicy?: ReferrerPolicy;
};

export interface WebResponseBodyLike extends DisposableLike {
  arrayBuffer: ObservableLike<ArrayBuffer>;
  blob: ObservableLike<Blob>;
  text: ObservableLike<string>;
}
