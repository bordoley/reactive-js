import { EnumerableLike, enumerate } from "../enumerable";
import { current, move } from "../enumerator";
import { Function1, newInstance } from "../functions";

class EnumerableIterable<T> implements Iterable<T> {
  constructor(private readonly enumerable: EnumerableLike<T>) {}

  *[Symbol.iterator]() {
    const enumerator = enumerate(this.enumerable);
    while (move(enumerator)) {
      yield current(enumerator);
    }
  }
}

export const _toIterable = <T>(source: EnumerableLike<T>): Iterable<T> =>
  newInstance(EnumerableIterable, source);

/**
 * Converts an EnumerableLike into a javascript Iterable.
 */
export const toIterable = <T>(): Function1<EnumerableLike<T>, Iterable<T>> =>
  _toIterable;
