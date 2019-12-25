import {
  ObservableLike,
  ObserverLike,
} from "./interfaces";
import { createObservable } from "./createObservable";
import { createDisposable } from "@reactive-js/disposable";

export const fromPromise = <T>(
  factory: () => Promise<T>,
): ObservableLike<T> => {
  const onSubscribe = (observer: ObserverLike<T>) => {
    const disposable = createDisposable();

    factory()
      .then(
        v => {
          if (!disposable.isDisposed) {
            observer.onNext(v);
            observer.onComplete();
          }
        },
        cause => {
          if (!disposable.isDisposed) {
            observer.onComplete({ cause });
          }
        },
      )
      .finally(() => disposable.dispose());

    return disposable;
  };

  return createObservable(onSubscribe);
};