import {
  create as observableCreate,
  ObservableLike,
} from "@reactive-js/rx-observable";

export const ofValue = <T>(value: T, priority?: number): ObservableLike<T> =>
  observableCreate(observer => {
    observer.next(value);
    observer.complete();
  }, priority);
