import { URL } from "url";
import { BrotliOptions, ZlibOptions } from "zlib";
import {
  HttpRequestLike,
  HttpMethod,
  HttpHeadersLike,
  URI,
} from "@reactive-js/http";
import { OperatorLike } from "@reactive-js/pipe";
import { decodeHttpContent, createHttpContentFromHeaders } from "./httpContent";
import { ReadableMode, ReadableEvent } from "@reactive-js/node";
import { AsyncEnumerableLike } from "@reactive-js/async-enumerable";
import { createHttpPreferencesFromHeaders } from "./httpPreferences";

export const decodeHttpRequest = (
  options: BrotliOptions | ZlibOptions = {},
): OperatorLike<
  HttpRequestLike<AsyncEnumerableLike<ReadableMode, ReadableEvent>>,
  HttpRequestLike<AsyncEnumerableLike<ReadableMode, ReadableEvent>>
> => request => {
  const { content } = request;
  return content !== undefined && content.contentEncodings.length > 0
    ? {
        ...request,
        content: decodeHttpContent(content, options),
      }
    : request;
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

/** @ignore */
export const createHttpRequestFromHeaders = <T>({
  method,
  path,
  headers,
  httpVersionMajor,
  httpVersionMinor,
  protocol,
  body,
}: {
  method: HttpMethod;
  path: string;
  headers: HttpHeadersLike;
  body: T;
  httpVersionMajor: number;
  httpVersionMinor: number;
  protocol: "http" | "https";
}): HttpRequestLike<T> => {
  const content = createHttpContentFromHeaders(headers, body);
  const rawExpectHeader = headers.expect;
  const expectContinue = rawExpectHeader === "100-continue";
  const preferences = createHttpPreferencesFromHeaders(headers);
  const uri = parseURIFromHeaders(protocol, path, httpVersionMajor, headers);

  return {
    content,
    expectContinue,
    headers,
    httpVersionMajor,
    httpVersionMinor,
    method,
    preferences,
    uri,
  };
};

export const disallowProtocolAndHostForwarding = <T>(
  protocol: "http" | "https" = "http",
): OperatorLike<HttpRequestLike<T>, HttpRequestLike<T>> => request => {
  const { httpVersionMajor, headers: oldHeaders, uri: oldUri } = request;
  const {
    "x-forwarded-proto": xForwardedProto,
    "x-forwarded-host": xForwardedHost,
    ...headers
  } = oldHeaders;

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
