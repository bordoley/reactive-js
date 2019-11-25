import { ObserverLike } from "@reactive-js/rx-observer";

import {
  create as observableCreate,
  ObservableLike,
} from "@reactive-js/rx-observable";

import { fromArray } from "./fromArray";

const onSubscribe = <T>(observer: ObserverLike<T>) => observer.complete();
export const empty = <T>(
  delay?: number,
  priority?: number,
): ObservableLike<T> =>
  delay !== undefined
    ? fromArray([], delay, priority)
    : observableCreate(onSubscribe, priority);
