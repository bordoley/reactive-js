import { onDisposed } from "../disposable";
import { Function1, pipe } from "../functions";
import { ObservableLike } from "../observable";
import { Option, isSome, none } from "../option";
import { SchedulerLike } from "../scheduler";
import { subscribe } from "./subscribe";

/**
 * Returns a Promise that completes with the last value produced by
 * the source.
 *
 * @param scheduler The scheduler upon which to subscribe to the source.
 */
export const toPromise =
  <T>(scheduler: SchedulerLike): Function1<ObservableLike<T>, Promise<T>> =>
  observable =>
    new Promise((resolve, reject) => {
      let result: Option<T> = none;
      let hasResult = false;

      pipe(
        observable,
        subscribe(scheduler, next => {
          hasResult = true;
          result = next;
        }),
        onDisposed(err => {
          if (isSome(err)) {
            const { cause } = err;
            reject(cause);
          } else if (!hasResult) {
            reject(new Error("Observable completed without producing a value"));
          } else {
            resolve(result as T);
          }
        }),
      );
    });
