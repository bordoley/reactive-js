import { EnumerableLike, enumerate } from "../enumerable";
import { current, move } from "../enumerator";
import { Function1, instanceFactory, pipe } from "../functions";

class EnumerableIterable<T> implements Iterable<T> {
  constructor(private readonly enumerable: EnumerableLike<T>) {}

  *[Symbol.iterator]() {
    const enumerator = pipe(this.enumerable, enumerate);
    while (move(enumerator)) {
      yield current(enumerator);
    }
  }
}

export const _toIterable = /*@__PURE__*/ instanceFactory(EnumerableIterable);

/**
 * Converts an EnumerableLike into a javascript Iterable.
 */
export const toIterable = <T>(): Function1<EnumerableLike<T>, Iterable<T>> =>
  _toIterable;
