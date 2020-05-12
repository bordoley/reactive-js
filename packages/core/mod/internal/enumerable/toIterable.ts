import { enumerate } from "./enumerate.ts";
import { EnumerableLike } from "./interfaces.ts";

class EnumerableIterable<T> implements Iterable<T> {
  constructor(private readonly enumerable: EnumerableLike<T>) {}

  *[Symbol.iterator]() {
    const enumerator = enumerate(this.enumerable);
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
