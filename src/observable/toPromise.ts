import { addTeardown } from "../disposable";
import { pipe, Function1 } from "../functions";
import { ObservableLike } from "../observable";
import { none, Option, isSome } from "../option";
import { SchedulerLike } from "../scheduler";
import { onNotify } from "./onNotify";
import { subscribe } from "./subscribe";

/**
 * Returns a Promise that completes with the last value produced by
 * the source.
 *
 * @param scheduler The scheduler upon which to subscribe to the source.
 */
export const toPromise = <T>(
  scheduler: SchedulerLike,
): Function1<ObservableLike<T>, Promise<T>> => observable =>
  new Promise((resolve, reject) => {
    let result: Option<T> = none;
    let hasResult = false;

    const subscription = pipe(
      observable,
      onNotify(next => {
        hasResult = true;
        result = next;
      }),
      subscribe(scheduler),
    );

    addTeardown(subscription, err => {
      if (isSome(err)) {
        const { cause } = err;
        reject(cause);
      } else if (!hasResult) {
        reject(new Error("Observable completed without producing a value"));
      } else {
        resolve(result as T);
      }
    });
  });
