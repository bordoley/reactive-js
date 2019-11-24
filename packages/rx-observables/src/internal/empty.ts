import { ObserverLike } from "@reactive-js/rx-observer";

import {
  create as observableCreate,
  ObservableLike,
} from "@reactive-js/rx-observable";

const onSubscribe = <T>(observer: ObserverLike<T>) => observer.complete();
export const empty = <T>(priority?: number): ObservableLike<T> =>
  observableCreate(onSubscribe, priority);
