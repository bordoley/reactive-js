//import { ToPromise } from "../containers";
//import { Function1, Option, newInstance, none, pipe, isSome } from "../functions";
import { ObservableLike, ObservableLike_observableType } from "../rx";
//import { SchedulerLike } from "../scheduling";

export const getObservableType = (obs: ObservableLike): 0 | 1 | 2 =>
  obs[ObservableLike_observableType];

export const TContainerOf: ObservableLike<unknown> = undefined as any;

/**
 * Returns a Promise that completes with the last value produced by
 * the source.
 *
 * @param scheduler The scheduler upon which to subscribe to the source.
 */
/*
export const toPromise: ToPromise<ObservableLike, { scheduler: SchedulerLike}> =
  <T>(options?: Option<{ scheduler: SchedulerLike}>): Function1<ObservableLike<T>, Promise<T>> =>
  observable =>
    newInstance<
      Promise<T>,
      (
        resolve: (value: T | PromiseLike<T>) => void,
        reject: (ex: unknown) => void,
      ) => void
    >(Promise, (resolve, reject) => {
      let result: Option<T> = none;
      let hasResult = false;

      pipe(
        observable,
        onNotify(next => {
          hasResult = true;
          result = next;
        }),
        subscribe(scheduler),
        onDisposed(err => {
          if (isSome(err)) {
            const { cause } = err;
            reject(cause);
          } else if (!hasResult) {
            reject(
              newInstance(
                Error,
                "Observable completed without producing a value",
              ),
            );
          } else {
            resolve(result as T);
          }
        }),
      );
    });*/
