import { createObservable } from "./createObservable";
import { ObservableLike, SubscriberLike } from "./interfaces";

export const fromPromise = <T>(
  factory: () => Promise<T>,
): ObservableLike<T> => {
  const onSubscribe = (subscriber: SubscriberLike<T>) => {
    factory().then(
      next => {
        if (!subscriber.isDisposed) {
          subscriber.notify(next);
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
