import { Observable, ObservableLike, ObserverLike } from "@reactive-js/rx-core";

export const throws = <T>(error: Error, priority?: number): ObservableLike<T> =>
  Observable.create((observer: ObserverLike<T>) => {
    observer.complete(error);
  }, priority);
