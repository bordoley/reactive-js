import { AbstractDisposable } from "../disposable";
import { EnumerableLike, EnumeratorLike } from "../enumerable";
import { none } from "../option";

class ArrayEnumerator<T>
  extends AbstractDisposable
  implements EnumeratorLike<T>
{
  current: any = none;
  hasCurrent = false;

  constructor(
    private readonly array: readonly T[],
    private index: number,
    private readonly endIndex: number,
  ) {
    super();
  }

  move(): boolean {
    const array = this.array;

    let hasCurrent = false;

    if (!this.isDisposed) {
      this.index++;
      const index = this.index;

      if (index < this.endIndex) {
        hasCurrent = true;
        this.hasCurrent = true;
        this.current = array[index];
      } else {
        this.hasCurrent = false;
        this.dispose();
      }
    }

    return hasCurrent;
  }
}

class ArrayEnumerable<T> implements EnumerableLike<T> {
  constructor(
    private readonly values: readonly T[],
    private readonly startIndex: number,
    private readonly endIndex: number,
  ) {}

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

const _empty = fromArray()([]);

/**
 * Returns an empty EnumerableLike.
 */
export const empty = <T>(): EnumerableLike<T> => _empty as EnumerableLike<T>;
