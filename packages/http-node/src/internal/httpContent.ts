import compressible from "compressible";
import iconv from "iconv-lite";
import { BrotliOptions, ZlibOptions } from "zlib";
import { Readable } from "stream";
import {
  AsyncEnumerableLike,
  StreamEvent,
  StreamMode,
  ofValueStream,
} from "@reactive-js/async-enumerable";
import {
  HttpContentEncoding,
  HttpContent,
  MediaType,
  mediaTypeToString,
  parseMediaTypeOrThrow,
} from "@reactive-js/http";
import {
  transform,
  createBufferStreamFromReadable,
} from "@reactive-js/node";
import { isSome } from "@reactive-js/option";
import { pipe } from "@reactive-js/pipe";
import {
  createEncodingCompressTransform,
  createEncodingDecompressTransform,
} from "./httpContentEncoding";

/** @ignore */
export const encodeHttpContent = (
  contentBody: HttpContent<
    AsyncEnumerableLike<StreamMode, StreamEvent<Buffer>>
  >,
  encoding: HttpContentEncoding,
  options: BrotliOptions | ZlibOptions,
): HttpContent<AsyncEnumerableLike<StreamMode, StreamEvent<Buffer>>> => {
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
    AsyncEnumerableLike<StreamMode, StreamEvent<Buffer>>
  >,
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
): HttpContent<AsyncEnumerableLike<StreamMode, StreamEvent<Buffer>>> => ({
  body: ofValueStream(chunk),
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
): HttpContent<AsyncEnumerableLike<StreamMode, StreamEvent<Buffer>>> => ({
  body: createBufferStreamFromReadable(factory),
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
): HttpContent<AsyncEnumerableLike<StreamMode, StreamEvent<Buffer>>> => {
  contentType =
    typeof contentType === "string"
      ? parseMediaTypeOrThrow(contentType)
      : contentType;
  const charset = contentType.params["charset"] ?? "utf-8";
  const buffer = iconv.encode(content, charset);

  // FIXME: update the contentType if none is specfied in the content params provided.

  return createBufferHttpContent(buffer, contentType);
};

/** @ignore */
export const contentIsCompressible = (
  content: HttpContent<AsyncEnumerableLike<StreamMode, StreamEvent<Buffer>>>,
): boolean => {
  const contentType = content?.contentType;
  // FIXME: A little sketchy
  return (
    isSome(contentType) &&
    (compressible(mediaTypeToString(contentType)) || false)
  );
};
