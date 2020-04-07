import { IncomingMessage } from "http";
import {
  AsyncEnumerableLike,
  AsyncEnumeratorLike,
  AsyncEnumerableOperatorLike,
} from "@reactive-js/async-enumerable";
import { HttpContentEncoding } from "@reactive-js/http";
import {
  ReadableMode,
  ReadableEvent,
  createReadableAsyncEnumerator,
  createReadableAsyncEnumerableFromBuffer,
  transform,
  emptyReadableAsyncEnumerable,
  createReadableAsyncEnumerable,
} from "@reactive-js/node";
import { pipe } from "@reactive-js/pipe";
import { SchedulerLike } from "@reactive-js/scheduler";
import {
  createEncodingCompressTransform,
  createEncodingDecompressTransform,
} from "./httpContentEncoding";
import { BrotliOptions, ZlibOptions } from "zlib";
import { Readable } from "stream";

// FIXME: Should probably be in the HTTP package
/** @noInheritDoc */
export interface HttpContentBodyLike
  extends AsyncEnumerableLike<ReadableMode, ReadableEvent> {
  readonly contentEncodings: readonly HttpContentEncoding[];
  readonly contentLength: number;
  readonly contentType: string;
}

class IncomingMessageContentBodyImpl implements HttpContentBodyLike {
  constructor(private readonly msg: IncomingMessage) {}

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

  enumerateAsync(
    scheduler: SchedulerLike,
    replayCount?: number,
  ): AsyncEnumeratorLike<ReadableMode, ReadableEvent> {
    // FIXME: throw error if enumerated more than once
    const enumerator = createReadableAsyncEnumerator(
      this.msg,
      scheduler,
      replayCount,
    );

    return enumerator;
  }
}

/** @ignore */
export const createIncomingMessageContentBody = (msg: IncomingMessage) =>
  new IncomingMessageContentBodyImpl(msg);

class ContentBodyImpl implements HttpContentBodyLike {
  constructor(
    readonly delegate: AsyncEnumerableLike<ReadableMode, ReadableEvent>,
    readonly contentEncodings: readonly HttpContentEncoding[],
    readonly contentLength: number,
    readonly contentType: string,
  ) {}

  enumerateAsync(
    scheduler: SchedulerLike,
    replayCount?: number,
  ): AsyncEnumeratorLike<ReadableMode, ReadableEvent> {
    return this.delegate.enumerateAsync(scheduler, replayCount);
  }
}

/** @ignore */
const lift = (
  op: AsyncEnumerableOperatorLike<
    ReadableMode,
    ReadableEvent,
    ReadableMode,
    ReadableEvent
  >,
  options: {
    contentEncodings?: readonly HttpContentEncoding[];
    contentLength?: number;
    contentType?: string;
  } = {},
) => (contentBody: HttpContentBodyLike) => {
  const src =
    contentBody instanceof ContentBodyImpl ? contentBody.delegate : contentBody;
  const delegate = pipe(src, op);
  const {
    contentEncodings = [],
    contentLength = -1,
    contentType = contentBody.contentType,
  } = options;

  return new ContentBodyImpl(
    delegate,
    contentEncodings,
    contentLength,
    contentType,
  );
};

/** @ignore */
export const emptyContentBody: HttpContentBodyLike = new ContentBodyImpl(
  emptyReadableAsyncEnumerable,
  [],
  0,
  "",
);

/** @ignore */
export const encodeContentBody = (
  contentBody: HttpContentBodyLike,
  encoding: HttpContentEncoding,
  options: BrotliOptions | ZlibOptions,
): HttpContentBodyLike => {
  const existingEncodings: readonly HttpContentEncoding[] =
    (contentBody as any).contentEncodings || [];
  const contentEncodings = [...existingEncodings, encoding];
  const { contentLength, contentType } = contentBody;

  return contentLength !== 0
    ? pipe(
        contentBody,
        lift(transform(createEncodingCompressTransform(encoding, options)), {
          contentEncodings,
          contentType,
        }),
      )
    : contentBody;
};

/** @ignore */
export const decodeContentBody = (
  contentBody: HttpContentBodyLike,
  options: BrotliOptions | ZlibOptions,
) => {
  const { contentLength, contentEncodings } = contentBody;
  if (contentEncodings.length > 0 && contentLength !== 0) {
    const src =
      contentBody instanceof ContentBodyImpl
        ? contentBody.delegate
        : contentBody;
    const { contentType } = contentBody;

    const delegate = contentEncodings
      .map(encoding => createEncodingDecompressTransform(encoding, options))
      .reduceRight((acc, decoder) => pipe(acc, transform(decoder)), src);

    return new ContentBodyImpl(delegate, [], -1, contentType);
  } else {
    return contentBody;
  }
};

export const createBufferContentBody = (
  chunk: Buffer,
  contentType: string,
): HttpContentBodyLike =>
  new ContentBodyImpl(
    createReadableAsyncEnumerableFromBuffer(chunk),
    [],
    chunk.length,
    contentType,
  );

export const createReadableContentBody = (
  factory: () => Readable,
  contentType: string,
  contentLength = -1,
): HttpContentBodyLike =>
  new ContentBodyImpl(
    createReadableAsyncEnumerable(factory),
    [],
    contentLength,
    contentType,
  );

export const createStringContentBody = (
  content: string,
  contentType: string,
): HttpContentBodyLike =>
  createBufferContentBody(Buffer.from(content), contentType);
