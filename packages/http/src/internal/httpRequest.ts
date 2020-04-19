import { isNone, isSome, none } from "@reactive-js/option";
import { Operator } from "@reactive-js/pipe";
import {
  writeHttpContentHeaders,
  parseHttpContentFromHeaders,
} from "./httpContent";
import {
  writeHttpHeaders,
  HttpStandardHeader,
  getHeaderValue,
  HttpExtensiondHeader,
} from "./httpHeaders";
import {
  parseHttpPreferencesFromHeaders,
  writeHttpPreferenceHeaders,
} from "./httpPreferences";
import {
  writeHttpRequestPreconditionsHeaders,
  parseHttpRequestPreconditionsFromHeaders,
} from "./httpRequestPreconditions";
import {
  HttpMethod,
  URILike,
  HttpHeaders,
  HttpPreferences,
  HttpRequest,
  HttpResponse,
  HttpServerRequest,
  HttpStatusCode,
  HttpContentRequest,
  HttpRequestPreconditions,
  CacheDirective,
} from "./interfaces";
import {
  parseCacheControlFromHeaders,
  writeHttpCacheControlHeader,
} from "./cacheDirective";

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

export const createHttpRequest = <T>(
  method: HttpMethod,
  uri: string | URILike,
  options: {
    cacheControl?: readonly CacheDirective[];
    content?: T;
    expectContinue?: boolean;
    headers?: HttpHeaders;
    preconditions?: HttpRequestPreconditions;
    preferences?: HttpPreferences;
    httpVersionMajor?: number;
    httpVersionMinor?: number;
  } = {},
): HttpRequest<T> => ({
  ...options,
  cacheControl: options.cacheControl ?? [],
  expectContinue: options.expectContinue ?? false,
  headers: options.headers ?? {},
  httpVersionMajor: options.httpVersionMajor ?? 1,
  httpVersionMinor: options.httpVersionMinor ?? 1,
  method,
  uri: typeof uri === "string" ? new URL(uri) : uri,
});

export const createRedirectHttpRequest = <TReq, TResp>(
  response: HttpResponse<TResp>,
): Operator<HttpRequest<TReq>, HttpRequest<TReq>> => request => {
  const { content, method } = request;
  const { location, statusCode } = response;

  const redirectToGet =
    statusCode === HttpStatusCode.SeeOther ||
    ((statusCode === HttpStatusCode.MovedPermanently ||
      HttpStatusCode.Found === 302) &&
      method === HttpMethod.POST);

  return {
    ...request,
    content: redirectToGet ? none : content,
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
    HttpExtensiondHeader.XForwardedProto,
  );
  const uriProtocol = isSome(forwardedProtocol)
    ? forwardedProtocol.split(/\s*,\s*/, 1)[0]
    : protocol;
  const forwardedHost = getHeaderValue(
    headers,
    HttpExtensiondHeader.XForwardedHost,
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
  const content = parseHttpContentFromHeaders(headers, body);
  const rawExpectHeader = getHeaderValue(headers, HttpStandardHeader.Expect);
  const expectContinue = rawExpectHeader === "100-continue";
  const preconditions = parseHttpRequestPreconditionsFromHeaders(headers);
  const preferences = parseHttpPreferencesFromHeaders(headers);
  const protocol = isTransportSecure ? "https" : "http";
  const uri = parseURIFromHeaders(protocol, path, httpVersionMajor, headers);

  return {
    cacheControl,
    content,
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
  {
    cacheControl,
    content,
    expectContinue,
    headers,
    preconditions,
    preferences,
  }: HttpContentRequest<T>,
  writeHeader: (header: string, value: string) => void,
): void => {
  writeHttpCacheControlHeader(cacheControl, writeHeader);

  if (isSome(content)) {
    writeHttpContentHeaders(content, writeHeader);
  }

  if (expectContinue) {
    writeHeader(HttpStandardHeader.Expect, "100-continue");
  }

  if (isSome(preconditions)) {
    writeHttpRequestPreconditionsHeaders(preconditions, writeHeader);
  }

  if (isSome(preferences)) {
    writeHttpPreferenceHeaders(preferences, writeHeader);
  }

  writeHttpHeaders(headers, writeHeader);
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
  request: HttpContentRequest<unknown>,
): { [key: string]: string } => {
  const headers: { [key: string]: string } = {};
  writeHttpRequestHeaders(
    request,
    (header: string, value: string) => (headers[header] = value),
  );
  return headers;
};
