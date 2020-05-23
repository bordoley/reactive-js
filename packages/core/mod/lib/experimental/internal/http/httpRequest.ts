import {
  Function1,
  SideEffect2,
  pipe,
  returns,
  updaterReducer,
  Updater,
} from "../../../functions.ts";
import { IOSourceLike, IOSourceOperator } from "../../../io.ts";
import { isNone, isSome, none } from "../../../option.ts";
import { map, reduceRight } from "../../../readonlyArray.ts";
import { EntityTag } from "./entityTag.ts";
import { HttpDateTime } from "./httpDateTime.ts";
import {
  HttpStandardHeader,
  HttpHeaders,
  getHeaderValue,
  HttpExtensionHeader,
} from "./httpHeaders.ts";
import {
  writeHttpMessageHeaders,
  encodeHttpMessageWithUtf8,
  toIOSourceHttpMessage,
  decodeHttpMessageWithCharset,
  HttpMessage,
  URILike,
  createHttpMessage,
  HttpMessageOptions,
} from "./httpMessage.ts";
import {
  writeHttpRequestPreconditionsHeaders,
  parseHttpRequestPreconditionsFromHeaders,
  createHttpRequestPreconditions,
  HttpRequestPreconditions,
} from "./httpRequestPreconditions.ts";
import {
  createHttpResponse,
  HttpResponse,
  HttpStatusCode,
} from "./httpResponse.ts";

export const enum HttpMethod {
  GET = "GET",
  HEAD = "HEAD",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

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
  expectContinue?: boolean;
  headers?: HttpHeaders;
  httpVersionMajor?: number;
  httpVersionMinor?: number;
  isTransportSecure?: boolean;
  method: HttpMethod;
  preconditions?: {
    ifMatch?: readonly (string | EntityTag)[] | "*";
    ifModifiedSince?: string | HttpDateTime | Date;
    ifNoneMatch?: readonly (string | EntityTag)[] | "*";
    ifUnmodifiedSince?: string | HttpDateTime | Date;
    ifRange?: string | EntityTag | HttpDateTime | Date;
  };
  uri: string | URILike;
};

declare class URL implements URILike {
  readonly hash: string;
  readonly host: string;
  readonly hostname: string;
  readonly href: string;
  readonly origin: string;
  readonly pathname: string;
  readonly port: string;
  readonly protocol: string;
  readonly search: string;
  constructor(uri: string);

  toString(): string;
}

const parseExpectFromHeaders = (headers: HttpHeaders): boolean => {
  const rawExpectHeader = getHeaderValue(headers, HttpStandardHeader.Expect);
  return rawExpectHeader === "100-continue";
};

const parseURIFromHeaders = ({
  headers = {},
  httpVersionMajor = 1,
  isTransportSecure = false,
  uri,
}: {
  headers?: HttpHeaders;
  httpVersionMajor?: number;
  isTransportSecure?: boolean;
  uri: string | URILike;
}): URILike => {
  const protocol = isTransportSecure ? "https" : "http";
  const forwardedProtocol = getHeaderValue(
    headers,
    HttpExtensionHeader.XForwardedProto,
  );
  const uriProtocol = isSome(forwardedProtocol)
    ? forwardedProtocol.split(/\s*,\s*/, 1)[0]
    : protocol;
  const forwardedHost = getHeaderValue(
    headers,
    HttpExtensionHeader.XForwardedHost,
  );
  const http2Authority = headers[":authority"];
  const http1Host = getHeaderValue(headers, HttpStandardHeader.Host);
  const unfilteredHost = isSome(forwardedHost)
    ? forwardedHost
    : isSome(http2Authority) && httpVersionMajor >= 2
    ? http2Authority
    : isSome(http1Host)
    ? http1Host
    : "";
  const host = unfilteredHost.split(/\s*,\s*/, 1)[0];
  return new URL(`${uriProtocol}://${host}${String(uri) ?? ""}`);
};

export const createHttpRequest = <T>(
  options: HttpRequestOptions<T>,
): HttpRequest<T> => {
  const {
    expectContinue,
    headers = {},
    httpVersionMajor = 1,
    httpVersionMinor = 1,
    isTransportSecure = false,
    method,
    preconditions,
    ...rest
  } = options;

  const { uri: uriOption } = options;
  const uri =
    typeof uriOption === "string" && uriOption.startsWith("/")
      ? parseURIFromHeaders(options)
      : typeof uriOption === "string"
      ? new URL(uriOption)
      : uriOption;

  const msgOptions = {
    ...rest,
    expectContinue: isSome(expectContinue)
      ? expectContinue
      : parseExpectFromHeaders(headers),
    headers,
    httpVersionMajor: httpVersionMajor,
    httpVersionMinor: httpVersionMinor,
    isTransportSecure,
    method,
    preconditions: isSome(preconditions)
      ? createHttpRequestPreconditions(preconditions)
      : parseHttpRequestPreconditionsFromHeaders(headers),
    uri,
  };

  return createHttpMessage(msgOptions) as HttpRequest<T>;
};

