import { none } from "../../option";
import { EnumerableLike, EnumeratorLike } from "./interfaces";

class IteratorEnumerator<T, TReturn = any, TNext = unknown>
  implements EnumeratorLike<T> {
  current: any = none;
  hasCurrent = false;

  constructor(private readonly iterator: Iterator<T, TReturn, TNext>) {}

  move(): boolean {
    this.hasCurrent = false;
    this.current = none;

    const next = this.iterator.next();

    if (!next.done) {
      this.hasCurrent = true;
      this.current = next.value;
    }

    return this.hasCurrent;
  }
}

class IteratorEnumerable<T, TReturn = any, TNext = unknown>
  implements EnumerableLike<T> {
  constructor(private readonly f: () => Iterator<T, TReturn, TNext>) {}

  enumerate() {
    const iterator = this.f();
    const enumerator = new IteratorEnumerator(iterator);
    return enumerator;
  }
}

/**
 * Returns a single use EnumerableLike over the javascript Iterator
 * returned by the function `f`.
 *
 * @param f
 */
export const fromIterator = <T, TReturn = any, TNext = unknown>(
  f: () => Iterator<T, TReturn, TNext>,
): EnumerableLike<T> => new IteratorEnumerable(f);

/**
 * Converts a javascript Iterable to an EnumerableLike.
 *
 * @param iterable
 */
export const fromIterable = <T>(iterable: Iterable<T>): EnumerableLike<T> =>
  fromIterator(() => iterable[Symbol.iterator]());
