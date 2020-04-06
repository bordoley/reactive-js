import { HttpRequestLike, HttpResponseLike } from "@reactive-js/http";
import {
  HttpContentBodyLike,
  encodeContentBody,
  decodeContentBody,
} from "./httpContentBody";
import {
  supportedEncodings,
  getFirstSupportedEncoding,
} from "./HttpContentEncoding";
import { BrotliOptions, ZlibOptions } from "zlib";

export const encodeHttpResponse = (
  shouldEncode: (
    req: HttpRequestLike<HttpContentBodyLike>,
    resp: HttpResponseLike<HttpContentBodyLike>,
  ) => boolean,
  options: BrotliOptions | ZlibOptions = {},
) => (request: HttpRequestLike<HttpContentBodyLike>) => (
  response: HttpResponseLike<HttpContentBodyLike>,
) => {
  // FIXME:
  // Don't compress for Cache-Control: no-transform
  // https://tools.ietf.org/html/rfc7234#section-5.2.2.4

  const acceptedEncodings = shouldEncode(request, response)
    ? request.acceptedEncodings
    : [];

  const { content, vary } = response;
  const encoding = acceptedEncodings.find(
    encoding => supportedEncodings.indexOf(encoding) > -1,
  );
  const encodeBody = encoding !== undefined && content !== undefined;

  return {
    ...response,
    content:
      encoding !== undefined && content !== undefined
        ? encodeContentBody(content, encoding, options)
        : content,
    vary: encodeBody ? [...vary, "Accept-Encoding"] : vary,
  };
};

export const decodeHttpRequest = (
  request: HttpRequestLike<HttpContentBodyLike>,
  options: BrotliOptions | ZlibOptions = {},
): HttpRequestLike<HttpContentBodyLike> => {
  const { content } = request;
  return content !== undefined && content.contentEncodings.length > 0
    ? {
        ...request,
        content: decodeContentBody(content, options),
      }
    : request;
};
