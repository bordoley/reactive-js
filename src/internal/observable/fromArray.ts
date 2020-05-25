import { dispose } from "../../disposable";
import { Function1 } from "../../functions";
import { ObservableLike, ObserverLike } from "./interfaces";
import { deferSynchronous, defer } from "./observable";
import { yield$ } from "./observer";

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
        yield$(observer, value, index < valuesLength ? delay : 0);
      }
      dispose(observer);
    };
  };

  return delay > 0 ? defer(factory, { delay }) : deferSynchronous(factory);
};
