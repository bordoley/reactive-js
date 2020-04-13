import compressible from "compressible";
import iconv from "iconv-lite";
import { BrotliOptions, ZlibOptions } from "zlib";
import { Readable } from "stream";
import { AsyncEnumerableLike } from "@reactive-js/async-enumerable";
import {
  HttpContentEncoding,
  HttpContent,
  MediaType,
  mediaTypeToString,
  parseMediaTypeOrThrow,
} from "@reactive-js/http";
import {
  ReadableMode,
  ReadableEvent,
  createReadableAsyncEnumerableFromBuffer,
  transform,
  createReadableAsyncEnumerable,
} from "@reactive-js/node";
import { pipe } from "@reactive-js/pipe";
import {
  createEncodingCompressTransform,
  createEncodingDecompressTransform,
} from "./httpContentEncoding";

/** @ignore */
export const encodeHttpContent = (
  contentBody: HttpContent<
    AsyncEnumerableLike<ReadableMode, ReadableEvent>
  >,
  encoding: HttpContentEncoding,
  options: BrotliOptions | ZlibOptions,
): HttpContent<AsyncEnumerableLike<ReadableMode, ReadableEvent>> => {
  const { body, contentLength, contentEncodings } = contentBody;

  return contentLength === 0
    ? contentBody
    : {
        ...contentBody,
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
  contentBody: HttpContent<
    AsyncEnumerableLike<ReadableMode, ReadableEvent>
  >,
  options: BrotliOptions | ZlibOptions,
): HttpContent<AsyncEnumerableLike<ReadableMode, ReadableEvent>> => {
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
): HttpContent<AsyncEnumerableLike<ReadableMode, ReadableEvent>> => ({
  body: createReadableAsyncEnumerableFromBuffer(chunk),
  contentEncodings: [],
  contentLength: chunk.length,
  contentType:
    typeof contentType === "string"
      ? parseMediaTypeOrThrow(contentType)
      : contentType,
});

export const createReadableHttpContent = (
  factory: () => Readable,
  contentType: MediaType | string,
  contentLength = -1,
): HttpContent<AsyncEnumerableLike<ReadableMode, ReadableEvent>> => ({
  body: createReadableAsyncEnumerable(factory),
  contentEncodings: [],
  contentLength,
  contentType:
    typeof contentType === "string"
      ? parseMediaTypeOrThrow(contentType)
      : contentType,
});

export const createStringHttpContent = (
  content: string,
  contentType: MediaType | string,
): HttpContent<AsyncEnumerableLike<ReadableMode, ReadableEvent>> => {
  contentType =
    typeof contentType === "string"
      ? parseMediaTypeOrThrow(contentType)
      : contentType;
  const charset = contentType.params["charset"] || "utf-8";
  const buffer = iconv.encode(content, charset);

  return createBufferHttpContent(buffer, contentType);
};

/** @ignore */
export const contentIsCompressible = (
  content: HttpContent<AsyncEnumerableLike<ReadableMode, ReadableEvent>>,
): boolean => {
  const contentType = content?.contentType;
  return (
    contentType !== undefined &&
    (compressible(mediaTypeToString(contentType)) || false)
  );
};
