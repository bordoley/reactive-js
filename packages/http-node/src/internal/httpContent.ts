import iconv from "iconv-lite";
import { BrotliOptions, ZlibOptions } from "zlib";
import { Readable } from "stream";
import {
  AsyncEnumerableLike,
  StreamEvent,
  StreamMode,
  ofValueStream,
  StreamLike,
} from "@reactive-js/async-enumerable";
import {
  HttpContentEncoding,
  HttpContent,
  MediaType,
  createHttpContent,
  parseMediaTypeOrThrow,
} from "@reactive-js/http";
import { transform, createBufferStreamFromReadable } from "@reactive-js/node";
import { pipe } from "@reactive-js/pipe";
import {
  createEncodingCompressTransform,
  createEncodingDecompressTransform,
} from "./httpContentEncoding";

/** @ignore */
export const encodeHttpContent = (
  content: HttpContent<StreamLike<Buffer>>,
  encoding: HttpContentEncoding,
  options: BrotliOptions | ZlibOptions,
): HttpContent<AsyncEnumerableLike<StreamMode, StreamEvent<Buffer>>> => {
  const { body, contentLength, contentEncodings } = content;

  return contentLength === 0
    ? content
    : {
        ...content,
        body: pipe(
          body,
          transform(createEncodingCompressTransform(encoding, options)),
        ),
        contentEncodings: [...contentEncodings, encoding],
        contentLength: -1,
      };
};

/** @ignore */
export const decodeHttpContent = (
  contentBody: HttpContent<StreamLike<Buffer>>,
  options: BrotliOptions | ZlibOptions,
): HttpContent<AsyncEnumerableLike<StreamMode, StreamEvent<Buffer>>> => {
  const { body, contentLength, contentEncodings } = contentBody;

  return contentEncodings.length === 0 || contentLength === 0
    ? contentBody
    : {
        ...contentBody,
        body: contentEncodings
          .map(encoding => createEncodingDecompressTransform(encoding, options))
          .reduceRight((acc, decoder) => pipe(acc, transform(decoder)), body),
        contentEncodings: [],
      };
};

export const createBufferHttpContent = (
  chunk: Buffer,
  contentType: MediaType | string,
): HttpContent<StreamLike<Buffer>> =>
  createHttpContent({
    body: ofValueStream(chunk),
    contentLength: chunk.length,
    contentType,
  });

export const createReadableHttpContent = (
  factory: () => Readable,
  contentType: MediaType | string,
  contentLength = -1,
): HttpContent<StreamLike<Buffer>> =>
  createHttpContent({
    body: createBufferStreamFromReadable(factory),
    contentLength,
    contentType,
  });

export const createStringHttpContent = (
  content: string,
  contentType: MediaType | string,
): HttpContent<StreamLike<Buffer>> => {
  contentType =
    typeof contentType === "string"
      ? parseMediaTypeOrThrow(contentType)
      : contentType;
  const charset = contentType.params["charset"] ?? "utf-8";
  const buffer = iconv.encode(content, charset);

  contentType = {
    ...contentType,
    params: {
      ...contentType.params,
      charset,
    },
  };

  return createBufferHttpContent(buffer, contentType);
};
