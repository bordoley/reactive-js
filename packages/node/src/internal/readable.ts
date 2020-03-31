import { Readable } from "stream";
import {
  createAsyncEnumerable,
  AsyncEnumerableLike,
  createAsyncEnumerator,
  AsyncEnumeratorLike,
} from "@reactive-js/async-enumerable";
import {
  AbstractDelegatingSubscriber,
  SafeSubscriberLike,
  toSafeSubscriber,
  lift,
  ObservableOperatorLike,
  SubscriberOperatorLike,
  using,
} from "@reactive-js/observable";
import {
  createDisposable,
  createDisposableWrapper,
} from "@reactive-js/disposable";
import { SchedulerLike } from "@reactive-js/scheduler";
import { pipe } from "@reactive-js/pipe";

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
): SubscriberOperatorLike<ReadableMode, ReadableEvent> => subscriber => {
  const readableDisposable = createDisposable(() => {
    readable.pause();
    readable.removeListener("data", onData);
    readable.removeListener("end", onEnd);
    readable.removeListener("error", onError);
  });
  const safeSubscriber = toSafeSubscriber(subscriber).add(readableDisposable);

  const onData = (chunk: Buffer) => {
    safeSubscriber.dispatch({ type: ReadableEventType.Data, chunk });
  };
  readable.on("data", onData);

  const onEnd = () => {
    safeSubscriber.dispatch({ type: ReadableEventType.End });
    readableDisposable.dispose();
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
): ObservableOperatorLike<ReadableMode, ReadableEvent> => observable =>
  using(
    _ => createDisposableWrapper(factory(), disposeReadable),
    readable => pipe(observable, operator(readable.value)),
  );

export const createReadableAsyncEnumerable = (
  factory: () => Readable,
): AsyncEnumerableLike<ReadableMode, ReadableEvent> =>
  createAsyncEnumerable(observableOperator(factory));
