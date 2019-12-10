import {
  ObservableLike,
  ObserverLike,
  connect,
  createObservable,
} from "@reactive-js/rx";
import { SchedulerLike } from "@reactive-js/scheduler";
import { observe } from "./observe";
import { pipe, OperatorLike } from "@reactive-js/pipe";
import { createDisposable } from "@reactive-js/disposable";

export const fromPromiseFactory = <T>(
  factory: () => Promise<T>,
): ObservableLike<T> => {
  const onSubscribe = (observer: ObserverLike<T>) => {
    const disposable = createDisposable();

    factory()
      .then(
        v => {
          if (!disposable.isDisposed) {
            observer.next(v);
            observer.complete();
          }
        },
        cause => {
          if (!disposable.isDisposed) {
            observer.complete({ cause });
          }
        },
      )
      .finally(() => disposable.dispose());

    return disposable;
  };

  return createObservable(onSubscribe);
};

export const toPromise = <T>(
  scheduler: SchedulerLike,
): OperatorLike<ObservableLike<T>, Promise<T>> => observable =>
  new Promise((resolve, reject) => {
    let result: T | undefined = undefined;
    const subscription = pipe(
      observable,
      observe({
        next: v => {
          result = v;
        },
        complete: err => {
          subscription.dispose();
          if (err !== undefined) {
            const { cause } = err;
            reject(cause);
          } else if (result === undefined) {
            reject(new Error("Observable completed without producing a value"));
          } else {
            resolve(result);
          }
        },
      }),
      connect(scheduler),
    );
  });
