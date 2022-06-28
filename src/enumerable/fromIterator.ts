import { FromIterable, FromIterator } from "../container";
import { dispose, isDisposed } from "../disposable";
import { EnumerableLike } from "../enumerable";
import { Enumerator, hasCurrent } from "../enumerator";
import { Factory, Function1, pipe } from "../functions";
import { none } from "../option";
import { createEnumerable } from "./enumerable";

class IteratorEnumerator<
  T,
  TReturn = any,
  TNext = unknown,
> extends Enumerator<T> {
  current: any = none;
  hasCurrent = false;

  constructor(private readonly iterator: Iterator<T, TReturn, TNext>) {
    super();
  }

  move(): boolean {
    this.hasCurrent = false;
    this.current = none;

    if (!isDisposed(this)) {
      const next = this.iterator.next();

      if (!next.done) {
        this.hasCurrent = true;
        this.current = next.value;
      } else {
        pipe(this, dispose());
      }
    }

    return hasCurrent(this);
  }
}

const _fromIterator = <T, TReturn = any, TNext = unknown>(
  f: Factory<Iterator<T, TReturn, TNext>>,
): EnumerableLike<T> =>
  createEnumerable(() => {
    const iterator = f();
    const enumerator = new IteratorEnumerator(iterator);
    return enumerator;
  });

/**
 * Returns a single use EnumerableLike over the javascript Iterator
 * returned by the function `f`.
 *
 * @param f
 */
export const fromIterator = <T, TReturn = any, TNext = unknown>(): Function1<
  Factory<Iterator<T, TReturn, TNext>>,
  EnumerableLike<T>
> => _fromIterator;

export const fromIteratorT: FromIterator<EnumerableLike<unknown>> = {
  fromIterator,
};

const _fromIterable = <T>(iterable: Iterable<T>): EnumerableLike<T> =>
  _fromIterator(() => iterable[Symbol.iterator]());

/**
 * Converts a javascript Iterable to an EnumerableLike.
 *
 * @param iterable
 */
export const fromIterable = <T>(): Function1<Iterable<T>, EnumerableLike<T>> =>
  _fromIterable;

export const fromIterableT: FromIterable<EnumerableLike<unknown>> = {
  fromIterable,
};
