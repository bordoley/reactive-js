import { Observable, ObservableLike, ObserverLike } from "@reactive-js/rx-core";

export const fromPromiseFactory = <T>(
  factory: () => Promise<T>,
  delay?: number,
  priority?: number,
): ObservableLike<T> => {
  const doSubscribe = async (observer: ObserverLike<T>) => {
    const result = await factory();
    observer.next(result);
    observer.complete();
  };

  const onSubscribe = (observer: ObserverLike<T>) => {
    doSubscribe(observer);
  };

  return Observable.create(onSubscribe, delay, priority);
};
