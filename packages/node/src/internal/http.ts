import { AsyncEnumerableLike } from "@reactive-js/async-enumerable";
import { OutgoingHttpHeaders } from "http";
import { URL } from "url";
import { ReadableMode, ReadableEvent } from "./readable";

/** @ignore */
export const enum HttpMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

/** @ignore */
export const enum HttpContentEncoding {
  Brotli = "br",
  Compress = "compress",
  Deflate = "deflate",
  GZip = "gzip",
  Identity = "identity",
}

/** @ignore */
export interface HttpContentBodyLike
  extends AsyncEnumerableLike<ReadableMode, ReadableEvent> {
  readonly contentLength: number;
  readonly contentType: string;
  readonly contentEncodings: readonly HttpContentEncoding[];
}

/** @ignore */
export interface HttpRequestLike<T> {
  content?: T;

  // FIXME: Limit the allowed set of headers
  headers?: OutgoingHttpHeaders;
  method: HttpMethod;
  url: string | URL;
}

/** @ignore */
export interface HttpResponseLike<T> {
  readonly location?: string;
  readonly statusCode: number;
  readonly content?: T;
}
