import { none } from "../../option.ts";
import { EnumerableLike, EnumeratorLike } from "./interfaces.ts";

class ArrayEnumerator<T> implements EnumeratorLike<T> {
  current: any = none;
  hasCurrent = false;
  index = -1;

  constructor(private readonly array: readonly T[]) {}

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
