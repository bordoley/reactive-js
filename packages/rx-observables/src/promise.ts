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
  const callback = async (subscriber: SubscriberLike<T>) => {
    try {
      const result = await factory();
      if (!subscriber.subscription.isDisposed) {
        subscriber.notify(Notifications.next, result);
        subscriber.notify(Notifications.complete);
      }
    } catch (error) {
      if (!subscriber.subscription.isDisposed) {
        subscriber.notify(Notifications.complete, error);
      }
    }
  };

  return Observable.create(
    (subscriber: SubscriberLike<T>, _: () => boolean) => {
      callback(subscriber);
    },
    delay,
  );
};
