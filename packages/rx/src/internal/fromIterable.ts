import {
  EnumerableLike,
  ObservableLike,
  SubscriberLike,
  EnumeratorLike,
} from "./interfaces";
import {
  SchedulerContinuationLike,
  SchedulerContinuationResultLike,
} from "@reactive-js/scheduler";
import { producerMixin } from "./producer";
import { enumerableMixin } from "./enumerable";
import {
  DisposableLike,
  disposableMixin,
  createDisposable,
} from "@reactive-js/disposable";

class FromIteratorProducer<T> implements SchedulerContinuationLike {
  private readonly continuationResult: SchedulerContinuationResultLike = {
    continuation: this,
    delay: this.delay,
  };
  run = producerMixin.run;

  constructor(
    private readonly subscriber: SubscriberLike<T>,
    private readonly iterator: Iterator<T>,
    private readonly delay: number,
  ) {}

  loop(shouldYield?: () => boolean): SchedulerContinuationResultLike | void {
    const iterator = this.iterator;
    const subscriber = this.subscriber;

    if (this.delay > 0 && !subscriber.isDisposed) {
      const next = iterator.next();
      if (!next.done) {
        subscriber.notifyNext(next.value);
        return this.continuationResult;
      }
    } else if (shouldYield !== undefined) {
      while (!subscriber.isDisposed) {
        const next = iterator.next();
        if (next.done) {
          break;
        }
        subscriber.notifyNext(next.value);

        if (shouldYield()) {
          return this.continuationResult;
        }
      }
    } else {
      while (!subscriber.isDisposed) {
        const next = iterator.next();
        if (next.done) {
          break;
        }
        subscriber.notifyNext(next.value);
      }
    }

    subscriber.dispose();
    return;
  }
}

class FromIteratorObservable<T> implements ObservableLike<T> {
  constructor(
    protected readonly iterator: Iterator<T>,
    private readonly delay: number,
  ) {}

  subscribe(subscriber: SubscriberLike<T>) {
    const producer = new FromIteratorProducer(
      subscriber,
      this.iterator,
      this.delay,
    );
    subscriber.schedule(producer, this.delay);
  }
}

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

class FromIteratorEnumerable<T> extends FromIteratorObservable<T>
  implements EnumerableLike<T> {
  readonly [Symbol.iterator] = enumerableMixin[Symbol.iterator];

  constructor(iterator: Iterator<T>) {
    super(iterator, 0);
  }

  enumerate() {
    return new IteratorEnumerator(this.iterator);
  }
}

export function fromIterator<T>(iterator: Iterator<T>): EnumerableLike<T>;
export function fromIterator<T>(
  iterator: Iterator<T>,
  delay: number,
): ObservableLike<T>;
export function fromIterator<T>(
  iterator: Iterator<T>,
  delay: number = 0,
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
  readonly [Symbol.iterator] = enumerableMixin[Symbol.iterator];

  constructor(iterable: Iterable<T>) {
    super(iterable, 0);
  }

  enumerate() {
    return new IteratorEnumerator(this.iterable[Symbol.iterator]());
  }
}

export function fromIterable<T>(iterable: Iterable<T>): EnumerableLike<T>;
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
