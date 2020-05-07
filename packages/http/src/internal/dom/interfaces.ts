import { DisposableLike } from "@reactive-js/core/lib/disposable";
import { ObservableLike } from "@reactive-js/core/lib/observable";
import { HttpClientRequest } from "../../http";

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
