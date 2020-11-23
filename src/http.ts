import { ReadonlyObjectMap } from "./readonlyObjectMap";

export type CacheDirective = {
  readonly directive: string;
  readonly value: string;
};

export type EntityTag = {
  readonly isWeak: boolean;
  readonly tag: string;
};

export const enum HttpContentEncoding {
  Brotli = "br",
  Compress = "compress",
  Deflate = "deflate",
  GZip = "gzip",
  Identity = "identity",
}

export type MediaType = {
  readonly type: string;
  readonly subtype: string;
  readonly params: ReadonlyObjectMap<string>;
};

export type HttpContentInfo = {
  readonly contentEncodings: readonly HttpContentEncoding[];
  readonly contentLength: number;
  readonly contentType: MediaType;
};

export type HttpDateTime = number;

// FIXME: filter out headers for which we have strongly typed apis.
export type HttpHeaders = ReadonlyObjectMap<string>;

export const enum HttpStandardHeader {
  Accept = "Accept",
  AcceptCharset = "Accept-Charset",
  AcceptEncoding = "Accept-Encoding",
  AcceptLanguage = "Accept-Language",
  AcceptRanges = "Accept-Ranges",
  Age = "Age",
  Allow = "Allow",
  Authorization = "Authorization",
  CacheControl = "Cache-Control",
  Connection = "Connection",
  ContentEncoding = "Content-Encoding",
  ContentLanguage = "Content-Language",
  ContentLength = "Content-Length",
  ContentLocation = "Content-Location",
  ContentMD5 = "Content-MD5",
  ContentRange = "Content-Range",
  ContentType = "Content-Type",
  Cookie = "Cookie",
  Date = "Date",
  ETag = "ETag",
  Expect = "Expect",
  Expires = "Expires",
  From = "From",
  Host = "Host",
  IfMatch = "If-Match",
  IfModifiedSince = "If-Modified-Since",
  IfNoneMatch = "If-None-Match",
  IfRange = "If-Range",
  IfUnmodifiedSince = "If-Unmodified-Since",
  LastModified = "Last-Modified",
  Location = "Location",
  MaxForwards = "Max-Forwards",
  Pragma = "Pragma",
  ProxyAuthenticate = "Proxy-Authenticate",
  ProxyAuthorization = "Proxy-Authorization",
  Range = "Range",
  Referer = "Referer",
  RetryAfter = "Retry-After",
  Server = "Server",
  SetCookie = "Set-Cookie",
  TE = "TE",
  Trailer = "Trailer",
  TransferEncoding = "Transfer-Encoding",
  Upgrade = "Upgrade",
  UserAgent = "User-Agent",
  Vary = "Vary",
  Via = "Via",
  Warning = "Warning",
  WWWAuthenticate = "WWW-Authenticate",
}

export const enum HttpExtensionHeader {
  XForwardedProto = "X-Forwarded-Proto",
  XForwardedHost = "X-Forwarded-Host",
  XHttpMethod = "X-HTTP-Method",
  XHttpMethodOverride = "X-HTTP-Method-Override",
  XMethodOverride = "X-Method-Override",
}

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

// Strictly speaking MediaRanges may have parameters, but no one uses them.
export type MediaRange = {
  readonly type: string | "*";
  readonly subtype: string | "*";
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

export type HttpMessage<T> = {
  readonly body: T;
  readonly cacheControl: readonly CacheDirective[];
  readonly contentInfo?: HttpContentInfo;
  readonly headers: HttpHeaders;
  readonly preferences?: HttpPreferences;
};

export type HttpMessageOptions<T> = {
  body: T;
  cacheControl?: readonly (string | CacheDirective)[];
  contentInfo?: {
    readonly contentEncodings?: readonly HttpContentEncoding[];
    readonly contentLength?: number;
    readonly contentType: MediaType | string;
  };
  headers?: HttpHeaders;
  preferences?: {
    readonly acceptedCharsets?: readonly string[];
    readonly acceptedEncodings?: readonly HttpContentEncoding[];
    readonly acceptedLanguages?: readonly string[];
    readonly acceptedMediaRanges?: readonly (string | MediaRange)[];
  };
};

export const enum HttpMethod {
  GET = "GET",
  HEAD = "HEAD",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

export type HttpRequestPreconditions = {
  readonly ifMatch?: readonly EntityTag[] | "*";
  readonly ifModifiedSince?: HttpDateTime;
  readonly ifNoneMatch?: readonly EntityTag[] | "*";
  readonly ifUnmodifiedSince?: HttpDateTime;
  readonly ifRange?: EntityTag | HttpDateTime;
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
  readonly isTransportSecure: boolean;
};

export type HttpRequestOptions<T> = HttpMessageOptions<T> & {
  readonly expectContinue?: boolean;
  readonly headers?: HttpHeaders;
  readonly httpVersionMajor?: number;
  readonly httpVersionMinor?: number;
  readonly isTransportSecure?: boolean;
  readonly method: HttpMethod;
  readonly preconditions?: {
    readonly ifMatch?: readonly (string | EntityTag)[] | "*";
    readonly ifModifiedSince?: string | HttpDateTime | Date;
    readonly ifNoneMatch?: readonly (string | EntityTag)[] | "*";
    readonly ifUnmodifiedSince?: string | HttpDateTime | Date;
    readonly ifRange?: string | EntityTag | HttpDateTime | Date;
  };
  readonly uri: string | URILike;
};

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

export type HttpResponseOptions<T> = HttpMessageOptions<T> & {
  readonly etag?: string | EntityTag;
  readonly expires?: number | string | Date;
  readonly headers?: HttpHeaders;
  readonly lastModified?: number | string | Date;
  readonly location?: string | URILike;
  readonly statusCode: HttpStatusCode;
  readonly vary?: readonly string[];
};

export {
  createHttpRequest,
  decodeHttpRequestWithCharset,
  disallowProtocolAndHostForwarding,
  encodeHttpRequestWithUtf8,
  toIOSourceHttpRequest,
  writeHttpRequestHeaders,
} from "./http/httpRequest";
export {
  checkIfNotModified,
  createHttpErrorResponse,
  createHttpResponse,
  createRedirectHttpRequest,
  decodeHttpRequestContent,
  decodeHttpResponseContent,
  decodeHttpResponseWithCharset,
  encodeHttpResponseContent,
  encodeHttpResponseWithUtf8,
  toIOSourceHttpResponse,
  writeHttpResponseHeaders,
} from "./http/httpResponse";
