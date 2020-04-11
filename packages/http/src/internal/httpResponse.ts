import fresh from "fresh";
import { OperatorLike } from "@reactive-js/pipe";
import {
  HttpStatusCode,
  HttpHeadersLike,
  URI,
  HttpPreferencesLike,
  HttpResponseLike,
  HttpRequestLike,
  HttpMethod,
  HttpContentResponseLike,
} from "./interfaces";
import {
  writeHttpContentHeaders,
  parseHttpContentFromHeaders,
} from "./httpContent";
import { parseHttpDateTime, serializeHttpDateTime } from "./httpDateTime";
import { serializeHttpEntityTag } from "./httpEntityTag";
import {
  writeHttpHeaders,
  getHeaderValue,
  HttpStandardHeader,
} from "./httpHeaders";
import {
  parseHttpPreferencesFromHeaders,
  writeHttpPreferenceHeaders,
} from "./httpPreferences";

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

export const createHttpResponse = <T>(
  statusCode: HttpStatusCode,
  options: {
    content?: T;
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
): HttpContentResponseLike<T> => {
  const content = parseHttpContentFromHeaders(headers, body);

  // FIXME: etag

  const expires = parseHttpDateTime(
    getHeaderValue(headers, HttpStandardHeader.Expires, ""),
  );
  const lastModified = parseHttpDateTime(
    getHeaderValue(headers, HttpStandardHeader.LastModified, ""),
  );

  const locationHeader = headers.location;
  const location =
    locationHeader !== undefined ? new URL(locationHeader) : undefined;

  const preferences = parseHttpPreferencesFromHeaders(headers);

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
}

const writeCoreHttpResponseHeaders = <T>(
  {
    etag,
    expires,
    headers,
    lastModified,
    location,
    preferences,
    vary,
  }: HttpResponseLike<T>,
  writeHeader: (header: string, value: string) => void,
) => {
  if (etag !== undefined) {
    writeHeader(HttpStandardHeader.ETag, serializeHttpEntityTag(etag));
  }

  if (expires !== undefined) {
    writeHeader(HttpStandardHeader.Expires, serializeHttpDateTime(expires));
  }

  if (lastModified !== undefined) {
    writeHeader(
      HttpStandardHeader.LastModified,
      serializeHttpDateTime(lastModified),
    );
  }

  if (location !== undefined) {
    writeHeader(HttpStandardHeader.Location, location.toString());
  }

  if (preferences !== undefined) {
    writeHttpPreferenceHeaders(preferences, writeHeader);
  }

  if (vary.length > 0) {
    writeHeader(HttpStandardHeader.Vary, vary.join(","));
  }

  writeHttpHeaders(headers, writeHeader);
};

export const writeHttpResponseHeaders = <T>(
  response: HttpContentResponseLike<T>,
  writeHeader: (header: string, value: string) => void,
): void => {
  const { content } = response;

  writeCoreHttpResponseHeaders(response, writeHeader);

  if (content !== undefined) {
    writeHttpContentHeaders(content, writeHeader);
  }
};

export const checkIfNotModified = <T>({
  headers: reqHeaders,
  method,
}: HttpRequestLike<unknown>): OperatorLike<
  HttpResponseLike<T>,
  HttpResponseLike<T>
> => response => {
  const { statusCode, content: _, ...requestWithoutContent } = response;
  const methodSupportsFresh =
    method === HttpMethod.GET || method === HttpMethod.HEAD;
  const statusCodeSupportsFresh = statusCode >= 200 && statusCode < 300;

  const headers: { [k: string]: string } = {};
  writeCoreHttpResponseHeaders(response, (k, v) => {
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
