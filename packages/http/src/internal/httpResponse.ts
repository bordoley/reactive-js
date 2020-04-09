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
import { writeHttpContentHeaders, parseHttpContentFromHeaders } from "./httpContent";
import { writeHttpHeaders } from "./httpHeaders";
import { writeHttpPreferenceHeaders, parseHttpPreferencesFromHeaders } from "./httpPreferences";

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
  const content = parseHttpContentFromHeaders(
    headers,
    body,
  );

  const preferences = parseHttpPreferencesFromHeaders(
    headers,
  );

  const expiresDateValue = headers["expires"] || "";
  const expiresDate = new Date(expiresDateValue);
  const expiresTims = expiresDate.getTime();
  const expires =
    expiresDateValue !== "" && !Number.isNaN(expiresTims)
      ? expiresTims
      : undefined;

  const lastModifiedValue = headers["last-modified"] || "";
  const lastModifiedDate = new Date(lastModifiedValue);
  const lastModifiedTime = lastModifiedDate.getTime();
  const lastModified =
    lastModifiedValue !== "" && !Number.isNaN(lastModifiedTime)
      ? lastModifiedTime
      : undefined;

  const locationHeader = headers.location;
  const location = locationHeader !== undefined
    ? new URL(locationHeader)
    : undefined;

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
  }
};

export const writeHttpResponseHeaders = <T>(
  {
    content,
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

  if (expires !== undefined) {
    const date = new Date(expires);
    writeHeader("Expires", date.toUTCString());
  }

  if (lastModified !== undefined) {
    const date = new Date(lastModified);
    writeHeader("Last-Modified", date.toUTCString());
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
  const {
    expires,
    headers,
    lastModified,
    location,
    preferences,
    statusCode,
    vary,
  } = response;
  const methodSupportsFresh =
    method === HttpMethod.GET || method === HttpMethod.HEAD;
  const statusCodeSupportsFresh = statusCode >= 200 && statusCode < 300;

  return methodSupportsFresh &&
    statusCodeSupportsFresh &&
    fresh(reqHeaders as any, headers as any)
    ? createHttpResponse(HttpStatusCode.NotModified, {
        expires,
        headers,
        lastModified,
        location,
        preferences,
        vary,
      })
    : response;
};
