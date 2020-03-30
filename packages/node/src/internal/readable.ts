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

const operator = <TData>(
  factory: () => Readable,
  selector: (data: unknown) => TData,
) => (requests: ObservableLike<void>) =>
  createObservable<TData>(subscriber => {
    const readable = factory();

    const onData = (chunk: any) => {
      readable.pause();
      const data = selector(chunk);
      subscriber.dispatch(data);
    };
    readable.on("data", onData);

    const onEnd = () => {
      subscriber.dispose();
    };
    readable.on("end", onEnd);

    const onError = (cause: any) => {
      subscriber.dispose({ cause });
    };
    readable.on("error", onError);

    subscriber
      .add(() => {
        readable.pause();
        readable.removeListener("data", onData);
        readable.removeListener("end", onEnd);
        readable.removeListener("error", onError);
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

    readable.pause();
  });

export const createReadableAsyncEnumerable = <TData>(
  factory: () => Readable,
  selector: (data: unknown) => TData,
): AsyncEnumerableLike<void, TData> =>
  createAsyncEnumerable(operator(factory, selector));
