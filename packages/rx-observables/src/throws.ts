import { Observable, ObservableLike } from "@reactive-js/rx-core";

export const throws = <T>(
  error: Error,
  delay?: number,
  priority?: number,
): ObservableLike<T> =>
  Observable.create(
    subscriber => {
      subscriber.complete(error);
    },
    delay,
    priority,
  );
