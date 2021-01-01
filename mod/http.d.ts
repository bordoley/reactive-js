import { Function1, SideEffect2, Updater } from "./functions.mjs";
import { ReadonlyObjectMap } from "./readonlyObjectMap.mjs";
import { IOSourceLike, IOSourceOperator } from "./io.mjs";
declare const createHttpRequest: <T>(options: HttpRequestOptions<T>) => HttpRequest<T>;
declare const disallowProtocolAndHostForwarding: <T>() => Function1<HttpRequest<T>, HttpRequest<T>>;
declare const writeHttpRequestHeaders: <T>(request: HttpRequest<T>, writeHeader: SideEffect2<string, string>) => void;
declare const encodeHttpRequestWithUtf8: Function1<HttpRequest<string>, HttpRequest<Uint8Array>>;
declare const decodeHttpRequestWithCharset: Function1<HttpRequest<Uint8Array>, HttpRequest<string>>;
declare const toIOSourceHttpRequest: <TBody>(req: HttpRequest<TBody>) => HttpRequest<IOSourceLike<TBody>>;
declare const createHttpResponse: <T>({ etag, expires, headers, lastModified, location, statusCode, vary, ...rest }: HttpResponseOptions<T>) => HttpResponse<T>;
declare const writeHttpResponseHeaders: <T>(response: HttpResponse<T>, writeHeader: SideEffect2<string, string>) => void;
declare const checkIfNotModified: <T>({ cacheControl, method, preconditions, }: HttpRequest<unknown>) => Function1<HttpResponse<T>, HttpResponse<T>>;
declare const encodeHttpResponseWithUtf8: Function1<HttpResponse<string>, HttpResponse<Uint8Array>>;
declare const decodeHttpResponseWithCharset: Function1<HttpResponse<Uint8Array>, HttpResponse<string>>;
declare const toIOSourceHttpResponse: <TBody>(resp: HttpResponse<TBody>) => HttpResponse<IOSourceLike<TBody>>;
declare const decodeHttpResponseContent: (decoderProvider: ReadonlyObjectMap<IOSourceOperator<Uint8Array, Uint8Array>>) => Function1<HttpResponse<IOSourceLike<Uint8Array>>, HttpResponse<IOSourceLike<Uint8Array>>>;
declare const encodeHttpResponseContent: (encoderProvider: ReadonlyObjectMap<IOSourceOperator<Uint8Array, Uint8Array>>, db?: ReadonlyObjectMap<{
    compressible?: boolean;
}>) => Function1<HttpRequest<unknown>, Updater<HttpResponse<IOSourceLike<Uint8Array>>>>;
declare const createHttpErrorResponse: (e: unknown) => HttpResponse<unknown>;
declare const createRedirectHttpRequest: <THttpRequest extends HttpRequest<TReq>, TReq>(request: THttpRequest, response: HttpResponse<unknown>) => THttpRequest;
declare const decodeHttpRequestContent: (decoderProvider: ReadonlyObjectMap<IOSourceOperator<Uint8Array, Uint8Array>>) => Function1<HttpRequest<IOSourceLike<Uint8Array>>, HttpRequest<IOSourceLike<Uint8Array>>>;
declare type CacheDirective = {
    readonly directive: string;
    readonly value: string;
};
declare type EntityTag = {
    readonly isWeak: boolean;
    readonly tag: string;
};
declare const enum HttpContentEncoding {
    Brotli = "br",
    Compress = "compress",
    Deflate = "deflate",
    GZip = "gzip",
    Identity = "identity"
}
declare type MediaType = {
    readonly type: string;
    readonly subtype: string;
    readonly params: ReadonlyObjectMap<string>;
};
declare type HttpContentInfo = {
    readonly contentEncodings: readonly HttpContentEncoding[];
    readonly contentLength: number;
    readonly contentType: MediaType;
};
declare type HttpDateTime = number;
declare type HttpHeaders = ReadonlyObjectMap<string>;
declare const enum HttpStandardHeader {
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
    WWWAuthenticate = "WWW-Authenticate"
}
declare const enum HttpExtensionHeader {
    XForwardedProto = "X-Forwarded-Proto",
    XForwardedHost = "X-Forwarded-Host",
    XHttpMethod = "X-HTTP-Method",
    XHttpMethodOverride = "X-HTTP-Method-Override",
    XMethodOverride = "X-Method-Override"
}
interface URILike {
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
declare type MediaRange = {
    readonly type: string | "*";
    readonly subtype: string | "*";
};
declare type HttpPreferences = {
    readonly acceptedCharsets: readonly string[];
    readonly acceptedEncodings: readonly HttpContentEncoding[];
    readonly acceptedLanguages: readonly string[];
    readonly acceptedMediaRanges: readonly MediaRange[];
};
declare type HttpMessage<T> = {
    readonly body: T;
    readonly cacheControl: readonly CacheDirective[];
    readonly contentInfo?: HttpContentInfo;
    readonly headers: HttpHeaders;
    readonly preferences?: HttpPreferences;
};
declare type HttpMessageOptions<T> = {
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
declare const enum HttpMethod {
    GET = "GET",
    HEAD = "HEAD",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE"
}
declare type HttpRequestPreconditions = {
    readonly ifMatch?: readonly EntityTag[] | "*";
    readonly ifModifiedSince?: HttpDateTime;
    readonly ifNoneMatch?: readonly EntityTag[] | "*";
    readonly ifUnmodifiedSince?: HttpDateTime;
    readonly ifRange?: EntityTag | HttpDateTime;
};
declare type HttpRequest<T> = HttpMessage<T> & {
    readonly expectContinue: boolean;
    readonly method: HttpMethod;
    readonly preconditions?: HttpRequestPreconditions;
    readonly uri: URILike;
    readonly httpVersionMajor: number;
    readonly httpVersionMinor: number;
    readonly isTransportSecure: boolean;
};
declare type HttpRequestOptions<T> = HttpMessageOptions<T> & {
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
declare const enum HttpStatusCode {
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
    NetworkAuthenticationRequired = 511
}
declare type HttpResponse<T> = HttpMessage<T> & {
    readonly etag?: EntityTag;
    readonly expires?: HttpDateTime;
    readonly lastModified?: HttpDateTime;
    readonly location?: URILike;
    readonly statusCode: HttpStatusCode;
    readonly vary: readonly string[];
};
declare type HttpResponseOptions<T> = HttpMessageOptions<T> & {
    readonly etag?: string | EntityTag;
    readonly expires?: number | string | Date;
    readonly headers?: HttpHeaders;
    readonly lastModified?: number | string | Date;
    readonly location?: string | URILike;
    readonly statusCode: HttpStatusCode;
    readonly vary?: readonly string[];
};
export { CacheDirective, EntityTag, HttpContentEncoding, HttpContentInfo, HttpDateTime, HttpExtensionHeader, HttpHeaders, HttpMessage, HttpMessageOptions, HttpMethod, HttpPreferences, HttpRequest, HttpRequestOptions, HttpRequestPreconditions, HttpResponse, HttpResponseOptions, HttpStandardHeader, HttpStatusCode, MediaRange, MediaType, URILike, checkIfNotModified, createHttpErrorResponse, createHttpRequest, createHttpResponse, createRedirectHttpRequest, decodeHttpRequestContent, decodeHttpRequestWithCharset, decodeHttpResponseContent, decodeHttpResponseWithCharset, disallowProtocolAndHostForwarding, encodeHttpRequestWithUtf8, encodeHttpResponseContent, encodeHttpResponseWithUtf8, toIOSourceHttpRequest, toIOSourceHttpResponse, writeHttpRequestHeaders, writeHttpResponseHeaders };
