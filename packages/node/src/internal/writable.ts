import { Writable } from "stream";
import {
  createAsyncEnumerable,
  AsyncEnumerableLike,
} from "@reactive-js/async-enumerable";
import {
  ObservableLike,
  createObservable,
  subscribe,
  onNotify,
} from "@reactive-js/observable";
import { pipe } from "@reactive-js/pipe";

// FIXME: add variant that supports corking

const operator = <TData>(factory: () => Writable) => (
  requests: ObservableLike<TData>,
) =>
  createObservable<void>(subscriber => {
    const writable = factory();

    const onDrain = () => {
      subscriber.dispatch();
    };
    writable.on("drain", onDrain);

    const onError = (cause: unknown) => {
      subscriber.dispose({ cause });
    };
    writable.on("error", onError);

    const requestSubscription = pipe(
      requests,
      onNotify(data => {
        if (writable.write(data)) {
          subscriber.dispatch();
        }
      }),
      subscribe(subscriber),
    );

    subscriber.add(requestSubscription).add(() => {
      writable.end();
      writable.removeListener("error", onDrain);
      writable.removeListener("error", onError);
      writable.destroy();
    });

    // Dispatch an initial ready event to enable sinking an AsyncEnumerator source
    subscriber.dispatch();
  });

export const createWritableAsyncEnumerable = <TData>(
  factory: () => Writable,
): AsyncEnumerableLike<TData, void> => {
  return createAsyncEnumerable(operator(factory));
};
