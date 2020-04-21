import db from "mime-db";
import { BrotliOptions, ZlibOptions } from "zlib";
import { HttpRequest, httpRequestIsCompressible } from "@reactive-js/http";
import { BufferStreamLike, transform } from "@reactive-js/node";
import { isSome } from "@reactive-js/option";
import { Operator, pipe } from "@reactive-js/pipe";
import {
  createEncodingDecompressTransform,
  createEncodingCompressTransform,
  getFirstSupportedEncoding,
} from "./httpContentEncoding";
import { HttpClientRequest } from "./interfaces";

export const decodeHttpRequest = (
  options: BrotliOptions | ZlibOptions = {},
): Operator<
  HttpRequest<BufferStreamLike>,
  HttpRequest<BufferStreamLike>
> => request => {
  const { body, contentInfo } = request;
  return isSome(contentInfo) && contentInfo.contentEncodings.length > 0
    ? {
        ...request,
        body: contentInfo.contentEncodings
          .map(encoding => createEncodingDecompressTransform(encoding, options))
          .reduceRight((acc, decoder) => pipe(acc, transform(decoder)), body),
        content: {
          ...contentInfo,
          contentEncodings: [],
          contentLength: -1,
        },
      }
    : request;
};

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
