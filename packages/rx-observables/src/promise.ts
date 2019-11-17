import {
  Observable,
  ObservableLike,
  SubscriberLike,
} from "@reactive-js/rx-core";

export const fromPromiseFactory = <T>(
  factory: () => Promise<T>,
  delay?: number,
  priority?: number,
): ObservableLike<T> => {
  const onSubscribe = async (subscriber: SubscriberLike<T>) => {
    if (!subscriber.subscription.isDisposed) {
      const result = await factory();
      subscriber.next(result);
      subscriber.complete();
    }
  };

  return Observable.create(onSubscribe, delay, priority);
};
