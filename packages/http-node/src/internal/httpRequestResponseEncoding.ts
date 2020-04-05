import { HttpRequestLike, HttpResponseLike } from "@reactive-js/http";
import { pipe } from "@reactive-js/pipe";
import {
  HttpContentBodyLike,
  decodeContentBody,
  encodeContentBody,
} from "./httpContentBody";
import { HttpContentEncoding, supportedEncodings } from "./HttpContentEncoding";

export const decodeHttpRequest = (
  request: HttpRequestLike<HttpContentBodyLike>,
): HttpRequestLike<HttpContentBodyLike> => {
  const { content } = request;
  return content !== undefined && content.contentEncodings.length > 0
    ? {
        ...request,
        content: decodeContentBody(content),
      }
    : request;
};

export const encodeHttpResponse = (
  acceptedEncodings: readonly HttpContentEncoding[],
) => (
  response: HttpResponseLike<HttpContentBodyLike>,
): HttpResponseLike<HttpContentBodyLike> => {
  const encoding = acceptedEncodings.find(
    encoding => supportedEncodings.indexOf(encoding) > -1,
  ) as HttpContentEncoding | undefined;
  const { content } = response;

  return encoding !== undefined && content !== undefined
    ? {
        ...response,
        content: pipe(content, encodeContentBody(encoding)),
      }
    : response;
};
