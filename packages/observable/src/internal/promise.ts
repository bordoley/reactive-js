import { ObservableLike, ObserverLike } from "@reactive-js/rx";
import { SchedulerLike } from "@reactive-js/scheduler";
import { connect } from "./connect";
import { createObservable } from "./create";
import { observe } from "./observe";
import { pipe } from "./pipe";

export const fromPromiseFactory = <T>(
  factory: () => Promise<T>,
): ObservableLike<T> => {
  const doSubscribe = async (observer: ObserverLike<T>) => {
    try {
      const result = await factory();
      observer.next(result);
      observer.complete();
    } catch (cause) {
      observer.complete({ cause });
    }
  };

  const onSubscribe = (observer: ObserverLike<T>) => {
    doSubscribe(observer);
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
