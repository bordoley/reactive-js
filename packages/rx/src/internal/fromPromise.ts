import { createDisposable } from "@reactive-js/disposable";
import { createObservable } from "./createObservable";
import { ObservableLike } from "./interfaces";

export const fromPromise = <T>(
  factory: () => Promise<T>,
): ObservableLike<T> => {
  const onSubscribe = (notify: (next: T) => void) => {
    const disposable = createDisposable();

    factory()
      .then(
        next => {
          if (!disposable.isDisposed) {
            notify(next);
            disposable.dispose();
          }
        },
        cause => {
          if (!disposable.isDisposed) {
            disposable.dispose({ cause });
          }
        },
      );

    return disposable;
  };

  return createObservable(onSubscribe);
};
