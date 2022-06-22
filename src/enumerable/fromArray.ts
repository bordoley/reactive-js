import { FromArray, FromArrayOptions } from "../container";
import { EnumerableLike } from "../enumerable";
import { AbstractLiftable } from "../liftable";
import { Enumerator, EnumeratorBase } from "./enumerator";

class ArrayEnumerator<T> extends EnumeratorBase<T> {
  constructor(
    private readonly array: readonly T[],
    private index: number,
    private readonly endIndex: number,
  ) {
    super();
  }

  move(): boolean {
    this.reset();

    const { array } = this;

    if (!this.isDisposed) {
      this.index++;
      const { index, endIndex } = this;

      if (index < endIndex) {
        this.current = array[index];
      } else {
        this.dispose();
      }
    }

    return this.hasCurrent;
  }
}

class ArrayEnumerable<T>
  extends AbstractLiftable<Enumerator<T>>
  implements EnumerableLike<T>
{
  constructor(
    private readonly values: readonly T[],
    private readonly startIndex: number,
    private readonly endIndex: number,
  ) {
    super();
  }

  enumerate() {
    return new ArrayEnumerator(this.values, this.startIndex, this.endIndex);
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

    return new ArrayEnumerable(values, startIndex - 1, endIndex);
  };

export const fromArrayT: FromArray<
  EnumerableLike<unknown>,
  FromArrayOptions
> = {
  fromArray,
};
