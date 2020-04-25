// A Proxy readonly interface for the what-wg URL api.
export interface URILike {
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
export type HttpHeaders = {
  readonly [header: string]: string;
};

export type MediaType = {
  readonly type: string;
  readonly subtype: string;
  readonly params: { readonly [key: string]: string };
};

// Strictly speaking MediaRanges may have parameters, but no one uses them.
export type MediaRange = {
  readonly type: string | "*";
  readonly subtype: string | "*";
};

export type HttpContentInfo = {
  readonly contentEncodings: readonly HttpContentEncoding[];
  readonly contentLength: number;
  readonly contentType: MediaType;
};

// All values should be sorted by preference
export type HttpPreferences = {
  readonly acceptedCharsets: readonly string[];
  readonly acceptedEncodings: readonly HttpContentEncoding[];
  readonly acceptedLanguages: readonly string[];
  readonly acceptedMediaRanges: readonly MediaRange[];
  //readonly ranges: Option<Choice<ByteRangesSpecifier, OtherRangesSpecifier>>
  //acceptedRanges:Option<Choice<Set<RangeUnit>, AcceptsNone>>
};

export type EntityTag = {
  readonly isWeak: boolean;
  readonly tag: string;
};

export type HttpDateTime = number;

export type HttpRequestPreconditions = {
  readonly ifMatch?: readonly EntityTag[] | "*";
  readonly ifModifiedSince?: HttpDateTime;
  readonly ifNoneMatch?: readonly EntityTag[] | "*";
  readonly ifUnmodifiedSince?: HttpDateTime;
  readonly ifRange?: EntityTag | HttpDateTime;
};

export type CacheDirective = {
  readonly directive: string;
  readonly value: string;
};

export type HttpMessage<T> = {
  readonly body: T;
  readonly cacheControl: readonly CacheDirective[];
  readonly contentInfo?: HttpContentInfo;
  readonly headers: HttpHeaders;
  readonly preferences?: HttpPreferences;
};

export type HttpRequest<T> = HttpMessage<T> & {
  // readonly authorization?: Credentials;

  readonly expectContinue: boolean;
  readonly method: HttpMethod;
  // readonly pragma: readonly CacheDirective[];
  readonly preconditions?: HttpRequestPreconditions;

  // readonly proxyAuthorization?: Credentials
  // readonly referer?: URILike;
  readonly uri: URILike;
  // readonly userAgent?: UserAgent;
  // referer
  readonly httpVersionMajor: number;
  readonly httpVersionMinor: number;
};

export type HttpServerRequest<T> = HttpRequest<T> & {
  readonly isTransportSecure: boolean;
};

export type HttpResponse<T> = HttpMessage<T> & {
  // age:Option<TimeSpan>
  // allowed:Set<Method>
  // authenticate:Set<Challenge>

  // date:Option<DateTime>
  readonly etag?: EntityTag;
  readonly expires?: HttpDateTime;
  readonly lastModified?: HttpDateTime;
  // proxyAuthenticate:Set<Challenge>
  // retryAfter:Option<DateTime>
  // server:Option<Server>
  // warning:Warning list

  readonly location?: URILike;
  readonly statusCode: HttpStatusCode;
  readonly vary: readonly string[];
};
