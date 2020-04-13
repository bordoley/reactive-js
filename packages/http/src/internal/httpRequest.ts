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
} from "./interfaces";

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
    content?: T;
    expectContinue?: boolean;
    headers?: HttpHeaders;
    preferences?: HttpPreferences;
    httpVersionMajor?: number;
    httpVersionMinor?: number;
  } = {},
): HttpRequest<T> => ({
  ...options,
  expectContinue: options.expectContinue || false,
  headers: options.headers || {},
  httpVersionMajor: options.httpVersionMajor || 1,
  httpVersionMinor: options.httpVersionMinor || 1,
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
    content: redirectToGet ? undefined : content,
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
  const uriProtocol =
    forwardedProtocol !== undefined
      ? forwardedProtocol.split(/\s*,\s*/, 1)[0]
      : protocol;
  const forwardedHost = getHeaderValue(
    headers,
    HttpExtensiondHeader.XForwardedHost,
  );
  const http2Authority = headers[":authority"];
  const http1Host = getHeaderValue(headers, HttpStandardHeader.Host);
  const unfilteredHost =
    forwardedHost !== undefined
      ? forwardedHost
      : http2Authority !== undefined && httpVersionMajor >= 2
      ? http2Authority
      : http1Host !== undefined
      ? http1Host
      : "";
  const host = unfilteredHost.split(/\s*,\s*/, 1)[0];
  return new URL(`${uriProtocol}://${host}${path || ""}`);
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
  const content = parseHttpContentFromHeaders(headers, body);
  const rawExpectHeader = getHeaderValue(headers, HttpStandardHeader.Expect);
  const expectContinue = rawExpectHeader === "100-continue";
  const preconditions = parseHttpRequestPreconditionsFromHeaders(headers);
  const preferences = parseHttpPreferencesFromHeaders(headers);
  const protocol = isTransportSecure ? "https" : "http";
  const uri = parseURIFromHeaders(protocol, path, httpVersionMajor, headers);

  return {
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
    content,
    expectContinue,
    headers,
    preconditions,
    preferences,
  }: HttpContentRequest<T>,
  writeHeader: (header: string, value: string) => void,
): void => {
  if (expectContinue) {
    writeHeader(HttpStandardHeader.Expect, "100-continue");
  }

  if (content !== undefined) {
    writeHttpContentHeaders(content, writeHeader);
  }

  if (preconditions !== undefined) {
    writeHttpRequestPreconditionsHeaders(preconditions, writeHeader);
  }

  if (preferences !== undefined) {
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

  if (xForwardedProto === undefined && xForwardedHost === undefined) {
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
