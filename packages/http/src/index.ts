// A Proxy readonly interface for the what-wg URL api.
export interface URI {
  readonly hash: string;
  readonly host: string;
  readonly hostname: string;
  readonly href: string;
  readonly origin: string;
  readonly pathname: string;
  readonly port: string;
  readonly protocol: string;
  readonly search: string;

  toString(): string;
}

declare class URL implements URI {
  constructor(uri: string);

  readonly hash: string;
  readonly host: string;
  readonly hostname: string;
  readonly href: string;
  readonly origin: string;
  readonly pathname: string;
  readonly port: string;
  readonly protocol: string;
  readonly search: string;

  toString(): string;
}

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
  readonly uri: URI;
}

export interface HttpResponseLike<T> {
  readonly content?: T;
  readonly headers: HttpHeadersLike;
  readonly location?: URI;
  readonly statusCode: number;
}

export const createHttpRequest = <T>(
  method: HttpMethod,
  uri: string | URI,
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
    uri: typeof uri === "string" ? new URL(uri) : uri,
  };
};

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
