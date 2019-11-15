import {
  Notifications,
  Observable,
  ObservableLike,
} from "@reactive-js/rx-core";

export const throws = <T>(error: Error, delay: number = 0): ObservableLike<T> =>
  Observable.create((subscriber, _) => {
    subscriber.notify(Notifications.complete, error);
  }, delay);
