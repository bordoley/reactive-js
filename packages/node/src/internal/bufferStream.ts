import iconv from "iconv-lite";
import { Readable } from "stream";
import {
  createAsyncEnumerable,
  createAsyncEnumerator,
  AsyncEnumeratorLike,
  StreamEvent,
  StreamEventType,
  StreamMode,
} from "@reactive-js/async-enumerable";
import { createDisposableValue } from "@reactive-js/disposable";
import {
  AbstractDelegatingSubscriber,
  SafeSubscriberLike,
  toSafeSubscriber,
  lift,
  ObservableOperator,
  SubscriberOperator,
  using,
  keep,
  fromArray,
  concat,
  never,
  await_,
  ObservableLike,
  createObservable,
  reduce,
  map,
  onNotify,
  assertSubscriberNotifyInContinuation,
} from "@reactive-js/observable";
import { pipe, Operator } from "@reactive-js/pipe";
import { SchedulerLike } from "@reactive-js/scheduler";
import { BufferStreamLike } from "./interfaces";

class ReadableStreamModeSubscriber extends AbstractDelegatingSubscriber<
  StreamMode,
  StreamEvent<Buffer>
> {
  constructor(
    delegate: SafeSubscriberLike<StreamEvent<Buffer>>,
    private readonly readable: Readable,
  ) {
    super(delegate);
    this.add(delegate);
  }

  notify(data: StreamMode) {
    assertSubscriberNotifyInContinuation(this);

    const readable = this.readable;
    switch (data) {
      case StreamMode.Pause:
        readable.pause();
        break;
      case StreamMode.Produce:
        readable.resume();
        break;
    }
  }
}

const subscriberOperator = (
  readable: Readable,
): SubscriberOperator<StreamMode, StreamEvent<Buffer>> => subscriber => {
  const safeSubscriber = toSafeSubscriber(subscriber).add(() => {
    readable.pause();
    readable.removeListener("data", onData);
    readable.removeListener("end", onEnd);
    readable.removeListener("error", onError);
  });

  const onData = (chunk: Buffer) => {
    safeSubscriber.dispatch({ type: StreamEventType.Next, chunk });
  };
  readable.on("data", onData);

  const onEnd = () => {
    safeSubscriber.dispatch({ type: StreamEventType.Complete });
    // Intentionally don't dispose the subscriber,
    // because it may be asynchronously consuming
    // the data.
  };
  readable.on("end", onEnd);

  const onError = (cause: any) => {
    safeSubscriber.dispose({ cause });
  };
  readable.on("error", onError);

  readable.pause();

  return new ReadableStreamModeSubscriber(safeSubscriber, readable);
};

const operator = (readable: Readable) =>
  lift(subscriberOperator(readable), false);

export const createBufferStreamAsyncEnumeratorFromReadable = (
  readable: Readable,
  scheduler: SchedulerLike,
  replayCount?: number,
): AsyncEnumeratorLike<StreamMode, StreamEvent<Buffer>> =>
  createAsyncEnumerator(operator(readable), scheduler, replayCount);

const disposeReadable = (readable: Readable) => {
  readable.destroy();
};

const observableOperator = (
  factory: () => Readable,
): ObservableOperator<StreamMode, StreamEvent<Buffer>> => observable =>
  using(
    _ => {
      const readable = factory();
      const disposable = createDisposableValue(readable, disposeReadable);

      const onEnd = () => {
        disposable.dispose();
      };
      readable.on("end", onEnd);

      return disposable;
    },
    readable => pipe(observable, operator(readable.value)),
  );

export const createBufferStreamFromReadable = (
  factory: () => Readable,
): BufferStreamLike =>
  createAsyncEnumerable(observableOperator(factory));

export const createBufferStreamFromBuffer = (
  chunk: Buffer,
): BufferStreamLike =>
  createAsyncEnumerable(obs =>
    concat(
      pipe(
        obs,
        keep(ev => ev === StreamMode.Produce),
        await_(_ =>
          fromArray<StreamEvent<Buffer>>([
            { type: StreamEventType.Next, chunk },
            { type: StreamEventType.Complete },
          ]),
        ),
      ),
      // Intentionally don't dispose the subscriber,
      // because it may be asynchronously consuming
      // the data.
      never(),
    ),
  );

export const stringToBufferStream = (
  charset: string,
): Operator<
  string,
  BufferStreamLike
> => str => {
  const buffer = iconv.encode(str, charset);
  return createBufferStreamFromBuffer(buffer);
};

export const entityTooLarge = Symbol("EntityTooLarge");
export const unsupportedEncoding = Symbol("unsupportedEncoding");
export const bufferStreamToString = (
  charset: string,
  limit = Number.MAX_SAFE_INTEGER,
): Operator<
  BufferStreamLike,
  ObservableLike<string>
> => bufferStream =>
  createObservable(subscriber => {
    let decoder: any;
    try {
      decoder = (iconv as any).getDecoder(charset);
    } catch (err) {
      if (!err.message.startsWith("Encoding not recognized: ")) throw err;
      throw unsupportedEncoding;
    }

    const enumerator = bufferStream.enumerateAsync(subscriber);
    subscriber.add(enumerator);

    const reducer = (
      {
        count,
        buffer,
      }: {
        count: number;
        buffer: string;
      },
      next: StreamEvent<Buffer>,
    ) => {
      const chunkSize =
        next.type === StreamEventType.Next ? next.chunk.length : 0;

      const newCount = count + chunkSize;
      if (newCount > limit) {
        throw entityTooLarge;
      }

      buffer +=
        next.type === StreamEventType.Next
          ? decoder.write(next.chunk)
          : (enumerator.dispose(), decoder.end() ?? "");

      return { count: newCount, buffer };
    };

    pipe(
      enumerator,
      reduce(reducer, () => ({ count: 0, buffer: "" })),
      map(({ buffer }) => buffer),
      onNotify(buffer => subscriber.dispatch(buffer)),
    ).subscribe(subscriber);

    enumerator.dispatch(StreamMode.Produce);
  });
