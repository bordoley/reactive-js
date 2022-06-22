import { EnumerableLike } from "../enumerable";
import { Factory, Function1 } from "../functions";
import { AbstractLiftable } from "../liftable";
import { none } from "../option";
import { Enumerator } from "./enumerator";

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

    if (!this.isDisposed) {
      const next = this.iterator.next();

      if (!next.done) {
        this.hasCurrent = true;
        this.current = next.value;
      } else {
        this.dispose();
      }
    }

    return this.hasCurrent;
  }
}

class IteratorEnumerable<
  T,
  TReturn = any,
  TNext = unknown,
> extends AbstractLiftable<Enumerator<T>> {
  constructor(private readonly f: Factory<Iterator<T, TReturn, TNext>>) {
    super();
  }

  enumerate() {
    const iterator = this.f();
    const enumerator = new IteratorEnumerator(iterator);
    return enumerator;
  }
}

const _fromIterator = <T, TReturn = any, TNext = unknown>(
  f: Factory<Iterator<T, TReturn, TNext>>,
): EnumerableLike<T> => new IteratorEnumerable(f);

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

const _fromIterable = <T>(iterable: Iterable<T>): EnumerableLike<T> =>
  _fromIterator(() => iterable[Symbol.iterator]());

/**
 * Converts a javascript Iterable to an EnumerableLike.
 *
 * @param iterable
 */
export const fromIterable = <T>(): Function1<Iterable<T>, EnumerableLike<T>> =>
  _fromIterable;
