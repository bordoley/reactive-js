import { Function1 } from "../../functions.ts";
import { enumerate } from "./enumerator.ts";
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

export const _toIterable = <T>(source: EnumerableLike<T>): Iterable<T> =>
  new EnumerableIterable(source);

/**
 * Converts an EnumerableLike into a javascript Iterable.
 */
export const toIterable = <T>(): Function1<EnumerableLike<T>, Iterable<T>> =>
  _toIterable;
