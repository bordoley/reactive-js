import { Function1, SideEffect2 } from "../../../../../core/mod/lib/functions.ts";
import { IOSourceLike, IOSourceOperator } from "../../../../../core/mod/lib/io.ts";
import { isNone, isSome, none } from "../../../../../core/mod/lib/option.ts";
import {
  writeHttpMessageHeaders,
  encodeHttpMessageWithUtf8,
  toIOSourceHttpMessage,
  decodeHttpMessageWithCharset,
} from "./HttpMessage.ts";
import {
  parseCacheControlFromHeaders,
  parseCacheDirectiveOrThrow,
} from "./cacheDirective.ts";
import { HttpClientRequest } from "./httpClient.ts";
import {
  parseHttpContentInfoFromHeaders,
  contentIsCompressible,
  createHttpContentInfo,
} from "./httpContentInfo.ts";
import {
  HttpStandardHeader,
  getHeaderValue,
  HttpExtensionHeader,
  filterHeaders,
} from "./httpHeaders.ts";
import {
  parseHttpPreferencesFromHeaders,
  createHttpPreferences,
} from "./httpPreferences.ts";
import {
  writeHttpRequestPreconditionsHeaders,
  parseHttpRequestPreconditionsFromHeaders,
  createHttpRequestPreconditions,
} from "./httpRequestPreconditions.ts";
import { createHttpResponse } from "./httpResponse.ts";
import {
  HttpMethod,
  URILike,
  HttpHeaders,
  HttpRequest,
  HttpResponse,
  HttpServerRequest,
  HttpStatusCode,
  CacheDirective,
  EntityTag,
  HttpDateTime,
  HttpContentEncoding,
  MediaRange,
  MediaType,
} from "./interfaces.ts";

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

export const createHttpRequest = <T>({
  body,
  cacheControl,
  contentInfo,
  expectContinue = false,
  headers = {},
  httpVersionMajor = 1,
  httpVersionMinor = 1,
  method,
  preconditions,
  preferences,
  uri,
  ...rest
}: {
  body: T;
  cacheControl?: readonly (string | CacheDirective)[];
  contentInfo?: {
    contentEncodings?: HttpContentEncoding[];
    contentLength?: number;
    contentType: MediaType | string;
  };
  expectContinue?: boolean;
  headers?: HttpHeaders;
  httpVersionMajor?: number;
  httpVersionMinor?: number;
  method: HttpMethod;
  preconditions?: {
    ifMatch?: (string | EntityTag)[] | "*";
    ifModifiedSince?: string | HttpDateTime | Date;
    ifNoneMatch?: (string | EntityTag)[] | "*";
    ifUnmodifiedSince?: string | HttpDateTime | Date;
    ifRange?: string | EntityTag | HttpDateTime | Date;
  };
  preferences?: {
    acceptedCharsets?: readonly string[];
    acceptedEncodings?: readonly HttpContentEncoding[];
    acceptedLanguages?: readonly string[];
    acceptedMediaRanges?: readonly (string | MediaRange)[];
  };
  uri: string | URILike;
}): HttpRequest<T> => ({
  ...rest,
  body,
  cacheControl: (cacheControl ?? []).map(cc =>
    typeof cc === "string" ? parseCacheDirectiveOrThrow(cc) : cc,
  ),
  contentInfo: isSome(contentInfo)
    ? createHttpContentInfo(contentInfo)
    : parseHttpContentInfoFromHeaders(headers),
  expectContinue: expectContinue,
  headers: filterHeaders(headers),
  httpVersionMajor: httpVersionMajor,
  httpVersionMinor: httpVersionMinor,
  method,
  preconditions: isSome(preconditions)
    ? createHttpRequestPreconditions(preconditions)
    : parseHttpRequestPreconditionsFromHeaders(headers),
  preferences: isSome(preferences)
    ? createHttpPreferences(preferences)
    : parseHttpPreferencesFromHeaders(headers),
  uri: typeof uri === "string" ? new URL(uri) : uri,
});

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

  return {
    ...request,
    content: redirectToGet ? none : contentInfo,
    method: redirectToGet ? HttpMethod.GET : method,

    // This function is only called if location is undefined.
    uri: location as URILike,
  };
};

const parseURIFromHeaders = (
  protocol: "http" | "https",
  path: string,
  httpVersionMajor: number,
  headers: HttpHeaders,
): URILike => {
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
  return new URL(`${uriProtocol}://${host}${path ?? ""}`);
};

