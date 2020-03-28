import { Readable } from "stream";
import {
  createAsyncEnumerable,
  AsyncEnumerableLike,
} from "@reactive-js/async-enumerable";
import {
  createObservable,
  ObservableLike,
  onNotify,
  subscribe,
} from "@reactive-js/observable";
import { pipe } from "@reactive-js/pipe";

export const createReadableAsyncEnumerable = <TData>(
  factory: () => Readable,
  selector: (data: unknown) => TData,
): AsyncEnumerableLike<void, TData> => {
  const operator = (requests: ObservableLike<void>) =>
    createObservable<TData>(subscriber => {
      const readable = factory();

      subscriber
        .add(() => {
          readable.pause();
          readable.removeAllListeners();
          readable.destroy();
        })
        .add(
          pipe(
            requests,
            onNotify(_ => {
              if (readable.isPaused()) {
                readable.resume();
              }
            }),
            subscribe(subscriber),
          ),
        );

      readable.on("data", chunk => {
        readable.pause();
        const data = selector(chunk);
        subscriber.dispatch(data);
      });

      readable.on("close", () => {
        subscriber.dispose();
      });

      readable.on("end", () => {
        subscriber.dispose();
      });

      readable.on("error", cause => {
        subscriber.dispose({ cause });
      });

      readable.pause();
    });

  return createAsyncEnumerable(operator);
};
