import { HttpExtensionHeaders, HttpStandardHeaders } from "./http/httpHeaders";
export { HttpStandardHeaders, HttpExtensionHeaders } from "./http/httpHeaders";
import { HttpStatusCodes } from "./http/httpResponse";
export { HttpStatusCodes } from "./http/httpResponse";
import { ReadonlyObjectMap } from "./readonlyObjectMap";

export type CacheDirective = {
  readonly directive: string;
  readonly value: string;
};

export type EntityTag = {
  readonly isWeak: boolean;
  readonly tag: string;
};

export type HttpContentEncoding =
  | "br"
  | "compress"
  | "deflate"
  | "gzip"
  | "identify";

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

type HttpStandardHeadersKeys = keyof typeof HttpStandardHeaders;
export type HttpStandardHeader = typeof HttpStandardHeaders[HttpStandardHeadersKeys];

type HttpExtensionHeadersKeys = keyof typeof HttpExtensionHeaders;
export type HttpExtensionHeader = typeof HttpExtensionHeaders[HttpExtensionHeadersKeys];

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

export type HttpMethod = "GET" | "HEAD" | "POST" | "PUT" | "DELETE";

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

type HttpStatusCodesKeys = keyof typeof HttpStatusCodes;
export type HttpStatusCode = typeof HttpStatusCodes[HttpStatusCodesKeys];

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
