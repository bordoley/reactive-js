import { none, Option, isSome } from "../../option";
import { pipe, Operator } from "../../pipe";
import { SchedulerLike } from "../../scheduler";
import { ObservableLike } from "./interfaces";
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
): Operator<ObservableLike<T>, Promise<T>> => observable =>
  new Promise((resolve, reject) => {
    let result: Option<T> = none;
    let hasResult = false;

    pipe(
      observable,
      onNotify(next => {
        hasResult = true;
        result = next;
      }),
      subscribe(scheduler),
    ).add(err => {
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
