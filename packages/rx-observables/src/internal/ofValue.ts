import {
  create as observableCreate,
  ObservableLike,
} from "@reactive-js/rx-observable";

import { fromArray } from "./fromArray";

export const ofValue = <T>(
  value: T,
  delay?: number,
  priority?: number,
): ObservableLike<T> =>
  delay !== undefined
    ? fromArray([value], delay, priority)
    : observableCreate(observer => {
        observer.next(value);
        observer.complete();
      }, priority);
