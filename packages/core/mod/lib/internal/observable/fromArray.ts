import { Function1 } from "../../functions.ts";
import { YieldableLike } from "../scheduler/interfaces.ts";
import { ObservableLike, ObserverLike } from "./interfaces.ts";
import {
  createScheduledObservable,
  createDelayedScheduledObservable,
} from "./observable.ts";
import { dispose } from "../../disposable.ts";

/**
 * Creates an `ObservableLike` from the given array with a specified `delay` between emitted items.
 * An optional `startIndex` in the array maybe specified,
 *
 * @param options Config object that specifies an optional `delay` between emitted items and
 * an optional `startIndex` into the array.
 */
export const fromArray = <T>(
  options: {
    delay?: number;
    startIndex?: number;
  } = {},
): Function1<readonly T[], ObservableLike<T>> => values => {
  const delay = Math.max(options.delay ?? 0, 0);
  const valuesLength = values.length;
  const startIndex = Math.min(options.startIndex ?? 0, valuesLength);

  const factory = (observer: ObserverLike<T>) => {
    const yieldOptions = { delay };

    let index = startIndex;
    let observerIsDisposed = observer.isDisposed;

    return ($: YieldableLike) => {
      while (index < valuesLength && !observerIsDisposed) {
        observer.notify(values[index]);
        index++;

        observerIsDisposed = observer.isDisposed;
        if (index < valuesLength && !observerIsDisposed) {
          $.yield(yieldOptions);
        }
      }
      dispose(observer);
    };
  };

  return delay > 0
    ? createDelayedScheduledObservable(factory, delay)
    : createScheduledObservable(factory, true);
};
