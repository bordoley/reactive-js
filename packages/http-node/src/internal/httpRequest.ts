import { URL } from "url";
import { BrotliOptions, ZlibOptions } from "zlib";
import {
  HttpRequestLike,
  HttpMethod,
  HttpHeadersLike,
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

/** @ignore */
export const createHttpRequestFromHeaders = <T>(
  method: HttpMethod,
  path: string,
  headers: HttpHeadersLike,
  body: T,
  isEncrypted: boolean,
  httpVersionMajor: number,
): HttpRequestLike<T> => {
  const content = createHttpContentFromHeaders(headers, body);

  const rawExpectHeader = headers.expect;
  const expectContinue = rawExpectHeader === "100-continue";

  const preferences = createHttpPreferencesFromHeaders(headers);

  const forwardedProtocol = headers["x-forwarded-proto"];
  const protocol = isEncrypted
    ? "https"
    : forwardedProtocol !== undefined
    ? forwardedProtocol.split(/\s*,\s*/, 1)[0]
    : "http";

  const forwardedHost = headers["x-forwarded-host"];
  const http2Authority = headers[":authority"];
  const http1Host = headers["host"];
  const unfilteredHost =
    forwardedHost !== undefined && !Array.isArray(forwardedHost)
      ? forwardedHost
      : http2Authority !== undefined &&
        httpVersionMajor >= 2 &&
        !Array.isArray(http2Authority)
      ? http2Authority
      : http1Host !== undefined && !Array.isArray(http1Host)
      ? http1Host
      : "";
  const host = unfilteredHost.split(/\s*,\s*/, 1)[0];
  const uri = new URL(`${protocol}://${host}${path || ""}`);

  return {
    content,
    expectContinue,
    headers,
    method,
    preferences,
    uri,
  };
};
