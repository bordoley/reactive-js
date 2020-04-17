import fresh from "fresh";
import { isSome, none } from "@reactive-js/option";
import { Operator } from "@reactive-js/pipe";
import {
  HttpStatusCode,
  HttpHeaders,
  URILike,
  HttpPreferences,
  HttpResponse,
  HttpRequest,
  HttpMethod,
  HttpContentResponse,
} from "./interfaces";
import {
  writeHttpContentHeaders,
  parseHttpContentFromHeaders,
} from "./httpContent";
import { parseHttpDateTime, httpDateTimeToString } from "./httpDateTime";
import { entityTagToString, parseETag } from "./entityTag";
import {
  writeHttpHeaders,
  getHeaderValue,
  HttpStandardHeader,
} from "./httpHeaders";
import {
  parseHttpPreferencesFromHeaders,
  writeHttpPreferenceHeaders,
} from "./httpPreferences";

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

export const createHttpResponse = <T>(
  statusCode: HttpStatusCode,
  options: {
    content?: T;
    expires?: number;
    headers?: HttpHeaders;
    lastModified?: number;
    location?: URILike;
    preferences?: HttpPreferences;
    vary?: readonly string[];
  } = {},
): HttpResponse<T> => ({
  ...options,
  headers: options.headers || {},
  statusCode,
  vary: options.vary || [],
});

export const parseHttpResponseFromHeaders = <T>(
  statusCode: number,
  headers: HttpHeaders,
  body: T,
): HttpContentResponse<T> => {
  const content = parseHttpContentFromHeaders(headers, body);

  const etag = parseETag(
    getHeaderValue(headers, HttpStandardHeader.ETag) || "",
  );

  const expires = parseHttpDateTime(
    getHeaderValue(headers, HttpStandardHeader.Expires) || "",
  );

  const lastModified = parseHttpDateTime(
    getHeaderValue(headers, HttpStandardHeader.LastModified) || "",
  );

  const locationHeader = headers.location;
  const location = isSome(locationHeader) ? new URL(locationHeader) : none;

  const preferences = parseHttpPreferencesFromHeaders(headers);

  // We're not going to use this so just return empty string.
  const vary: readonly string[] = [];

  return {
    etag,
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

const writeCoreHttpResponseHeaders = <T>(
  {
    etag,
    expires,
    headers,
    lastModified,
    location,
    preferences,
    vary,
  }: HttpResponse<T>,
  writeHeader: (header: string, value: string) => void,
) => {
  if (isSome(etag)) {
    writeHeader(HttpStandardHeader.ETag, entityTagToString(etag));
  }

  if (isSome(expires)) {
    writeHeader(HttpStandardHeader.Expires, httpDateTimeToString(expires));
  }

  if (isSome(lastModified)) {
    writeHeader(
      HttpStandardHeader.LastModified,
      httpDateTimeToString(lastModified),
    );
  }

  if (isSome(location)) {
    writeHeader(HttpStandardHeader.Location, location.toString());
  }

  if (isSome(preferences)) {
    writeHttpPreferenceHeaders(preferences, writeHeader);
  }

  if (vary.length > 0) {
    writeHeader(HttpStandardHeader.Vary, vary.join(","));
  }

  writeHttpHeaders(headers, writeHeader);
};

export const writeHttpResponseHeaders = <T>(
  response: HttpContentResponse<T>,
  writeHeader: (header: string, value: string) => void,
): void => {
  const { content } = response;

  writeCoreHttpResponseHeaders(response, writeHeader);

  if (isSome(content)) {
    writeHttpContentHeaders(content, writeHeader);
  }
};

export const checkIfNotModified = <T>({
  headers: reqHeaders,
  method,
}: HttpRequest<unknown>): Operator<
  HttpResponse<T>,
  HttpResponse<T>
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
