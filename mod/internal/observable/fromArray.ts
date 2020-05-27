import { dispose } from "../../disposable.ts";
import { Function1 } from "../../functions.ts";
import { ObservableLike, ObserverLike } from "./interfaces.ts";
import { deferSynchronous, defer } from "./observable.ts";
import { YieldError } from "../../internal/scheduler/schedulerContinuation.ts";

/**
 * Creates an `ObservableLike` from the given array with a specified `delay` between emitted items.
 * An optional `startIndex` in the array maybe specified,
 *
 * @param options Config object that specifies an optional `delay` between emitted items and
 * an optional `startIndex` into the array.
 */
export const fromArray = <T>(
  options: {
    readonly delay?: number;
    readonly startIndex?: number;
    readonly endIndex?: number;
  } = {},
): Function1<readonly T[], ObservableLike<T>> => values => {
  const delay = Math.max(options.delay ?? 0, 0);
  const valuesLength = values.length;
  const startIndex = Math.min(options.startIndex ?? 0, valuesLength);
  const endIndex = Math.max(
    Math.min(options.endIndex ?? values.length, valuesLength),
    0,
  );

  const factory = () => {
    let index = startIndex;

    return (observer: ObserverLike<T>) => {
      while (index < endIndex) {
        const value = values[index];
        index++;

        observer.notify(value);

        if (index < endIndex && (delay > 0 || observer.shouldYield)) {
          throw new YieldError(delay);
        }
      }
      dispose(observer);
    };
  };

  return delay > 0 ? defer(factory, { delay }) : deferSynchronous(factory);
};
