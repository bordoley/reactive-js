import { HttpRequestLike, HttpResponseLike } from "@reactive-js/http";
import { pipe } from "@reactive-js/pipe";
import {
  HttpContentBodyLike,
  decodeContentBody,
  encodeContentBody,
  HttpEncodingContentBodyLike,
  toHttpEncodingContentBody,
} from "./httpContentBody";
import { HttpContentEncoding, supportedEncodings } from "./HttpContentEncoding";

export const decodeHttpRequest = (
  request: HttpRequestLike<HttpEncodingContentBodyLike>,
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
): HttpResponseLike<HttpEncodingContentBodyLike> => {
  const encoding = acceptedEncodings.find(
    encoding => supportedEncodings.indexOf(encoding) > -1,
  ) as HttpContentEncoding | undefined;
  const { content } = response;

  return {
    ...response,
    content: 
      encoding !== undefined && content !== undefined
        ? pipe(content, encodeContentBody(encoding))
        : content !== undefined
        ? toHttpEncodingContentBody(content)
        : undefined,
  };
}
