import { dispose } from "../../disposable";
import { Function1, Factory } from "../../functions";
import { YieldableLike } from "../scheduler/interfaces";
import { ObservableLike, ObserverLike } from "./interfaces";
import {
  createScheduledObservable,
  createDelayedScheduledObservable,
} from "./observable";
import { none } from "../../option";

/**
 * Creates an `ObservableLike` that emits no items and immediately disposes its subscription with an error.
 *
 * @param factory Factory function to generate the error to emit.
 * @param delay The delay before disposing the subscription.
 */
export const throws = <T>(
  { delay }: { delay: number } = { delay: 0 },
): Function1<Factory<unknown>, ObservableLike<T>> => errorFactory => {
  const factory = (observer: ObserverLike<T>) => (_: YieldableLike) => {
    let cause: unknown = none;
    try {
      cause = errorFactory();
    } catch(e) {
      cause = e;
    }
    dispose(observer, { cause });
  };

  return delay > 0
    ? createDelayedScheduledObservable(factory, delay)
    : createScheduledObservable(factory, true);
};
