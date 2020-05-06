import { isNone, isSome, none } from "@reactive-js/core/dist/js/option";
import { Operator } from "@reactive-js/core/dist/js/functions";
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
import {
  parseCacheControlFromHeaders,
  parseCacheDirectiveOrThrow,
} from "./cacheDirective.ts";
import {
  writeHttpMessageHeaders,
  encodeHttpMessageWithCharset,
  toFlowableHttpMessage,
  decodeHttpMessageWithCharset,
} from "./HttpMessage.ts";
import {
  FlowableLike,
  FlowableOperator,
} from "@reactive-js/core/dist/js/flowable";
import { HttpClientRequest } from "./httpClient.ts";
import { createHttpResponse } from "./httpResponse.ts";

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
  expectContinue,
  headers,
  httpVersionMajor,
  httpVersionMinor,
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
  contentInfo: isSome(contentInfo) ? createHttpContentInfo(contentInfo) : none,
  expectContinue: expectContinue ?? false,
  headers: filterHeaders(headers ?? {}),
  httpVersionMajor: httpVersionMajor ?? 1,
  httpVersionMinor: httpVersionMinor ?? 1,
  method,
  preconditions: isSome(preconditions)
    ? createHttpRequestPreconditions(preconditions)
    : none,
  preferences: isSome(preferences) ? createHttpPreferences(preferences) : none,
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
  writeHeader: (header: string, value: string) => void,
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

export const disallowProtocolAndHostForwarding = <T>(): Operator<
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

export const encodeHttpRequestWithCharset = (
  encode: (v: string, charset: string) => Uint8Array,
) => (
  contentType: string | MediaType,
): Operator<HttpRequest<string>, HttpRequest<Uint8Array>> => {
  const messageEncoder = encodeHttpMessageWithCharset(encode, contentType);
  return req => messageEncoder(req) as HttpRequest<Uint8Array>;
};

export const decodeHttpRequestWithCharset = (
  decode: (v: Uint8Array, charset: string) => string,
): Operator<HttpRequest<Uint8Array>, HttpRequest<string>> => {
  const messageEncoder = decodeHttpMessageWithCharset(decode);
  return req => messageEncoder(req) as HttpRequest<string>;
};

export const toFlowableHttpRequest = <TBody>(
  req: HttpRequest<TBody>,
): HttpRequest<FlowableLike<TBody>> =>
  toFlowableHttpMessage(req) as HttpRequest<FlowableLike<TBody>>;

export const decodeHttpRequestContent = (decoderProvider: {
  [key: string]: FlowableOperator<Uint8Array, Uint8Array>;
}): Operator<
  HttpRequest<FlowableLike<Uint8Array>>,
  HttpRequest<FlowableLike<Uint8Array>>
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
    [key: string]: FlowableOperator<Uint8Array, Uint8Array>;
  },
  db: {
    [key: string]: {
      compressible?: boolean;
    };
  } = {},
): Operator<
  HttpClientRequest<FlowableLike<Uint8Array>>,
  HttpClientRequest<FlowableLike<Uint8Array>>
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
