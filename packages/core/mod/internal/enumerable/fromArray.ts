import { none } from "../../option.ts";
import { EnumerableLike, EnumeratorLike } from "./interfaces.ts";

class ArrayEnumerator<T> implements EnumeratorLike<T> {
  current: any = none;
  hasCurrent = false;
  index = -1;

  constructor(private readonly array: readonly T[]) {}

  move(): boolean {
    this.hasCurrent = false;
    this.current = none;

    this.index++;

    const index = this.index;
    if (index < this.array.length) {
      this.hasCurrent = true;
      this.current = this.array[index];
    }

    return this.hasCurrent;
  }
}

class ArrayEnumerable<T> implements EnumerableLike<T> {
  constructor(private readonly values: readonly T[]) {}

  enumerate() {
    return new ArrayEnumerator(this.values);
  }
}

/**
 * Returns an EnumerableLike view over the `values` array.
 *
 * @param values
 */
export const fromArray = <T>(values: readonly T[]): EnumerableLike<T> =>
  new ArrayEnumerable(values);

const _empty = fromArray([]);

/**
 * Returns an empty EnumerableLike.
 */
export const empty = <T>(): EnumerableLike<T> => _empty;
