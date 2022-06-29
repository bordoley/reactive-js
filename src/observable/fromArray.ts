import { FromArray } from "../container";
import { dispose } from "../disposable";
import { Function1, length, max, min, pipe } from "../functions";
import { ObservableLike } from "../observable";
import { Observer } from "../observer";
import { __yield } from "../scheduler";
import { createObservable } from "./createObservable";
import { defer } from "./defer";

const deferEmpty = createObservable(dispose());
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
    const delay = max(options.delay ?? 0, 0);
    const valuesLength = length(values);
    const startIndex = min(options.startIndex ?? 0, valuesLength);
    const endIndex = max(
      min(options.endIndex ?? length(values), valuesLength),
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

            observer.notify(value);

            if (index < endIndex) {
              __yield(options);
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
