import { EnumerableLike, EnumeratorLike } from "./interfaces";
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

class EnumerableIterable<T> implements Iterable<T> {
  constructor(private readonly enumerable: EnumerableLike<void, T>) {}

  [Symbol.iterator]() {
    const enumerator = this.enumerable.enumerate();
    return new EnumeratorIterator(enumerator);
  }
}

/**
 * Converts an `EnumerableLike` into an `Iterable`.
 */
export const toIterable = <T>(source: EnumerableLike<void, T>): Iterable<T> =>
  new EnumerableIterable(source);
