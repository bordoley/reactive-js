import { dispose } from "../../disposable.ts";
import { Function1 } from "../../functions.ts";
import { ObservableLike, ObserverLike } from "./interfaces.ts";
import {
  deferSynchronous,
  defer,
} from "./observable.ts";
import { yield$ } from "./observer.ts";

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

  const factory = () => {
    let index = startIndex;

    return (observer: ObserverLike<T>) => {
      while (index < valuesLength) {
        const value = values[index];
        index++;
        yield$(observer, value, index < valuesLength ? delay : 0);
      }
      dispose(observer);
    };
  };

  return delay > 0
    ? defer(factory, { delay })
    : deferSynchronous(factory);
};
