import { FromArray } from "../container";
import { dispose } from "../disposable";
import { Function1, pipe } from "../functions";
import { ObservableLike } from "../observable";
import { YieldError } from "../scheduler";
import { createObservable } from "./createObservable";
import { defer } from "./defer";
import { Observer } from "./observer";

const deferEmpty = createObservable(observer => {
  observer.dispose();
});
(deferEmpty as any).isEnumerable = true;

/**
 * Creates an `ObservableLike` from the given array with a specified `delay` between emitted items.
 * An optional `startIndex` in the array maybe specified,
 *
 * @param options Config object that specifies an optional `delay` between emitted items and
 * an optional `startIndex` into the array.
 */
export const fromArray =
  <T>(
    options: {
      readonly delay?: number;
      readonly startIndex?: number;
      readonly endIndex?: number;
    } = {},
  ): Function1<readonly T[], ObservableLike<T>> =>
  values => {
    const delay = Math.max(options.delay ?? 0, 0);
    const valuesLength = values.length;
    const startIndex = Math.min(options.startIndex ?? 0, valuesLength);
    const endIndex = Math.max(
      Math.min(options.endIndex ?? values.length, valuesLength),
      0,
    );
    const count = endIndex - startIndex;

    if (count === 0 && delay === 0) {
      return deferEmpty;
    } else {
      const observable = defer(() => {
        let index = startIndex;
        return (observer: Observer<T>) => {
          while (index < endIndex) {
            const value = values[index];
            index++;

            // Inline yielding logic for performance reasons
            observer.notify(value);

            if (
              index < endIndex &&
              (delay > 0 || observer.scheduler.shouldYield)
            ) {
              throw new YieldError(delay);
            }
          }
          pipe(observer, dispose());
        };
      }, options);

      (observable as any).isEnumerable = delay === 0;
      return observable;
    }
  };

export const fromArrayT: FromArray<
  ObservableLike<unknown>,
  {
    readonly delay: number;
    readonly startIndex: number;
    readonly endIndex: number;
  }
> = {
  fromArray,
};
