import { Observable, ObservableLike } from "@reactive-js/rx-core";

export const ofValue = <T>(value: T, priority?: number): ObservableLike<T> =>
  Observable.create(observer => {
    observer.next(value);
    observer.complete();
  }, priority);
