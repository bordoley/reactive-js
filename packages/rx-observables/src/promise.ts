import {
  Observable,
  ObservableLike,
  observe,
  ObserverLike,
} from "@reactive-js/rx-core";
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

  return Observable.create(onSubscribe, priority);
};

export const toPromise = <T>(
  observable: ObservableLike<T>,
  scheduler?: SchedulerLike,
) =>
  new Promise((resolve, reject) => {
    let result: T | undefined = undefined;
    const subscription = Observable.connect(
      Observable.lift(
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
