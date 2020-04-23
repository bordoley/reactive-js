import { EnumerableLike } from "./interfaces";

class EnumerableIterable<T> implements Iterable<T> {
  constructor(private readonly enumerable: EnumerableLike<T>) {}

  *[Symbol.iterator]() {
    const enumerator = this.enumerable.enumerate();
    try {
      while (enumerator.move()) {
        yield enumerator.current;
      }
    } finally {
      enumerator.dispose();
    }
  }
}

/**
 * Converts an `EnumerableLike` into an `Iterable`.
 */
export const toIterable = <T>(source: EnumerableLike<T>): Iterable<T> =>
  new EnumerableIterable(source);
