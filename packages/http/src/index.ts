import { OperatorLike } from "@reactive-js/pipe";

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
  HEAD = "HEAD",
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

export const enum HttpContentEncoding {
  Brotli = "br",
  Compress = "compress",
  Deflate = "deflate",
  GZip = "gzip",
  Identity = "identity",
}

export const contentEncodings = [
  HttpContentEncoding.Brotli,
  HttpContentEncoding.Compress,
  HttpContentEncoding.Deflate,
  HttpContentEncoding.GZip,
  HttpContentEncoding.Identity,
];

// FIXME: filter out headers for which we have strongly typed apis.
export interface HttpHeadersLike {
  readonly [header: string]: unknown;
}

export interface HttpContentLike<T> {
  readonly body: T;
  readonly contentEncodings: readonly HttpContentEncoding[];
  readonly contentLength: number;
  readonly contentType: string;
}

export interface HttpPreferencesLike {
  readonly acceptedCharsets: readonly string[];
  readonly acceptedEncodings: readonly HttpContentEncoding[];
  readonly acceptedLanguages: readonly string[];
  readonly acceptedMediaTypes: readonly string[];
  //readonly ranges: Option<Choice<ByteRangesSpecifier, OtherRangesSpecifier>>
  //acceptedRanges:Option<Choice<Set<RangeUnit>, AcceptsNone>>
}

export interface HttpRequestLike<T> {
  // readonly authorization?: Credentials;
  // readonly cacheControl: readonly CacheDirective[];

  readonly content?: HttpContentLike<T>;
  readonly expectContinue: boolean;
  readonly headers: HttpHeadersLike;
  readonly method: HttpMethod;
  // readonly pragma: readonly CacheDirective[];
  readonly preferences?: HttpPreferencesLike;
  // readonly proxyAuthorization?: Credentials
  // readonly referer?: URI;
  readonly uri: URI;
  // readonly userAgent?: UserAgent;
  // referer
}

export interface HttpResponseLike<T> {
  // age:Option<TimeSpan>
  // allowed:Set<Method>
  // authenticate:Set<Challenge>
  // cacheControl: Set<CacheDirective>
  // date:Option<DateTime>
  // etag:Option<EntityTag>
  readonly expires?: number;
  readonly lastModified?: number;
  // proxyAuthenticate:Set<Challenge>
  // retryAfter:Option<DateTime>
  // server:Option<Server>
  // warning:Warning list
  readonly content?: HttpContentLike<T>;
  readonly headers: HttpHeadersLike;
  readonly location?: URI;
  readonly preferences?: HttpPreferencesLike;
  readonly statusCode: HttpStatusCode;
  readonly vary: readonly string[];
}

const bannedHeaders = [
  "accept-charset",
  "accept-encoding",
  "accept-language",
  "accept",
  "content-encoding",
  "content-length",
  "content-type",
  "expect",
  "expires",
  "last-modified",
  "transfer-encoding",
  "vary",
];

export const createHttpRequest = <T>(
  method: HttpMethod,
  uri: string | URI,
  options: {
    content?: HttpContentLike<T>;
    expectContinue?: boolean;
    headers?: HttpHeadersLike;
    preferences?: HttpPreferencesLike;
  } = {},
): HttpRequestLike<T> => ({
  ...options,
  expectContinue: options.expectContinue || false,
  headers: options.headers || {},
  method,
  uri: typeof uri === "string" ? new URL(uri) : uri,
});

export const createHttpResponse = <T>(
  statusCode: HttpStatusCode,
  options: {
    content?: HttpContentLike<T>;
    expires?: number;
    headers?: HttpHeadersLike;
    lastModified?: number;
    location?: URI;
    preferences?: HttpPreferencesLike;
    vary?: readonly string[];
  } = {},
): HttpResponseLike<T> => ({
  ...options,
  headers: options.headers || {},
  statusCode,
  vary: options.vary || [],
});