export const parseHttpRequestFromHeaders = <T>({
  method,
  path,
  headers,
  httpVersionMajor,
  httpVersionMinor,
  isTransportSecure,
  body,
}: {
  method: HttpMethod;
  path: string;
  headers: HttpHeaders;
  body: T;
  httpVersionMajor: number;
  httpVersionMinor: number;
  isTransportSecure: boolean;
}): HttpServerRequest<T> => {
  const cacheControl = parseCacheControlFromHeaders(headers);
  const contentInfo = parseHttpContentInfoFromHeaders(headers);
  const rawExpectHeader = getHeaderValue(headers, HttpStandardHeader.Expect);
  const expectContinue = rawExpectHeader === "100-continue";
  const preconditions = parseHttpRequestPreconditionsFromHeaders(headers);
  const preferences = parseHttpPreferencesFromHeaders(headers);
  const protocol = isTransportSecure ? "https" : "http";
  const uri = parseURIFromHeaders(protocol, path, httpVersionMajor, headers);

  return {
    body,
    cacheControl,
    contentInfo,
    expectContinue,
    headers,
    httpVersionMajor,
    httpVersionMinor,
    isTransportSecure,
    method,
    preconditions,
    preferences,
    uri,
  };
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

export const disallowProtocolAndHostForwarding = <T>(): Function1<
  HttpServerRequest<T>,
  HttpServerRequest<T>
> => request => {
  const {
    httpVersionMajor,
    headers: oldHeaders,
    isTransportSecure,
    uri: oldUri,
  } = request;
  const {
    "x-forwarded-proto": xForwardedProto,
    "x-forwarded-host": xForwardedHost,
    ...headers
  } = oldHeaders;

  const protocol = isTransportSecure ? "https" : "http";

  if (isNone(xForwardedProto) && isNone(xForwardedHost)) {
    return request;
  } else {
    const path = oldUri.pathname;
    const uri = parseURIFromHeaders(protocol, path, httpVersionMajor, headers);

    return {
      ...request,
      uri,
      headers,
    };
  }
};

export const httpRequestToUntypedHeaders = (
  request: HttpRequest<unknown>,
): { [key: string]: string } => {
  const headers: { [key: string]: string } = {};
  writeHttpRequestHeaders(
    request,
    (header: string, value: string) => (headers[header] = value),
  );
  return headers;
};

export const encodeHttpRequestWithUtf8: Function1<
  HttpRequest<string>,
  HttpRequest<Uint8Array>
> = (encodeHttpMessageWithUtf8 as unknown) as Function1<
  HttpRequest<string>,
  HttpRequest<Uint8Array>
>;

export const decodeHttpRequestWithCharset: Function1<
  HttpRequest<Uint8Array>,
  HttpRequest<string>
> = (decodeHttpMessageWithCharset as unknown) as Function1<
  HttpRequest<Uint8Array>,
  HttpRequest<string>
>;

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
    const newBody = contentInfo.contentEncodings
      .map(encoding => {
        const decoder = decoderProvider[encoding];
        if (isNone(decoder)) {
          throw createHttpResponse({
            statusCode: HttpStatusCode.UnsupportedMediaType,
            body: none,
          });
        }
        return decoder;
      })
      .reduceRight((acc, decoder) => decoder(acc), body);

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

export const encodeHttpClientRequestContent = (
  encoderProvider: {
    [key: string]: IOSourceOperator<Uint8Array, Uint8Array>;
  },
  db: {
    [key: string]: {
      compressible?: boolean;
    };
  } = {},
): Function1<
  HttpClientRequest<IOSourceLike<Uint8Array>>,
  HttpClientRequest<IOSourceLike<Uint8Array>>
> => {
  const supportedEncodings = Object.keys(encoderProvider);

  const httpRequestIsCompressible = <T>({
    contentInfo,
  }: HttpRequest<T>): boolean =>
    isSome(contentInfo) && contentIsCompressible(contentInfo, db);

  return request => {
    const { body, contentInfo } = request;

    if (isNone(contentInfo)) {
      return request;
    }

    const contentEncoding = (request?.acceptedEncodings ?? []).find(encoding =>
      supportedEncodings.includes(encoding),
    );

    if (isNone(contentEncoding)) {
      return request;
    }

    const encode =
      isSome(contentEncoding) && httpRequestIsCompressible(request)
        ? encoderProvider[contentEncoding]
        : none;

    if (isNone(encode)) {
      return request;
    }

    return {
      ...request,
      body: encode(body),
      contentInfo: {
        contentType: contentInfo.contentType,
        contentEncodings: [contentEncoding],
        contentLength: -1,
      },
    };
  };
};
