import {
  ObservableLike,
  ObserverLike,
  connect,
  createObservable,
} from "@reactive-js/rx";
import { SchedulerLike } from "@reactive-js/scheduler";
import { observe } from "./observe";
import { pipe } from "./pipe";
import { createDisposable } from "@reactive-js/disposable";

export const fromPromiseFactory = <T>(
  factory: () => Promise<T>,
): ObservableLike<T> => {
  const onSubscribe = (observer: ObserverLike<T>) => {
    const disposable = createDisposable();

    factory().then(
      v => {
        console.log("dfkl")
        if (!disposable.isDisposed) {
          console.log("dosm");
          observer.next(v);
          observer.complete();  
        }
      },
      cause => {
        if (!disposable.isDisposed) {
          observer.complete({ cause });
        }
      },
    ).then(_ => disposable.dispose());

    return disposable;
  };

  return createObservable(onSubscribe);
};

export const toPromise = <T>(
  observable: ObservableLike<T>,
  scheduler: SchedulerLike,
): Promise<T> =>
  new Promise((resolve, reject) => {
    let result: T | undefined = undefined;
    const subscription = connect(
      pipe(
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
              reject(
                new Error("Observable completed without producing a value"),
              );
            } else {
              resolve(result);
            }
          },
        }),
      ),
      scheduler,
    );
  });
