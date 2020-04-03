import { AsyncEnumerableLike } from "@reactive-js/async-enumerable";
import { URL } from "url";
import { ReadableMode, ReadableEvent } from "./readable";

export const enum HttpMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

export const enum HttpContentEncoding {
  Brotli = "br",
  Compress = "compress",
  Deflate = "deflate",
  GZip = "gzip",
  Identity = "identity",
}

/** @noInheritDoc */
export interface HttpContentBodyLike
  extends AsyncEnumerableLike<ReadableMode, ReadableEvent> {
  readonly contentLength: number;
  readonly contentType: string;
  readonly contentEncodings: readonly HttpContentEncoding[];
}

export interface HttpHeaders {
  [header: string]: number | string | string[] | undefined;
}

export interface HttpRequestLike<T> {
  content?: T;

  // FIXME: Limit the allowed set of headers
  readonly headers: HttpHeaders;
  readonly method: HttpMethod;
  readonly url: string | URL;

  readonly acceptedEncodings: readonly HttpContentEncoding[];
}

export interface HttpResponseLike<T> {
  readonly location?: string;
  readonly statusCode: number;
  readonly content?: T;
}
