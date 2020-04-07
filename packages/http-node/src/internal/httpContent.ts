import { IncomingMessage } from "http";
import { BrotliOptions, ZlibOptions } from "zlib";
import { Readable } from "stream";
import { AsyncEnumerableLike } from "@reactive-js/async-enumerable";
import { HttpContentEncoding, HttpContentLike } from "@reactive-js/http";
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

class IncomingMessageHttpContentImpl
  implements HttpContentLike<AsyncEnumerableLike<ReadableMode, ReadableEvent>> {
  readonly body: AsyncEnumerableLike<ReadableMode, ReadableEvent>;

  constructor(private readonly msg: IncomingMessage) {
    this.body = createReadableAsyncEnumerable(() => this.msg);
  }

  get contentEncodings(): readonly HttpContentEncoding[] {
    // FIXME: use the node content encoding library here.
    //return this.msg.headers["content-encoding"] || "";
    return [];
  }

  get contentLength(): number {
    try {
      const contentLength = this.msg.headers["content-length"];
      return contentLength !== undefined ? Number.parseInt(contentLength) : -1;
    } catch (_) {
      return -1;
    }
  }

  get contentType(): string {
    return this.msg.headers["content-type"] || "";
  }
}

/** @ignore */
export const createIncomingMessageHttpContent = (msg: IncomingMessage) =>
  new IncomingMessageHttpContentImpl(msg);

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
