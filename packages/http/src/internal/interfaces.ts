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

// FIXME: filter out headers for which we have strongly typed apis.
export interface HttpHeadersLike {
  readonly [header: string]: string;
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

export interface HttpEntityTagLike {
  readonly isWeak: boolean;
  readonly tag: string;
}

export type HttpDateTime = number;

export interface HttpRequestPreconditionsLike {
  ifMatch?: readonly HttpEntityTagLike[] | "*";
  ifModifiedSince?: HttpDateTime;
  ifNoneMatch?: readonly HttpEntityTagLike[] | "*";
  ifUnmodifiedSince?: HttpDateTime;
  ifRange?: HttpEntityTagLike | HttpDateTime;
}

export interface HttpRequestLike<T> {
  // readonly authorization?: Credentials;
  // readonly cacheControl: readonly CacheDirective[];

  readonly content?: T;
  readonly expectContinue: boolean;
  readonly headers: HttpHeadersLike;
  readonly method: HttpMethod;
  // readonly pragma: readonly CacheDirective[];
  readonly preconditions?: HttpRequestPreconditionsLike;
  readonly preferences?: HttpPreferencesLike;
  // readonly proxyAuthorization?: Credentials
  // readonly referer?: URI;
  readonly uri: URI;
  // readonly userAgent?: UserAgent;
  // referer
  readonly httpVersionMajor: number;
  readonly httpVersionMinor: number;
}

export interface HttpContentRequestLike<T>
  extends HttpRequestLike<HttpContentLike<T>> {}

export interface HttpServerRequestLike<T> extends HttpContentRequestLike<T> {
  readonly isTransportSecure: boolean;
}

export interface HttpResponseLike<T> {
  // age:Option<TimeSpan>
  // allowed:Set<Method>
  // authenticate:Set<Challenge>
  // cacheControl: Set<CacheDirective>
  // date:Option<DateTime>
  etag?: HttpEntityTagLike;
  readonly expires?: HttpDateTime;
  readonly lastModified?: HttpDateTime;
  // proxyAuthenticate:Set<Challenge>
  // retryAfter:Option<DateTime>
  // server:Option<Server>
  // warning:Warning list
  readonly content?: T;
  readonly headers: HttpHeadersLike;
  readonly location?: URI;
  readonly preferences?: HttpPreferencesLike;
  readonly statusCode: HttpStatusCode;
  readonly vary: readonly string[];
}

export interface HttpContentResponseLike<T>
  extends HttpResponseLike<HttpContentLike<T>> {}
