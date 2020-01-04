import { createDisposable } from "@reactive-js/disposable";
import { createObservable } from "./createObservable";
import { ObservableLike, ObserverLike } from "./interfaces";

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
            observer.onDispose();
          }
        },
        cause => {
          if (!disposable.isDisposed) {
            observer.onDispose({ cause });
          }
        },
      )
      .finally(() => disposable.dispose());

    return disposable;
  };

  return createObservable(onSubscribe);
};
