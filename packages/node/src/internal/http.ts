import { URL } from "url";

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

// FIXME: filter out headers for which we have strongly typed apis.
export interface HttpHeaders {
  [header: string]: number | string | string[] | undefined;
}

export interface HttpRequestLike<T> {
  readonly acceptedEncodings: readonly HttpContentEncoding[];
  readonly content?: T;

  readonly headers: HttpHeaders;
  readonly method: HttpMethod;
  readonly url: URL;
}

export const createHttpRequest = <T>(
  method: HttpMethod,
  url: string | URL,
  options: {
    acceptedEncodings?: readonly HttpContentEncoding[];
    headers?: HttpHeaders;
    content?: T;
  } = {},
): HttpRequestLike<T> => {
  const { acceptedEncodings = [], headers = {}, content } = options;

  return {
    acceptedEncodings,
    content,
    // FIXME: filter out headers for which we have strongly typed apis.
    headers,
    method,
    url: url instanceof URL ? url : new URL(url),
  };
};

export interface HttpResponseLike<T> {
  readonly content?: T;
  readonly location?: URL;
  readonly statusCode: number;
}
