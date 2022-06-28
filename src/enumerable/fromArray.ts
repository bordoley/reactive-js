import { FromArray, FromArrayOptions } from "../container";
import { dispose, isDisposed } from "../disposable";
import { EnumerableLike } from "../enumerable";
import { AbstractEnumerator, hasCurrent, reset } from "../enumerator";
import { pipe } from "../functions";
import { createEnumerable } from "./enumerable";

class ArrayEnumerator<T> extends AbstractEnumerator<T> {
  constructor(
    private readonly array: readonly T[],
    private index: number,
    private readonly endIndex: number,
  ) {
    super();
  }

  move(): boolean {
    reset(this);

    const { array } = this;

    if (!isDisposed(this)) {
      this.index++;
      const { index, endIndex } = this;

      if (index < endIndex) {
        this.current = array[index];
      } else {
        pipe(this, dispose());
      }
    }

    return hasCurrent(this);
  }
}

/**
 * Returns an EnumerableLike view over the `values` array.
 *
 * @param values
 */
export const fromArray =
  <T>(
    options: {
      readonly startIndex?: number;
      readonly endIndex?: number;
    } = {},
  ) =>
  (values: readonly T[]): EnumerableLike<T> => {
    const valuesLength = values.length;
    const startIndex = Math.min(options.startIndex ?? 0, valuesLength);
    const endIndex = Math.max(
      Math.min(options.endIndex ?? values.length, valuesLength),
      0,
    );

    return createEnumerable(
      () => new ArrayEnumerator(values, startIndex - 1, endIndex),
    );
  };

export const fromArrayT: FromArray<
  EnumerableLike<unknown>,
  FromArrayOptions
> = {
  fromArray,
};
