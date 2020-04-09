import fresh from "fresh";
import { OperatorLike } from "@reactive-js/pipe";
import {
  HttpStatusCode,
  HttpContentLike,
  HttpHeadersLike,
  URI,
  HttpPreferencesLike,
  HttpResponseLike,
  HttpRequestLike,
  HttpMethod,
} from "./interfaces";
import {
  writeHttpContentHeaders,
  parseHttpContentFromHeaders,
} from "./httpContent";
import { writeHttpHeaders } from "./httpHeaders";
import {
  writeHttpPreferenceHeaders,
  parseHttpPreferencesFromHeaders,
} from "./httpPreferences";
import { parseHttpDateTime, serializeHttpDateTime } from "./httpDateTime";
import { serializeHttpEntityTag } from "./httpEntityTag";

declare class URL implements URI {
  constructor(uri: string);

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

export const createHttpResponse = <T>(
  statusCode: HttpStatusCode,
  options: {
    content?: HttpContentLike<T>;
    expires?: number;
    headers?: HttpHeadersLike;
    lastModified?: number;
    location?: URI;
    preferences?: HttpPreferencesLike;
    vary?: readonly string[];
  } = {},
): HttpResponseLike<T> => ({
  ...options,
  headers: options.headers || {},
  statusCode,
  vary: options.vary || [],
});

export const parseHttpResponseFromHeaders = <T>(
  statusCode: number,
  headers: HttpHeadersLike,
  body: T,
): HttpResponseLike<T> => {
  const content = parseHttpContentFromHeaders(headers, body);
  const preferences = parseHttpPreferencesFromHeaders(headers);

  // FIXME: etag

  const expires = parseHttpDateTime(headers["expires"] || "");
  const lastModified = parseHttpDateTime(headers["last-modified"] || "");

  const locationHeader = headers.location;
  const location =
    locationHeader !== undefined ? new URL(locationHeader) : undefined;

  // We're not going to use this so just return empty string.
  const vary: readonly string[] = [];

  return {
    expires,
    lastModified,
    content,
    headers,
    location,
    preferences,
    statusCode,
    vary,
  };
};

export const writeHttpResponseHeaders = <T>(
  {
    content,
    etag,
    expires,
    headers,
    lastModified,
    location,
    preferences,
    vary,
  }: HttpResponseLike<T>,
  writeHeader: (header: string, value: string) => void,
): void => {
  if (content !== undefined) {
    writeHttpContentHeaders(content, writeHeader);
  }

  if (etag !== undefined) {
    writeHeader("ETag", serializeHttpEntityTag(etag));
  }

  if (expires !== undefined) {
    writeHeader("Expires", serializeHttpDateTime(expires));
  }

  if (lastModified !== undefined) {
    writeHeader("Last-Modified", serializeHttpDateTime(lastModified));
  }

  if (location !== undefined) {
    writeHeader("Location", location.toString());
  }

  if (preferences !== undefined) {
    writeHttpPreferenceHeaders(preferences, writeHeader);
  }

  if (vary.length > 0) {
    writeHeader("Vary", vary.join(","));
  }

  writeHttpHeaders(headers, writeHeader);
};

export const checkIfNotModified = <T>({
  headers: reqHeaders,
  method,
}: HttpRequestLike<unknown>): OperatorLike<
  HttpResponseLike<T>,
  HttpResponseLike<T>
> => response => {
  const { statusCode, content, ...requestWithoutContent } = response;
  const methodSupportsFresh =
    method === HttpMethod.GET || method === HttpMethod.HEAD;
  const statusCodeSupportsFresh = statusCode >= 200 && statusCode < 300;

  const headers: { [k: string]: string } = {};
  writeHttpResponseHeaders(response, (k, v) => {
    headers[k.toLowerCase()] = v;
  });

  return methodSupportsFresh &&
    statusCodeSupportsFresh &&
    // We assume a server request here with raw headers from the request
    // so only serialize the response which is likely to be typed
    fresh(reqHeaders as any, headers as any)
    ? createHttpResponse(HttpStatusCode.NotModified, requestWithoutContent)
    : response;
};
