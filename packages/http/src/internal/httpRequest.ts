import {
  HttpMethod,
  URI,
  HttpContentLike,
  HttpHeadersLike,
  HttpPreferencesLike,
  HttpRequestLike,
  HttpResponseLike,
  HttpStatusCode,
  URL,
} from "./interfaces";
import { OperatorLike } from "@reactive-js/pipe";
import { writeHttpContentHeaders } from "./httpContent";
import { writeHttpPreferenceHeaders } from "./httpPreferences";
import { writeHttpHeaders } from "./httpHeaders";

export const createHttpRequest = <T>(
  method: HttpMethod,
  uri: string | URI,
  options: {
    content?: HttpContentLike<T>;
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

export const writeHttpRequestHeaders = <T>(
  { content, expectContinue, headers, preferences }: HttpRequestLike<T>,
  writeHeader: (header: string, value: string) => void,
): void => {
  if (expectContinue) {
    writeHeader("Expect", "100-continue");
  }

  if (content !== undefined) {
    writeHttpContentHeaders(content, writeHeader);
  }

  if (preferences !== undefined) {
    writeHttpPreferenceHeaders(preferences, writeHeader);
  }

  writeHttpHeaders(headers, writeHeader);
};
