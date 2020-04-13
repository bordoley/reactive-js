import { Writable } from "stream";
import {
  createAsyncEnumerable,
  AsyncEnumerableLike,
  AsyncEnumeratorLike,
  createAsyncEnumerator,
} from "@reactive-js/async-enumerable";
import { createDisposableValue } from "@reactive-js/disposable";
import {
  AbstractDelegatingSubscriber,
  SafeSubscriberLike,
  ObservableOperator,
  toSafeSubscriber,
  lift,
  SubscriberOperator,
  using,
  assertSubscriberNotifyInContinuation,
} from "@reactive-js/observable";
import { pipe } from "@reactive-js/pipe";
import { SchedulerLike } from "@reactive-js/scheduler";
import { ReadableEvent, ReadableEventType, ReadableMode } from "./readable";

class WritableSubscriber extends AbstractDelegatingSubscriber<
  ReadableEvent,
  ReadableMode
> {
  constructor(
    delegate: SafeSubscriberLike<ReadableMode>,
    private readonly writable: Writable,
  ) {
    super(delegate);
    this.add(delegate.dispose);
  }

  notify(data: ReadableEvent) {
    assertSubscriberNotifyInContinuation(this);

    switch (data.type) {
      case ReadableEventType.Data: {
        if (!this.writable.write(data.chunk)) {
          this.delegate.notify(ReadableMode.Pause);
        }
        break;
      }
      case ReadableEventType.End: {
        this.writable.end();
        break;
      }
    }
  }
}

const subscriberOperator = (
  writable: Writable,
): SubscriberOperator<ReadableEvent, ReadableMode> => subscriber => {
  const safeSubscriber = toSafeSubscriber(subscriber).add(() => {
    writable.removeListener("drain", onDrain);
    writable.removeListener("error", onError);
    writable.removeListener("finish", onFinish);
  });

  const onDrain = () => {
    safeSubscriber.dispatch(ReadableMode.Resume);
  };
  writable.on("drain", onDrain);

  const onError = (cause: unknown) => {
    safeSubscriber.dispose({ cause });
  };
  writable.on("error", onError);

  const onFinish = () => {
    safeSubscriber.dispose();
  };
  writable.on("finish", onFinish);

  // Dispatch an initial ready event to enable sinking an AsyncEnumerator source
  safeSubscriber.dispatch(ReadableMode.Resume);

  return new WritableSubscriber(safeSubscriber, writable);
};

const operator = (writable: Writable) =>
  lift(subscriberOperator(writable), false);

export const createWritableAsyncEnumerator = (
  writable: Writable,
  scheduler: SchedulerLike,
  replayCount?: number,
): AsyncEnumeratorLike<ReadableEvent, ReadableMode> =>
  createAsyncEnumerator(operator(writable), scheduler, replayCount);

const disposeWritable = (writable: Writable) => {
  writable.destroy();
};

const observableOperator = (
  factory: () => Writable,
): ObservableOperator<ReadableEvent, ReadableMode> => observable =>
  using(
    _ => createDisposableValue(factory(), disposeWritable),
    writable => pipe(observable, operator(writable.value)),
  );

// FIXME: add variant that supports corking
export const createWritableAsyncEnumerable = (
  factory: () => Writable,
): AsyncEnumerableLike<ReadableEvent, ReadableMode> => {
  return createAsyncEnumerable(observableOperator(factory));
};
