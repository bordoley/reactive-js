import {
  HttpStatusCode,
  HttpContentLike,
  HttpHeadersLike,
  URI,
  HttpPreferencesLike,
  HttpResponseLike,
} from "./interfaces";
import { writeHttpContentHeaders } from "./httpContent";
import { writeHttpPreferenceHeaders } from "./httpPreferences";
import { writeHttpHeaders } from "./httpHeaders";

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
