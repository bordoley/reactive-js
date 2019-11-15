import {
  Observable,
  ObservableLike,
  SubscriberLike,
  Notifications,
} from "@reactive-js/rx-core";

export const fromPromiseFactory = <T>(
  factory: () => Promise<T>,
  delay: number = 0,
): ObservableLike<T> => {
  const onSubscribe = async (subscriber: SubscriberLike<T>) => {
    if (!subscriber.subscription.isDisposed) {
      const result = await factory();
      subscriber.notify(Notifications.next, result);
      subscriber.notify(Notifications.complete);
    }
  };

  return Observable.create(onSubscribe, delay);
};
