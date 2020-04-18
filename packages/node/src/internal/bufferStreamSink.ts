import { Writable } from "stream";
import {
  createAsyncEnumerable,
  AsyncEnumerableLike,
  AsyncEnumeratorLike,
  createAsyncEnumerator,
  StreamEvent,
  StreamEventType,
  StreamMode,
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

class WritableStreamEventSubscriber extends AbstractDelegatingSubscriber<
  StreamEvent<Buffer>,
  StreamMode
> {
  constructor(
    delegate: SafeSubscriberLike<StreamMode>,
    private readonly writable: Writable,
  ) {
    super(delegate);
    this.add(delegate.dispose);
  }

  notify(ev: StreamEvent<Buffer>) {
    assertSubscriberNotifyInContinuation(this);

    switch (ev.type) {
      case StreamEventType.Next: {
        if (!this.writable.write(ev.data)) {
          this.delegate.notify(StreamMode.Pause);
        }
        break;
      }
      case StreamEventType.Complete: {
        this.writable.end();
        break;
      }
    }
  }
}

const subscriberOperator = (
  writable: Writable,
): SubscriberOperator<StreamEvent<Buffer>, StreamMode> => subscriber => {
  const safeSubscriber = toSafeSubscriber(subscriber).add(() => {
    writable.removeListener("drain", onDrain);
    writable.removeListener("error", onError);
    writable.removeListener("finish", onFinish);
  });

  const onDrain = () => {
    safeSubscriber.dispatch(StreamMode.Produce);
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
  safeSubscriber.dispatch(StreamMode.Produce);

  return new WritableStreamEventSubscriber(safeSubscriber, writable);
};

const operator = (writable: Writable) =>
  lift(subscriberOperator(writable), false);

export const createBufferStreamSinkAsyncEnumeratorFromWritable = (
  writable: Writable,
  scheduler: SchedulerLike,
  replayCount?: number,
): AsyncEnumeratorLike<StreamEvent<Buffer>, StreamMode> =>
  createAsyncEnumerator(operator(writable), scheduler, replayCount);

const disposeWritable = (writable: Writable) => {
  writable.destroy();
};

const observableOperator = (
  factory: () => Writable,
): ObservableOperator<StreamEvent<Buffer>, StreamMode> => observable =>
  using(
    _ => createDisposableValue(factory(), disposeWritable),
    writable => pipe(observable, operator(writable.value)),
  );

// FIXME: add variant that supports corking
export const createBufferStreamSinkFromWritable = (
  factory: () => Writable,
): AsyncEnumerableLike<StreamEvent<Buffer>, StreamMode> => {
  return createAsyncEnumerable(observableOperator(factory));
};
