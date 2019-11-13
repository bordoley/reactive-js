import {
  Observable,
  ObservableLike,
  SubscriberLike,
  Notifications,
} from "@rx-min/rx-core";

export const fromPromiseFactory = <T>(
  factory: () => Promise<T>,
): ObservableLike<T> =>
  Observable.create(async (subscriber: SubscriberLike<T>) => {
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
  });
