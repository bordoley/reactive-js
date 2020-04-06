import { HttpRequestLike, HttpResponseLike } from "@reactive-js/http";
import {
  HttpContentBodyLike,
  encodeContentBody,
  decodeContentBody,
} from "./httpContentBody";
import { supportedEncodings } from "./httpContentEncoding";
import { BrotliOptions, ZlibOptions } from "zlib";
import { OperatorLike } from "@reactive-js/pipe";

const alwaysTrue = <TA, TB>(_a: TA, _b: TB) => true;

export const encodeHttpResponse = (
  request: HttpRequestLike<HttpContentBodyLike>,
  options: {
    shouldEncode?: (
      req: HttpRequestLike<HttpContentBodyLike>,
      resp: HttpResponseLike<HttpContentBodyLike>,
    ) => boolean ,
    zlibOptions?: BrotliOptions | ZlibOptions,
  } = {},
): OperatorLike<HttpResponseLike<HttpContentBodyLike>, HttpResponseLike<HttpContentBodyLike>> => (
  response: HttpResponseLike<HttpContentBodyLike>,
) => {
  const { shouldEncode = alwaysTrue, zlibOptions = {} } = options;
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
        ? encodeContentBody(content, encoding, zlibOptions)
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
