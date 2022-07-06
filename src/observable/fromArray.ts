import { createFromArray } from "../__internal__.container";
import { hasDelay } from "../__internal__.optionalArgs";
import { FromArray } from "../container";
import { dispose } from "../disposable";
import { pipe } from "../functions";
import { ObservableLike } from "../observable";
import { Observer } from "../observer";
import { __yield } from "../scheduler";
import { createObservable } from "./createObservable";
import { defer } from "./defer";
import { tagObservableType } from "./observable";

const empty = /*@__PURE__*/ pipe(
  createObservable(dispose<Observer<any>>()),
  tagObservableType(2),
);

/**
 * Creates an `ObservableLike` from the given array with a specified `delay` between emitted items.
 * An optional `startIndex` in the array maybe specified,
 *
 * @param options Config object that specifies an optional `delay` between emitted items and
 * an optional `startIndex` into the array.
 */

export const fromArray = /*@__PURE__*/ createFromArray<
  ObservableLike<unknown>,
  {
    readonly delay: number;
    readonly startIndex: number;
    readonly endIndex: number;
  }
>(
  <T>(
    values: readonly T[],
    startIndex: number,
    endIndex: number,
    options?: {
      readonly delay?: number;
    },
  ) => {
    const count = endIndex - startIndex;
    const isEnumerableTag = !hasDelay(options);
    return count === 0 && isEnumerableTag
      ? empty
      : pipe(
          defer(() => {
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
          }, options),
          tagObservableType(hasDelay(options) ? 1 : 2),
        );
  },
);

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
