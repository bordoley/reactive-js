import compressible from "compressible";
import { BrotliOptions, ZlibOptions } from "zlib";
import { Readable } from "stream";
import { AsyncEnumerableLike } from "@reactive-js/async-enumerable";
import {
  HttpContentEncoding,
  HttpContentLike,
  contentEncodings as allContentEncodings,
  HttpHeadersLike,
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
export const createHttpContentFromHeaders = <T>(
  headers: HttpHeadersLike,
  body: T,
): HttpContentLike<T> | undefined => {
  const contentEncodingString = headers["content-encoding"] || "";
  const contentEncodings = contentEncodingString
    .split(",")
    .map(x => x.trim())
    .filter(x =>
      allContentEncodings.includes(x as HttpContentEncoding),
    ) as readonly HttpContentEncoding[];

  const contentLengthHeader = headers["content-length"] || "0";
  const contentLength = ~~contentLengthHeader;

  const contentType = headers["content-type"] || "";
  const isUndefined = contentType === "" || contentLength === 0;

  return isUndefined
    ? undefined
    : {
        body,
        contentEncodings,
        contentLength,
        contentType,
      };
};

/** @ignore */
export const encodeHttpContent = (
  contentBody: HttpContentLike<
    AsyncEnumerableLike<ReadableMode, ReadableEvent>
  >,
  encoding: HttpContentEncoding,
  options: BrotliOptions | ZlibOptions,
): HttpContentLike<AsyncEnumerableLike<ReadableMode, ReadableEvent>> => {
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
  contentBody: HttpContentLike<
    AsyncEnumerableLike<ReadableMode, ReadableEvent>
  >,
  options: BrotliOptions | ZlibOptions,
): HttpContentLike<AsyncEnumerableLike<ReadableMode, ReadableEvent>> => {
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
  contentType: string,
): HttpContentLike<AsyncEnumerableLike<ReadableMode, ReadableEvent>> => ({
  body: createReadableAsyncEnumerableFromBuffer(chunk),
  contentEncodings: [],
  contentLength: chunk.length,
  contentType,
});

export const createReadableHttpContent = (
  factory: () => Readable,
  contentType: string,
  contentLength = -1,
): HttpContentLike<AsyncEnumerableLike<ReadableMode, ReadableEvent>> => ({
  body: createReadableAsyncEnumerable(factory),
  contentEncodings: [],
  contentLength,
  contentType,
});

export const createStringHttpContent = (
  content: string,
  contentType: string,
): HttpContentLike<AsyncEnumerableLike<ReadableMode, ReadableEvent>> =>
  createBufferHttpContent(Buffer.from(content), contentType);

/** @ignore */
export const contentIsCompressible = (
  content: HttpContentLike<AsyncEnumerableLike<ReadableMode, ReadableEvent>>,
): boolean => {
  const contentType = content?.contentType;
  return (contentType !== undefined && compressible(contentType)) || false;
};
