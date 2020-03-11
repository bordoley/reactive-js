import { SchedulerContinuationLike } from "@reactive-js/scheduler";
import { ObservableLike, SubscriberLike } from "./interfaces";
import { observableMixin } from "./observable";
import { producerMixin } from "./producer";

class FromIteratorProducer<T> implements SchedulerContinuationLike {
  readonly run = producerMixin.run;

  constructor(
    private readonly subscriber: SubscriberLike<T>,
    private readonly iterator: Iterator<T>,
    readonly delay: number,
  ) {}

  produce(shouldYield?: () => boolean): SchedulerContinuationLike | void {
    const iterator = this.iterator;
    const subscriber = this.subscriber;

    if (this.delay > 0 && !subscriber.isDisposed) {
      const next = iterator.next();
      if (!next.done) {
        subscriber.notify(next.value);
        return this;
      }
    } else if (shouldYield !== undefined) {
      let done = false;
      while (!subscriber.isDisposed && !done) {
        const next = iterator.next();
        done = next.done || false;

        if (!done) {
          subscriber.notify(next.value);
        }

        if (!done && shouldYield()) {
          return this;
        }
      }
    } else {
      let done = false;
      while (!subscriber.isDisposed && !done) {
        const next = iterator.next();
        done = next.done || false;

        if (!done) {
          subscriber.notify(next.value);
        }
      }
    }

    subscriber.dispose();
    return;
  }
}

class FromIteratorObservable<T> implements ObservableLike<T> {
  readonly enumerate = observableMixin.enumerate;
  readonly isSynchronous: boolean;

  constructor(
    private readonly iterator: Iterator<T>,
    private readonly delay: number,
  ) {
    this.isSynchronous = delay === 0;
  }

  subscribe(subscriber: SubscriberLike<T>) {
    const producer = new FromIteratorProducer(
      subscriber,
      this.iterator,
      this.delay,
    );
    subscriber.schedule(producer);
  }
}

/**
 * Creates an `ObservableLike` which iterates through the values
 * produced by the provided `Iterator` with a specified `delay` between emitted items.
 *
 * @param values The `Iterator`.
 * @param delay The requested delay between emitted items by the observable.
 */
export function fromIterator<T>(
  iterator: Iterator<T>,
  delay = 0,
): ObservableLike<T> {
  return new FromIteratorObservable(iterator, delay);
}

class FromIterableObservable<T> implements ObservableLike<T> {
  readonly enumerate = observableMixin.enumerate;
  readonly isSynchronous: boolean;

  constructor(
    private readonly iterable: Iterable<T>,
    private readonly delay: number,
  ) {
    this.isSynchronous = delay === 0;
  }

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

    const producer = new FromIteratorProducer(subscriber, iterator, this.delay);
    subscriber.schedule(producer);
  }
}

/**
 * Creates an `ObservableLike` which iterates through the values
 * produced by the provided `Iterable` with a specified `delay` between emitted items.
 *
 * @param values The `Iterable`.
 * @param delay The requested delay between emitted items by the observable.
 */
export function fromIterable<T>(
  iterable: Iterable<T>,
  delay = 0,
): ObservableLike<T> {
  return new FromIterableObservable(iterable, delay);
}
