import iconv from "iconv-lite";
import { BrotliOptions, ZlibOptions } from "zlib";
import {
  HttpMessage,
  MediaType,
  parseMediaTypeOrThrow,
} from "@reactive-js/core/dist/js/http";
import { isSome } from "@reactive-js/core/dist/js/option";
import { pipe, Operator } from "@reactive-js/core/dist/js/functions";
import { createEncodingDecompressTransform } from "./httpContentEncoding";
import { ofValue, FlowableLike } from "@reactive-js/core/dist/js/flowable";
import { transform } from "../../streams";

export const decodeHttpMessage = <
  TMessage extends HttpMessage<FlowableLike<Uint8Array>>
>(
  message: TMessage,
  options: BrotliOptions | ZlibOptions = {},
) => {
  const { body, contentInfo } = message;
  return isSome(contentInfo) && contentInfo.contentEncodings.length > 0
    ? {
        ...message,
        body: contentInfo.contentEncodings
          .map(encoding => createEncodingDecompressTransform(encoding, options))
          .reduceRight((acc, decoder) => pipe(acc, transform(decoder)), body),
        content: {
          ...contentInfo,
          contentEncodings: [],
          contentLength: -1,
        },
      }
    : message;
};

export const encodeCharsetHttpMessage = (
  contentType: string | MediaType,
): Operator<HttpMessage<string>, HttpMessage<FlowableLike<Uint8Array>>> => {
  const parsedContentType =
    typeof contentType === "string"
      ? parseMediaTypeOrThrow(contentType)
      : contentType;

  const charset = parsedContentType.params["charset"] ?? "utf-8";

  return response => {
    const { body, ...responseWithoutBody } = response;

    const buffer = iconv.encode(response.body, charset);
    const streamBody = ofValue(buffer);

    return {
      ...responseWithoutBody,
      body: streamBody,
      contentInfo: {
        contentType: parsedContentType,
        contentLength: buffer.length,
        contentEncodings: [],
      },
    };
  };
};
