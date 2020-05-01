import db from "mime-db";
import { BrotliOptions, ZlibOptions } from "zlib";
import {
  HttpRequest,
  httpRequestIsCompressible,
  MediaType,
  HttpClientRequest,
} from "@reactive-js/core/dist/js/http";
import { isSome } from "@reactive-js/core/dist/js/option";
import { Operator, pipe } from "@reactive-js/core/dist/js/functions";
import {
  createEncodingCompressTransform,
  getFirstSupportedEncoding,
} from "./httpContentEncoding";
import { decodeHttpMessage, encodeCharsetHttpMessage } from "./httpMessage";
import { FlowableLike } from "@reactive-js/core/dist/js/flowable";
import { transform } from "../../streams";

export const decodeHttpRequest = (
  options: BrotliOptions | ZlibOptions = {},
): Operator<
  HttpRequest<FlowableLike<Uint8Array>>,
  HttpRequest<FlowableLike<Uint8Array>>
> => request => decodeHttpMessage(request, options);

export const encodeHttpClientRequest = (
  options: BrotliOptions | ZlibOptions = {},
): Operator<
  HttpClientRequest<FlowableLike<Uint8Array>>,
  HttpClientRequest<FlowableLike<Uint8Array>>
> => request => {
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
): Operator<HttpRequest<string>, HttpRequest<FlowableLike<Uint8Array>>> => {
  const messageEncoder = encodeCharsetHttpMessage(contentType);
  return req => messageEncoder(req) as HttpRequest<FlowableLike<Uint8Array>>;
};
