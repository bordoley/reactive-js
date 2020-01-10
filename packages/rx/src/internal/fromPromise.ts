import { createObservable } from "./createObservable";
import { ObservableLike, SafeSubscriberLike } from "./interfaces";

export const fromPromise = <T>(
  factory: () => Promise<T>,
): ObservableLike<T> => {
  const onSubscribe = (subscriber: SafeSubscriberLike<T>) => {
    factory().then(
      next => {
        if (!subscriber.isDisposed) {
          subscriber.notifySafe(next);
          subscriber.dispose();
        }
      },
      cause => {
        if (!subscriber.isDisposed) {
          subscriber.dispose({ cause });
        }
      },
    );
  };

  return createObservable(onSubscribe);
};
