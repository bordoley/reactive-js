import { ObserverLike, Observable, ObservableLike } from "@reactive-js/rx-core";

export const throws = <T>(
  error: Error,
  delay?: number,
  priority?: number,
): ObservableLike<T> =>
  Observable.create(
    (observer: ObserverLike<T>) => {
      observer.complete(error);
    },
    delay,
    priority,
  );
