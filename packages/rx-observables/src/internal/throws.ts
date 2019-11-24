import {
  create as observableCreate,
  ObservableLike,
} from "@reactive-js/rx-observable";
import { ObserverLike } from "@reactive-js/rx-observer";

export const throws = <T>(error: Error, priority?: number): ObservableLike<T> =>
  observableCreate((observer: ObserverLike<T>) => {
    observer.complete(error);
  }, priority);
