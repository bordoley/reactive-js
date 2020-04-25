import db from "mime-db";
import { BrotliOptions, ZlibOptions } from "zlib";
import {
  HttpRequest,
  httpRequestIsCompressible,
  MediaType,
} from "@reactive-js/core/dist/js/http";
import { BufferFlowableLike, transform } from "../../streams";
import { isSome } from "@reactive-js/core/dist/js/option";
import { Operator, pipe } from "@reactive-js/core/dist/js/pipe";
import {
  createEncodingCompressTransform,
  getFirstSupportedEncoding,
} from "./httpContentEncoding";
import { HttpClientRequest } from "./interfaces";
import { decodeHttpMessage, encodeCharsetHttpMessage } from "./httpMessage";

export const decodeHttpRequest = (
  options: BrotliOptions | ZlibOptions = {},
): Operator<
  HttpRequest<BufferFlowableLike>,
  HttpRequest<BufferFlowableLike>
> => request => decodeHttpMessage(request, options);

export const encodeHttpRequest = (
  options: BrotliOptions | ZlibOptions = {},
): Operator<HttpClientRequest, HttpRequest<BufferFlowableLike>> => request => {
  const { body, contentInfo } = request;

  const contentEncoding = getFirstSupportedEncoding(
    request?.acceptedEncodings ?? [],
  );

  return isSome(contentEncoding) &&
    isSome(contentInfo) &&
    contentInfo.contentEncodings.length === 0 &&
    httpRequestIsCompressible(request, db)
    ? {
        ...request,
        body: pipe(
          body,
          transform(createEncodingCompressTransform(contentEncoding, options)),
        ),
        contentInfo: {
          ...contentInfo,
          contentEncodings: [contentEncoding],
          contentLength: -1,
        },
      }
    : request;
};

export const encodeCharsetHttpRequest = (
  contentType: string | MediaType,
): Operator<HttpRequest<string>, HttpRequest<BufferFlowableLike>> => {
  const messageEncoder = encodeCharsetHttpMessage(contentType);
  return req => messageEncoder(req) as HttpRequest<BufferFlowableLike>;
};
