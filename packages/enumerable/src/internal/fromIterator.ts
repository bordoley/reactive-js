import { AbstractDisposable } from "@reactive-js/disposable";
import { isSome, none } from "@reactive-js/option";
import { EnumerableLike, EnumeratorLike } from "./interfaces";

class IteratorEnumerator<T, TReturn = any, TNext = unknown>
  extends AbstractDisposable
  implements EnumeratorLike<void, T> {
  current: any = none;
  hasCurrent = false;

  constructor(private readonly iterator: Iterator<T, TReturn, TNext>) {
    super();
  }

  move(_: void): boolean {
    this.hasCurrent = false;
    this.current = none;

    const next = this.iterator.next();

    if (!next.done) {
      this.hasCurrent = true;
      this.current = next.value;
    } else {
      this.dispose();
    }

    return this.hasCurrent;
  }
}

class IteratorEnumerable<T, TReturn = any, TNext = unknown>
  implements EnumerableLike<void, T> {
  constructor(private readonly f: () => Iterator<T, TReturn, TNext>) {}

  enumerate() {
    const iterator = this.f();
    const enumerator = new IteratorEnumerator(iterator);
    enumerator.add(error => {
      if (isSome(error) && isSome(iterator.throw)) {
        const { cause } = error;
        iterator.throw(cause);
      } else if (isSome(iterator.return)) {
        iterator.return();
      }
    });
    return enumerator;
  }
}

export const fromIterator = <T, TReturn = any, TNext = unknown>(
  f: () => Iterator<T, TReturn, TNext>,
): EnumerableLike<void, T> => new IteratorEnumerable(f);

export const fromIterable = <T>(
  iterable: Iterable<T>,
): EnumerableLike<void, T> => fromIterator(() => iterable[Symbol.iterator]());
