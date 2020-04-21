import { Writable } from "stream";
import {
  createAsyncEnumerable,
  AsyncEnumerableLike,
  StreamEvent,
  StreamEventType,
  StreamMode,
} from "@reactive-js/async-enumerable";
import { createDisposableValue } from "@reactive-js/disposable";
import { createObservable, onNotify, subscribe } from "@reactive-js/observable";
import { pipe } from "@reactive-js/pipe";

const disposeWritable = (writable: Writable) => {
  writable.removeAllListeners();
  // Calling destory can result in onError being called
  // if we don't catch the error, it crashes the process.
  // This kind of sucks, but its the best we can do;
  writable.once("error", () => {});
  writable.once("close", () => {
    writable.removeAllListeners();
  });
  writable.destroy();
};

export const createBufferStreamSinkFromWritable = (
  factory: () => Writable,
  autoDispose = true,
): AsyncEnumerableLike<StreamEvent<Buffer>, StreamMode> =>
  createAsyncEnumerable(streamEvents =>
    createObservable(subscriber => {
      const writable = createDisposableValue(factory(), disposeWritable);
      subscriber.add(writable);

      const streamEventsSubscription = pipe(
        streamEvents,
        onNotify(ev => {
          switch (ev.type) {
            case StreamEventType.Next:
              if (!writable.value.write(ev.data)) {
                // Safe. We're in a continuation running on the subscriber
                subscriber.notify(StreamMode.Pause);
              }
              break;
            case StreamEventType.Complete:
              writable.value.end();
              break;
          }
        }),
        subscribe(subscriber),
      );

      writable.add(streamEventsSubscription);

      const onDrain = () => {
        subscriber.dispatch(StreamMode.Resume);
      };
      writable.value.on("drain", onDrain);

      const onError = (cause: unknown) => {
        subscriber.dispose({ cause });
      };
      writable.value.on("error", onError);

      const onFinish = () => {
        // By default we don't dispose the writable
        // because it could be a tranform.
        if (autoDispose) {
          subscriber.dispose();
        }
      };
      writable.value.on("finish", onFinish);

      subscriber.dispatch(StreamMode.Resume);
    }),
  );
