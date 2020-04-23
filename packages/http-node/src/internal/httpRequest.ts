import db from "mime-db";
import { BrotliOptions, ZlibOptions } from "zlib";
import {
  HttpRequest,
  httpRequestIsCompressible,
  MediaType,
} from "@reactive-js/http";
import { BufferStreamLike, transform } from "@reactive-js/node";
import { isSome } from "@reactive-js/option";
import { Operator, pipe } from "@reactive-js/pipe";
import {
  createEncodingCompressTransform,
  getFirstSupportedEncoding,
} from "./httpContentEncoding";
import { HttpClientRequest } from "./interfaces";
import { decodeHttpMessage, encodeCharsetHttpMessage } from "./httpMessage";

export const decodeHttpRequest = (
  options: BrotliOptions | ZlibOptions = {},
): Operator<
  HttpRequest<BufferStreamLike>,
  HttpRequest<BufferStreamLike>
> => request => decodeHttpMessage(request, options);

export const encodeHttpRequest = (
  options: BrotliOptions | ZlibOptions = {},
): Operator<HttpClientRequest, HttpRequest<BufferStreamLike>> => request => {
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
): Operator<HttpRequest<string>, HttpRequest<BufferStreamLike>> => {
  const messageEncoder = encodeCharsetHttpMessage(contentType);
  return req => messageEncoder(req) as HttpRequest<BufferStreamLike>;
};
