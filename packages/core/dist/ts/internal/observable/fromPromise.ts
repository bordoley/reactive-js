import { createObservable } from "./createObservable.ts";
import { ObservableLike, SafeSubscriberLike } from "./interfaces.ts";

/**
 * Converts a `Promise` to an `ObservableLike`. The provided promise factory
 * is invoked for each subscriber to the observable.
 *
 * @param factory Factory function to create a new `Promise` instance.
 */
export const fromPromise = <T>(
  factory: () => Promise<T>,
): ObservableLike<T> => {
  const onSubscribe = (subscriber: SafeSubscriberLike<T>) => {
    factory().then(
      next => {
        if (!subscriber.isDisposed) {
          subscriber.dispatch(next);
          subscriber.dispose();
        }
      },
      cause => {
        subscriber.dispose({ cause });
      },
    );
  };

  return createObservable(onSubscribe);
};
