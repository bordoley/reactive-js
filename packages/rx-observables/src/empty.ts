import { Observable, ObservableLike, ObserverLike } from "@reactive-js/rx-core";

const onSubscribe = <T>(observer: ObserverLike<T>) => observer.complete();
export const empty = <T>(priority?: number): ObservableLike<T> =>
  Observable.create(onSubscribe, priority);
