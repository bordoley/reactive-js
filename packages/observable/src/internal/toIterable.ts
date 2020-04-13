import { EnumeratorLike } from "@reactive-js/enumerable";
import { ObservableLike } from "./interfaces";
import { toEnumerable } from "./toEnumerable";
import { DisposableLike } from "@reactive-js/disposable";

const done: IteratorResult<any> = { done: true, value: undefined };

class EnumeratorIterator<T> implements Iterator<T> {
  constructor(
    private readonly enumerator: EnumeratorLike<void, T> & DisposableLike,
  ) {}

  next<T>(): IteratorResult<T> {
    const enumerator = this.enumerator;
    return enumerator.move()
      ? { done: false, value: enumerator.current }
      : done;
  }

  return<T>(value?: any): IteratorResult<T> {
    this.enumerator.dispose();
    return value !== undefined ? { done: true, value } : done;
  }

  throw<T>(error?: unknown): IteratorResult<T> {
    this.enumerator.dispose();
    if (error !== undefined) {
      throw error;
    }
    return done;
  }
}

class ObservableIterable<T> implements Iterable<T> {
  constructor(private readonly observable: ObservableLike<T>) {}

  [Symbol.iterator]() {
    const enumerator = toEnumerable(this.observable).enumerate();
    return new EnumeratorIterator(enumerator);
  }
}

/**
 * Converts an `ObservableLike` into an `Iterable`.
 */
export const toIterable = <T>(source: ObservableLike<T>): Iterable<T> =>
  new ObservableIterable(source);
