import {
  EnumerableLike,
  ObservableLike,
  SubscriberLike,
  EnumeratorLike,
} from "./interfaces";
import {
  DisposableLike,
  disposableMixin,
  createDisposable,
} from "@reactive-js/disposable";
import { fromEnumerator } from "./fromEnumerator";

class IteratorEnumerator<T> implements EnumeratorLike<T> {
  readonly add = disposableMixin.add;
  current: any;
  readonly disposable: DisposableLike = createDisposable();
  readonly dispose = disposableMixin.dispose;
  hasCurrent = false;

  constructor(private readonly iterator: Iterator<T>) {}

  get isDisposed() {
    return this.disposable.isDisposed;
  }

  moveNext(): boolean {
    this.current = undefined;
    this.hasCurrent = false;

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

class FromIteratorObservable<T> implements ObservableLike<T> {
  constructor(
    protected readonly iterator: Iterator<T>,
    private readonly delay: number,
  ) {}

  subscribe(subscriber: SubscriberLike<T>) {
    const enumerator = new IteratorEnumerator(this.iterator);
    fromEnumerator(enumerator, this.delay).subscribe(subscriber);
  }
}

class FromIteratorEnumerable<T> extends FromIteratorObservable<T>
  implements EnumerableLike<T> {
  constructor(iterator: Iterator<T>) {
    super(iterator, 0);
  }

  [Symbol.iterator]() {
    return this.iterator;
  }

  enumerate() {
    return new IteratorEnumerator(this.iterator);
  }
}

/**
 * Creates an `EnumerableLike` backed by the provided `Iterator`.
 *
 * @param iterator The `Iterator`.
 */
export function fromIterator<T>(iterator: Iterator<T>): EnumerableLike<T>;

/**
 * Creates an `ObservableLike` backed by the provided `Iterator`
 * with a specified `delay` between emitted items.
 *
 * @param enumerator The `Iterator`.
 * @param delay The requested delay between emitted items byt the observable.
 */
export function fromIterator<T>(
  iterator: Iterator<T>,
  delay: number,
): ObservableLike<T>;
export function fromIterator<T>(
  iterator: Iterator<T>,
  delay = 0,
): ObservableLike<T> {
  return delay > 0
    ? new FromIteratorObservable(iterator, delay)
    : new FromIteratorEnumerable(iterator);
}

class FromIterableObservable<T> implements ObservableLike<T> {
  constructor(
    protected readonly iterable: Iterable<T>,
    private readonly delay: number,
  ) {}

  subscribe(subscriber: SubscriberLike<T>) {
    const iterator = this.iterable[Symbol.iterator]();
    subscriber.add(error => {
      if (error !== undefined && iterator.throw !== undefined) {
        const { cause } = error;
        iterator.throw(cause);
      } else if (iterator.return !== undefined) {
        iterator.return();
      }
    });

    const observable = fromIterator(iterator, this.delay);
    observable.subscribe(subscriber);
  }
}

class FromIterableEnumerable<T> extends FromIterableObservable<T> {
  constructor(iterable: Iterable<T>) {
    super(iterable, 0);
  }

  [Symbol.iterator]() {
    return this.iterable[Symbol.iterator]();
  }

  enumerate() {
    return new IteratorEnumerator(this.iterable[Symbol.iterator]());
  }
}

/**
 * Creates an `EnumerableLike` which iterates through the values
 * produced by the provided `Iterable`.
 *
 * @param values The `Iterable`.
 */
export function fromIterable<T>(iterable: Iterable<T>): EnumerableLike<T>;

/**
 * Creates an `ObservableLike` which iterates through the values
 * produced by the provided `Iterable` with a specified `delay` between emitted items.
 *
 * @param values The `Iterable`.
 * @param delay The requested delay between emitted items by the observable.
 */
export function fromIterable<T>(
  iterable: Iterable<T>,
  delay: number,
): ObservableLike<T>;

export function fromIterable<T>(
  iterable: Iterable<T>,
  delay = 0,
): ObservableLike<T> {
  return delay > 0
    ? new FromIterableObservable(iterable, delay)
    : new FromIterableEnumerable(iterable);
}
