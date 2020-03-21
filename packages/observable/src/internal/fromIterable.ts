import { ObservableLike, SubscriberLike } from "./interfaces";
import { createScheduledObservable } from "./observable";
import { AbstractProducer } from "./producer";

class FromIteratorProducer<T> extends AbstractProducer<T> {
  constructor(
    subscriber: SubscriberLike<T>,
    private readonly iterator: Iterator<T>,
    readonly delay: number,
  ) {
    super(subscriber);
  }

  produce(shouldYield?: () => boolean) {
    const iterator = this.iterator;

    if (this.delay > 0 && !this.isDisposed) {
      const next = iterator.next();
      if (!next.done) {
        this.notify(next.value);
        return;
      }
    } else if (shouldYield !== undefined) {
      let done = false;
      while (!this.isDisposed && !done) {
        const next = iterator.next();
        done = next.done || false;

        if (!done) {
          this.notify(next.value);
        }

        if (!done && shouldYield()) {
          return;
        }
      }
    } else {
      let done = false;
      while (!this.isDisposed && !done) {
        const next = iterator.next();
        done = next.done || false;

        if (!done) {
          this.notify(next.value);
        }
      }
    }

    this.dispose();
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
  const factory = (subscriber: SubscriberLike<T>) =>
    new FromIteratorProducer(subscriber, iterator, delay);

  return createScheduledObservable(factory, delay === 0);
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
  const factory = (subscriber: SubscriberLike<T>) => {
    const iterator = iterable[Symbol.iterator]();
    subscriber.add(error => {
      if (error !== undefined && iterator.throw !== undefined) {
        const { cause } = error;
        iterator.throw(cause);
      } else if (iterator.return !== undefined) {
        iterator.return();
      }
    });
    return new FromIteratorProducer(subscriber, iterator, delay);
  };

  return createScheduledObservable(factory, delay === 0);
}