export const disallowProtocolAndHostForwarding = <T>(): Function1<
  HttpRequest<T>,
  HttpRequest<T>
> => request => {
  const {
    httpVersionMajor,
    headers: {
      "x-forwarded-proto": xForwardedProto,
      "x-forwarded-host": xForwardedHost,
      ...headers
    },
    isTransportSecure,
    uri,
  } = request;

  return isNone(xForwardedProto) && isNone(xForwardedHost)
    ? request
    : {
        ...request,
        uri: parseURIFromHeaders({
          headers,
          httpVersionMajor,
          isTransportSecure,
          uri,
        }),
        headers,
      };
};

export const createRedirectHttpRequest = <
  THttpRequest extends HttpRequest<TReq>,
  TReq
>(
  request: THttpRequest,
  response: HttpResponse<unknown>,
): THttpRequest => {
  const { contentInfo, method } = request;
  const { location, statusCode } = response;

  const redirectToGet =
    statusCode === HttpStatusCode.SeeOther ||
    ((statusCode === HttpStatusCode.MovedPermanently ||
      HttpStatusCode.Found === 302) &&
      method === HttpMethod.POST);

  return isSome(location)
    ? {
        ...request,
        content: redirectToGet ? none : contentInfo,
        method: redirectToGet ? HttpMethod.GET : method,
        uri: location as URILike,
      }
    : request;
};

export const writeHttpRequestHeaders = <T>(
  request: HttpRequest<T>,
  writeHeader: SideEffect2<string, string>,
): void => {
  const { expectContinue, preconditions } = request;

  if (expectContinue) {
    writeHeader(HttpStandardHeader.Expect, "100-continue");
  }

  if (isSome(preconditions)) {
    writeHttpRequestPreconditionsHeaders(preconditions, writeHeader);
  }

  writeHttpMessageHeaders(request, writeHeader);
};

const _encodeHttpRequestWithUtf8 = (encodeHttpMessageWithUtf8 as unknown) as Function1<
  HttpRequest<string>,
  HttpRequest<Uint8Array>
>;

export const encodeHttpRequestWithUtf8: Function1<
  HttpRequest<string>,
  HttpRequest<Uint8Array>
> = _encodeHttpRequestWithUtf8;

const _decodeHttpRequestWithCharset = (decodeHttpMessageWithCharset as unknown) as Function1<
  HttpRequest<Uint8Array>,
  HttpRequest<string>
>;
export const decodeHttpRequestWithCharset: Function1<
  HttpRequest<Uint8Array>,
  HttpRequest<string>
> = _decodeHttpRequestWithCharset;

export const toIOSourceHttpRequest = <TBody>(
  req: HttpRequest<TBody>,
): HttpRequest<IOSourceLike<TBody>> =>
  toIOSourceHttpMessage(req) as HttpRequest<IOSourceLike<TBody>>;

export const decodeHttpRequestContent = (decoderProvider: {
  [key: string]: IOSourceOperator<Uint8Array, Uint8Array>;
}): Function1<
  HttpRequest<IOSourceLike<Uint8Array>>,
  HttpRequest<IOSourceLike<Uint8Array>>
> => req => {
  const { body, contentInfo, ...rest } = req;

  if (isSome(contentInfo) && contentInfo.contentEncodings.length > 0) {
    const newBody = pipe(
      contentInfo.contentEncodings,
      map(encoding => {
        const decoder = decoderProvider[encoding];
        if (isNone(decoder)) {
          throw createHttpResponse({
            statusCode: HttpStatusCode.UnsupportedMediaType,
            body: none,
          });
        }
        return decoder;
      }),
      reduceRight<Updater<IOSourceLike<Uint8Array>>, IOSourceLike<Uint8Array>>(
        updaterReducer,
        returns(body),
      ),
    );

    return {
      ...rest,
      contentInfo: {
        contentType: contentInfo.contentType,
        contentEncodings: [],
        contentLength: -1,
      },
      body: newBody,
    };
  } else {
    return req;
  }
};
