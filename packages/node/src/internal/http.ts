import { URL } from "url";

export const enum HttpMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

// FIXME: filter out headers for which we have strongly typed apis.
export interface HttpHeadersLike {
  [header: string]: number | string | string[] | undefined;
}

export interface HttpRequestLike<T> {
  readonly content?: T;

  readonly headers: HttpHeadersLike;
  readonly method: HttpMethod;
  readonly url: URL;
}

export const createHttpRequest = <T>(
  method: HttpMethod,
  url: string | URL,
  options: {
    content?: T;
    headers?: HttpHeadersLike;
  } = {},
): HttpRequestLike<T> => {
  const { content, headers = {} } = options;

  return {
    content,
    // FIXME: filter out headers for which we have strongly typed apis.
    headers,
    method,
    url: url instanceof URL ? url : new URL(url),
  };
};

export interface HttpResponseLike<T> {
  readonly content?: T;
  readonly headers: HttpHeadersLike;
  readonly location?: URL;
  readonly statusCode: number;
}

export const createHttpResponse = <T>(
  statusCode: number,
  options: {
    content?: T;
    headers?: HttpHeadersLike;
    location?: URL;
  } = {},
): HttpResponseLike<T> => {
  const { content, headers = {}, location } = options;

  return {
    content,
    // FIXME: filter out headers for which we have strongly typed apis.
    headers,
    location,
    statusCode,
  };
};
