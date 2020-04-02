import { IncomingMessage } from "http";
import { Transform } from "stream";
import { createBrotliCompress, createDeflate, createGzip } from "zlib";
import {
  AsyncEnumeratorLike,
  createAsyncEnumerator,
  AsyncEnumerableLike,
} from "@reactive-js/async-enumerable";
import { DisposableWrapperLike } from "@reactive-js/disposable";
import { map, takeFirst, endWith } from "@reactive-js/observable";
import { pipe } from "@reactive-js/pipe";
import { SchedulerLike } from "@reactive-js/scheduler";
import { HttpContentBodyLike, HttpContentEncoding } from "./http";
import {
  ReadableMode,
  ReadableEvent,
  ReadableEventType,
  createReadableAsyncEnumerator,
} from "./readable";
import { transform } from "./transform";

const createEncodingTransform = (
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

class EncodedContentBodyImpl implements HttpContentBodyLike {
  readonly contentEncodings: readonly HttpContentEncoding[];

  constructor(
    private readonly delegate: HttpContentBodyLike,
    private readonly encodings: readonly HttpContentEncoding[],
  ) {
    this.contentEncodings = [...delegate.contentEncodings, ...encodings];
  }

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
    return this.encodings
      .reduce(
        (acc: AsyncEnumerableLike<ReadableMode, ReadableEvent>, encoding) =>
          pipe(acc, transform(createEncodingTransform(encoding))),
        this.delegate,
      )
      .enumerateAsync(scheduler, replayCount);
  }
}

/** @ignore */
export const encode = (...encodings: readonly HttpContentEncoding[]) => (
  contentBody: HttpContentBodyLike,
) => new EncodedContentBodyImpl(contentBody, encodings);

/** @ignore */
export const decode = (_contentBody: HttpContentBodyLike) => {};

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
    return createAsyncEnumerator(
      obs =>
        pipe(
          obs,
          map(_ => ({ type: ReadableEventType.Data, chunk: this.chunk })),
          takeFirst(),
          endWith<ReadableEvent>({ type: ReadableEventType.End }),
        ),
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
  constructor(
    private readonly msg: DisposableWrapperLike<IncomingMessage>,
  ) {}

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
