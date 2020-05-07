import { EnumerableLike } from "./interfaces";

class EnumerableIterable<T> implements Iterable<T> {
  constructor(private readonly enumerable: EnumerableLike<T>) {}

  *[Symbol.iterator]() {
    const enumerator = this.enumerable.enumerate();
    while (enumerator.move()) {
      yield enumerator.current;
    }
  }
}

/**
 * Converts an EnumerableLike into a javascript Iterable.
 */
export const toIterable = <T>(source: EnumerableLike<T>): Iterable<T> =>
  new EnumerableIterable(source);
