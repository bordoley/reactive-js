import { IncomingMessage } from "http";
import { Transform } from "stream";
import {
  createBrotliCompress,
  createDeflate,
  createGzip,
  createBrotliDecompress,
  createInflate,
  createGunzip,
} from "zlib";
import {
  AsyncEnumeratorLike,
  AsyncEnumerableLike,
} from "@reactive-js/async-enumerable";
import { DisposableWrapperLike } from "@reactive-js/disposable";
import { pipe } from "@reactive-js/pipe";
import { SchedulerLike } from "@reactive-js/scheduler";
import { HttpContentBodyLike, HttpContentEncoding } from "./http";
import {
  ReadableMode,
  ReadableEvent,
  createReadableAsyncEnumerator,
  createReadableAsyncEnumerableFromBuffer,
} from "./readable";
import { transform } from "./transform";

const createEncodingCompressTransform = (
  encoding: HttpContentEncoding,
) => (): Transform => {
  switch (encoding) {
    case HttpContentEncoding.Brotli:
      return createBrotliCompress();
    case HttpContentEncoding.Deflate:
      return createDeflate();
    case HttpContentEncoding.GZip:
      return createGzip();
    case HttpContentEncoding.Compress:
    case HttpContentEncoding.Identity:
      throw new Error("unsupported encoding");
  }
};

/** @ignore */
export const supportedEncodings = [
  HttpContentEncoding.Brotli,
  HttpContentEncoding.Deflate,
  HttpContentEncoding.GZip,
];

const createEncodingDecompressTransform = (
  encoding: HttpContentEncoding,
) => (): Transform => {
  switch (encoding) {
    case HttpContentEncoding.Brotli:
      return createBrotliDecompress();
    case HttpContentEncoding.Deflate:
      return createInflate();
    case HttpContentEncoding.GZip:
      return createGunzip();
    case HttpContentEncoding.Compress:
    case HttpContentEncoding.Identity:
      throw new Error("unsupported encoding");
  }
};

class TransformContentBodyImpl implements HttpContentBodyLike {
  constructor(
    private readonly delegate: HttpContentBodyLike,
    readonly contentEncodings: readonly HttpContentEncoding[],
    private readonly transforms: readonly (() => Transform)[],
  ) {}

  get contentLength(): number {
    return -1;
  }

  get contentType(): string {
    return this.delegate.contentType;
  }

  enumerateAsync(
    scheduler: SchedulerLike,
    replayCount?: number,
  ): AsyncEnumeratorLike<ReadableMode, ReadableEvent> {
    return this.transforms
      .reduce(
        (acc: AsyncEnumerableLike<ReadableMode, ReadableEvent>, next) =>
          pipe(acc, transform(next)),
        this.delegate,
      )
      .enumerateAsync(scheduler, replayCount);
  }
}

/** @ignore */
export const encodeContentBody = (
  ...encodings: readonly HttpContentEncoding[]
) => (contentBody: HttpContentBodyLike) => {
  const contentEncodings = [...contentBody.contentEncodings, ...encodings];
  const transforms = contentEncodings.map(createEncodingCompressTransform);
  return new TransformContentBodyImpl(
    contentBody,
    contentEncodings,
    transforms,
  );
};

/** @ignore */
export const decodeContentBody = (contentBody: HttpContentBodyLike) => {
  const contentEncodings: HttpContentEncoding[] = [];
  const transforms = contentEncodings.map(createEncodingDecompressTransform);
  return new TransformContentBodyImpl(
    contentBody,
    contentEncodings,
    transforms,
  );
};

class BufferContentBodyImpl implements HttpContentBodyLike {
  constructor(
    private readonly chunk: Buffer,
    readonly contentEncodings: readonly HttpContentEncoding[],
    readonly contentType: string,
  ) {}

  get contentLength(): number {
    return this.chunk.length;
  }

  enumerateAsync(
    scheduler: SchedulerLike,
    replayCount?: number,
  ): AsyncEnumeratorLike<ReadableMode, ReadableEvent> {
    return createReadableAsyncEnumerableFromBuffer(this.chunk).enumerateAsync(
      scheduler,
      replayCount,
    );
  }
}

/** @ignore */
export const createBufferContentBody = (
  chunk: Buffer,
  contentType: string,
  contentEncodings: readonly HttpContentEncoding[] = [],
) => new BufferContentBodyImpl(chunk, contentEncodings, contentType);

/** @ignore */
class IncomingMessageContentBodyImpl implements HttpContentBodyLike {
  constructor(private readonly msg: DisposableWrapperLike<IncomingMessage>) {}

  get contentEncodings(): readonly HttpContentEncoding[] {
    //return this.msg.headers["content-encoding"] || "";
    return [];
  }

  get contentLength(): number {
    try {
      const contentLength = this.msg.value.headers["content-length"];
      return contentLength !== undefined ? Number.parseInt(contentLength) : -1;
    } catch (_) {
      return -1;
    }
  }

  get contentType(): string {
    return this.msg.value.headers["content-type"] || "";
  }

  enumerateAsync(
    scheduler: SchedulerLike,
    replayCount?: number,
  ): AsyncEnumeratorLike<ReadableMode, ReadableEvent> {
    const enumerator = createReadableAsyncEnumerator(
      this.msg.value,
      scheduler,
      replayCount,
    );
    this.msg.add(enumerator);
    return enumerator;
  }
}

/** @ignore */
export const createIncomingMessageContentBody = (
  msg: DisposableWrapperLike<IncomingMessage>,
) => new IncomingMessageContentBodyImpl(msg);
