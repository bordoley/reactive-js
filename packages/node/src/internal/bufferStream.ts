import iconv from "iconv-lite";
import { Readable } from "stream";
import {
  createAsyncEnumerable,
  createAsyncEnumerator,
  AsyncEnumeratorLike,
  StreamEvent,
  StreamEventType,
  StreamMode,
  ofValueStream,
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

  const onData = (data: Buffer) => {
    safeSubscriber.dispatch({ type: StreamEventType.Next, data });
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
): BufferStreamLike => createAsyncEnumerable(observableOperator(factory));

// FIXME: Maybe remove this
export const stringToBufferStream = (
  charset: string,
): Operator<string, BufferStreamLike> => str => {
  const buffer = iconv.encode(str, charset);
  return ofValueStream(buffer);
};
