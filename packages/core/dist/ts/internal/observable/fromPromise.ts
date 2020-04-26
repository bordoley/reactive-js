import { createObservable } from "./createObservable.ts";
import { ObservableLike, DispatcherLike } from "./interfaces.ts";
import { DisposableLike } from "../../disposable.ts";

/**
 * Converts a `Promise` to an `ObservableLike`. The provided promise factory
 * is invoked for each subscriber to the observable.
 *
 * @param factory Factory function to create a new `Promise` instance.
 */
export const fromPromise = <T>(
  factory: (disposable: DisposableLike) => Promise<T>,
): ObservableLike<T> => {
  const onSubscribe = (dispatcher: DispatcherLike<T>) => {
    factory(dispatcher).then(
      next => {
        if (!dispatcher.isDisposed) {
          dispatcher.dispatch(next);
          dispatcher.dispose();
        }
      },
      cause => {
        dispatcher.dispose({ cause });
      },
    );
  };

  return createObservable(onSubscribe);
};