export const createRedirectHttpRequest = <TReq, TResp>(
  response: HttpResponseLike<TResp>,
): OperatorLike<HttpRequestLike<TReq>, HttpRequestLike<TReq>> => request => {
  const { content, method } = request;
  const { location, statusCode } = response;

  const redirectToGet =
    statusCode === HttpStatusCode.SeeOther ||
    ((statusCode === HttpStatusCode.MovedPermanently ||
      HttpStatusCode.Found === 302) &&
      method === HttpMethod.POST);

  return {
    ...request,
    content: redirectToGet ? undefined : content,
    method: redirectToGet ? HttpMethod.GET : method,

    // This function is only called if location is undefined.
    uri: location as URI,
  };
};

const writeHttpContentHeaders = <T>(
  content: HttpContentLike<T>,
  writeHeader: (header: string, value: string) => void,
) => {
  const { contentLength, contentType, contentEncodings } = content;
  if (contentLength > 0) {
    writeHeader("Content-Length", contentLength.toString(10));
  }

  if (contentType.length > 0) {
    writeHeader("Content-Type", contentType);
  }

  if (contentEncodings.length > 0) {
    writeHeader("Content-Encoding", contentEncodings.join(", "));
  }
};

const writeHttpPreferenceHeaders = (
  preferences: HttpPreferencesLike,
  writeHeader: (header: string, value: string) => void,
) => {
  const {
    acceptedCharsets,
    acceptedEncodings,
    acceptedLanguages,
    acceptedMediaTypes,
  } = preferences;

  if (acceptedCharsets.length > 0) {
    writeHeader("Accept-Charset", acceptedCharsets.join(", "));
  }

  if (acceptedEncodings.length > 0) {
    writeHeader("Accept-Encoding", acceptedEncodings.join(","));
  }

  if (acceptedLanguages.length > 0) {
    writeHeader("Accept-Language", acceptedLanguages.join(", "));
  }

  if (acceptedMediaTypes.length > 0) {
    writeHeader("Accept", acceptedMediaTypes.join(", "));
  }
};

const writeHttpHeaders = (
  headers: HttpHeadersLike,
  writeHeader: (header: string, value: string) => void,
) => {
  const headerPairs = Object.entries(headers).filter(
    ([key]) => !bannedHeaders.includes(key.toLowerCase()),
  );

  for (const [header, value] of headerPairs) {
    writeHeader(header, String(value));
  }
};

export const writeHttpRequestHeaders = <T>(
  { content, expectContinue, headers, preferences }: HttpRequestLike<T>,
  writeHeader: (header: string, value: string) => void,
): void => {
  if (expectContinue) {
    writeHeader("Expect", "100-continue");
  }

  if (content !== undefined) {
    writeHttpContentHeaders(content, writeHeader);
  }

  if (preferences !== undefined) {
    writeHttpPreferenceHeaders(preferences, writeHeader);
  }

  writeHttpHeaders(headers, writeHeader);
};

export const writeHttpResponseHeaders = <T>(
  {
    content,
    expires,
    headers,
    lastModified,
    location,
    preferences,
    vary,
  }: HttpResponseLike<T>,
  writeHeader: (header: string, value: string) => void,
): void => {
  if (content !== undefined) {
    writeHttpContentHeaders(content, writeHeader);
  }

  if (expires !== undefined) {
    const date = new Date(expires);
    writeHeader("Expires", date.toUTCString());
  }

  if (lastModified !== undefined) {
    const date = new Date(lastModified);
    writeHeader("Last-Modified", date.toUTCString());
  }

  if (location !== undefined) {
    writeHeader("Location", location.toString());
  }

  if (preferences !== undefined) {
    writeHttpPreferenceHeaders(preferences, writeHeader);
  }

  if (vary.length > 0) {
    writeHeader("Vary", vary.join(","));
  }

  writeHttpHeaders(headers, writeHeader);
};
