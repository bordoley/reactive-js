import { ObserverLike } from "@reactive-js/rx-observer";

import {
  connect,
  create,
  ObservableLike,
  observe,
  pipe,
} from "@reactive-js/rx-observable";

import { SchedulerLike } from "@reactive-js/scheduler";

export const fromPromiseFactory = <T>(
  factory: () => Promise<T>,
  priority?: number,
): ObservableLike<T> => {
  const doSubscribe = async (observer: ObserverLike<T>) => {
    try {
      const result = await factory();
      observer.next(result);
      observer.complete();
    } catch (error) {
      observer.complete(error);
    }
  };

  const onSubscribe = (observer: ObserverLike<T>) => {
    doSubscribe(observer);
  };

  return create(onSubscribe, priority);
};

export const toPromise = <T>(
  observable: ObservableLike<T>,
  scheduler?: SchedulerLike,
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
              reject(err);
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
