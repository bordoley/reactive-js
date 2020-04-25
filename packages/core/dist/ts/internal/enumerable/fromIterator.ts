import { none } from "../../option.ts";
import { EnumerableLike, EnumeratorLike } from "./interfaces.ts";

class IteratorEnumerator<T, TReturn = any, TNext = unknown> implements EnumeratorLike<T> {
  current: any = none;
  hasCurrent = false;

  constructor(private readonly iterator: Iterator<T, TReturn, TNext>) {
  }

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

export const fromIterator = <T, TReturn = any, TNext = unknown>(
  f: () => Iterator<T, TReturn, TNext>,
): EnumerableLike<T> => new IteratorEnumerable(f);

export const fromIterable = <T>(iterable: Iterable<T>): EnumerableLike<T> =>
  fromIterator(() => iterable[Symbol.iterator]());
