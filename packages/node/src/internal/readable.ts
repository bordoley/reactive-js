import iconv from "iconv-lite";
import { Readable } from "stream";
import {
  createAsyncEnumerable,
  AsyncEnumerableLike,
  createAsyncEnumerator,
  AsyncEnumeratorLike,
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
  mapTo,
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

export const enum ReadableMode {
  Resume = 1,
  Pause = 2,
}

export const enum ReadableEventType {
  Data = 1,
  End = 2,
}

export type ReadableEvent =
  | { type: ReadableEventType.Data; chunk: Buffer }
  | { type: ReadableEventType.End };

class ReadableSubscriber extends AbstractDelegatingSubscriber<
  ReadableMode,
  ReadableEvent
> {
  constructor(
    delegate: SafeSubscriberLike<ReadableEvent>,
    private readonly readable: Readable,
  ) {
    super(delegate);
    this.add(delegate);
  }

  notify(data: ReadableMode) {
    assertSubscriberNotifyInContinuation(this);

    const readable = this.readable;
    switch (data) {
      case ReadableMode.Pause:
        readable.pause();
        break;
      case ReadableMode.Resume:
        readable.resume();
        break;
    }
  }
}

const subscriberOperator = (
  readable: Readable,
): SubscriberOperator<ReadableMode, ReadableEvent> => subscriber => {
  const safeSubscriber = toSafeSubscriber(subscriber).add(() => {
    readable.pause();
    readable.removeListener("data", onData);
    readable.removeListener("end", onEnd);
    readable.removeListener("error", onError);
  });

  const onData = (chunk: Buffer) => {
    safeSubscriber.dispatch({ type: ReadableEventType.Data, chunk });
  };
  readable.on("data", onData);

  const onEnd = () => {
    safeSubscriber.dispatch({ type: ReadableEventType.End });
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

  return new ReadableSubscriber(safeSubscriber, readable);
};

const operator = (readable: Readable) =>
  lift(subscriberOperator(readable), false);

export const createReadableAsyncEnumerator = (
  readable: Readable,
  scheduler: SchedulerLike,
  replayCount?: number,
): AsyncEnumeratorLike<ReadableMode, ReadableEvent> =>
  createAsyncEnumerator(operator(readable), scheduler, replayCount);

const disposeReadable = (readable: Readable) => {
  readable.destroy();
};

const observableOperator = (
  factory: () => Readable,
): ObservableOperator<ReadableMode, ReadableEvent> => observable =>
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

export const createReadableAsyncEnumerable = (
  factory: () => Readable,
): AsyncEnumerableLike<ReadableMode, ReadableEvent> =>
  createAsyncEnumerable(observableOperator(factory));

export const emptyReadableAsyncEnumerable = createAsyncEnumerable<
  ReadableMode,
  ReadableEvent
>(mapTo({ type: ReadableEventType.End }));

export const createReadableAsyncEnumerableFromBuffer = (
  chunk: Buffer,
): AsyncEnumerableLike<ReadableMode, ReadableEvent> =>
  createAsyncEnumerable(obs =>
    concat(
      pipe(
        obs,
        keep(ev => ev === ReadableMode.Resume),
        await_(_ =>
          fromArray<ReadableEvent>([
            { type: ReadableEventType.Data, chunk },
            { type: ReadableEventType.End },
          ]),
        ),
      ),
      // Intentionally don't dispose the subscriber,
      // because it may be asynchronously consuming
      // the data.
      never(),
    ),
  );

export const stringToReadableAsyncEnumerable = (
  charset: string,
): Operator<
  string,
  AsyncEnumerableLike<ReadableMode, ReadableEvent>
> => str => {
  const buffer = iconv.encode(str, charset);
  return createReadableAsyncEnumerableFromBuffer(buffer);
};

export const entityTooLarge = Symbol("EntityTooLarge");
export const unsupportedEncoding = Symbol("unsupportedEncoding");
export const readableAsyncEnumerableToString = (
  charset: string,
  limit = Number.MAX_SAFE_INTEGER,
): Operator<
  AsyncEnumerableLike<ReadableMode, ReadableEvent>,
  ObservableLike<string>
> => readable =>
  createObservable(subscriber => {
    let decoder: any;
    try {
      decoder = (iconv as any).getDecoder(charset);
    } catch (err) {
      if (!err.message.startsWith("Encoding not recognized: ")) throw err;
      throw unsupportedEncoding;
    }

    const enumerator = readable.enumerateAsync(subscriber);
    subscriber.add(enumerator);

    const reducer = (
      {
        count,
        buffer,
      }: {
        count: number;
        buffer: string;
      },
      next: ReadableEvent,
    ) => {
      const chunkSize =
        next.type === ReadableEventType.Data ? next.chunk.length : 0;

      const newCount = count + chunkSize;
      if (newCount > limit) {
        throw entityTooLarge;
      }

      buffer +=
        next.type === ReadableEventType.Data
          ? decoder.write(next.chunk)
          : (enumerator.dispose(), decoder.end() || "");

      return { count: newCount, buffer };
    };

    pipe(
      enumerator,
      reduce(reducer, () => ({ count: 0, buffer: "" })),
      map(({ buffer }) => buffer),
      onNotify(buffer => subscriber.dispatch(buffer)),
    ).subscribe(subscriber);

    enumerator.dispatch(ReadableMode.Resume);
  });
