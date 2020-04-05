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

export const enum HttpStatusCode {
  Continue = 100,
  SwitchingProtocols = 101,
  Processing = 102,
  OK = 200,
  Created = 201,
  Accepted = 202,
  NonAuthoritativeInformation = 203,
  NoContent = 204,
  ResetContent = 205,
  PartialContent = 206,
  MultiStatus = 207,
  AlreadyReported = 208,
  IMUsed = 226,
  MultipleChoices = 300,
  MovedPermanently = 301,
  Found = 302,
  SeeOther = 303,
  NotModified = 304,
  UseProxy = 305,
  TemporaryRedirect = 307,
  PermanentRedirect = 308,
  BadRequest = 400,
  Unauthorized = 401,
  Forbidden = 403,
  NotFound = 404,
  MethodNotAllowed = 405,
  NotAcceptable = 406,
  ProxyAuthenticationRequired = 407,
  RequestTimeout = 408,
  Conflict = 409,
  Gone = 410,
  LengthRequired = 411,
  PreconditionFailed = 412,
  RequestEntityTooLarge = 413,
  RequestURITooLong = 414,
  UnsupportedMediaType = 415,
  RequestedRangeNotSatisfiable = 416,
  ExpectationFailed = 417,
  UnprocessableEntity = 422,
  Locked = 423,
  FailedDependency = 424,
  UpgradeRequired = 426,
  PreconditionRequired = 428,
  TooManyRequests = 429,
  RequestHeaderFieldsTooLarge = 431,
  UnavailableForLegalReasons = 451,
  InternalServerError = 500,
  NotImplemented = 501,
  BadGateway = 502,
  ServiceUnavailable = 503,
  GatewayTimeout = 504,
  HTTPVersionNotSupported = 505,
  VariantAlsoNegotiates = 506,
  InsufficientStorage = 507,
  LoopDetected = 508,
  NotExtended = 510,
  NetworkAuthenticationRequired = 511,
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
  readonly statusCode: HttpStatusCode;
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
  statusCode: HttpStatusCode,
  options: {
    content?: T;
    headers?: HttpHeadersLike;
  } = {},
): HttpResponseLike<T> => {
  const { content, headers = {} } = options;

  return {
    content,
    // FIXME: filter out headers for which we have strongly typed apis.
    headers,
    statusCode,
  };
};
