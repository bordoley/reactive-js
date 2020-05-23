import { none } from "../../option";
import { EnumerableLike, EnumeratorLike } from "./interfaces";

class ArrayEnumerator<T> implements EnumeratorLike<T> {
  current: any = none;
  hasCurrent = false;

  constructor(private readonly array: readonly T[], private index: number) {}

  move(): boolean {
    const array = this.array;

    let hasCurrent = false;

    this.index++;
    const index = this.index;

    if (index < array.length) {
      hasCurrent = true;
      this.hasCurrent = true;
      this.current = array[index];
    } else {
      this.hasCurrent = false;
    }

    return hasCurrent;
  }
}

class ArrayEnumerable<T> implements EnumerableLike<T> {
  constructor(
    private readonly values: readonly T[],
    private startIndex: number,
  ) {}

  enumerate() {
    return new ArrayEnumerator(this.values, this.startIndex);
  }
}

/**
 * Returns an EnumerableLike view over the `values` array.
 *
 * @param values
 */
export const fromArray = <T>({ startIndex } = { startIndex: 0 }) => (
  values: readonly T[],
): EnumerableLike<T> => new ArrayEnumerable(values, startIndex - 1);

const _empty = fromArray()([]);

/**
 * Returns an empty EnumerableLike.
 */
export const empty = <T>(): EnumerableLike<T> => _empty as EnumerableLike<T>;
