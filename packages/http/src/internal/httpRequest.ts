import {
  HttpMethod,
  URI,
  HttpHeadersLike,
  HttpPreferencesLike,
  HttpRequestLike,
  HttpResponseLike,
  HttpServerRequestLike,
  HttpStatusCode,
  HttpContentRequestLike,
} from "./interfaces";
import { OperatorLike } from "@reactive-js/pipe";
import {
  writeHttpContentHeaders,
  parseHttpContentFromHeaders,
} from "./httpContent";
import {
  writeHttpPreferenceHeaders,
  parseHttpPreferencesFromHeaders,
} from "./httpPreferences";
import { writeHttpHeaders } from "./httpHeaders";
import { writeHttpRequestPreconditionsHeaders } from "./httpRequestPreconditions";

declare class URL implements URI {
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
  uri: string | URI,
  options: {
    content?: T;
    expectContinue?: boolean;
    headers?: HttpHeadersLike;
    preferences?: HttpPreferencesLike;
    httpVersionMajor?: number;
    httpVersionMinor?: number;
  } = {},
): HttpRequestLike<T> => ({
  ...options,
  expectContinue: options.expectContinue || false,
  headers: options.headers || {},
  httpVersionMajor: options.httpVersionMajor || 1,
  httpVersionMinor: options.httpVersionMinor || 1,
  method,
  uri: typeof uri === "string" ? new URL(uri) : uri,
});

export const createRedirectHttpRequest = <TReq, TResp>(
  response: HttpResponseLike<TResp>,
): OperatorLike<HttpRequestLike<TReq>, HttpRequestLike<TReq>> => request => {
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
    uri: location as URI,
  };
};

const parseURIFromHeaders = (
  protocol: "http" | "https",
  path: string,
  httpVersionMajor: number,
  headers: HttpHeadersLike,
): URI => {
  const forwardedProtocol = headers["x-forwarded-proto"];
  const uriProtocol =
    forwardedProtocol !== undefined
      ? forwardedProtocol.split(/\s*,\s*/, 1)[0]
      : protocol;
  const forwardedHost = headers["x-forwarded-host"];
  const http2Authority = headers[":authority"];
  const http1Host = headers["host"];
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
  headers: HttpHeadersLike;
  body: T;
  httpVersionMajor: number;
  httpVersionMinor: number;
  isTransportSecure: boolean;
}): HttpServerRequestLike<T> => {
  const content = parseHttpContentFromHeaders(headers, body);
  const rawExpectHeader = headers.expect;
  const expectContinue = rawExpectHeader === "100-continue";

  // FIXME: Preconditions

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
  }: HttpContentRequestLike<T>,
  writeHeader: (header: string, value: string) => void,
): void => {
  if (expectContinue) {
    writeHeader("Expect", "100-continue");
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

// FIXME: Define HttpServerRequestLike and append isTransportSecureFlag to avoid the protocol
export const disallowProtocolAndHostForwarding = <T>(): OperatorLike<
  HttpServerRequestLike<T>,
  HttpServerRequestLike<T>
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
