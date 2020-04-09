import { alwaysTrue } from "./functions";
import { ObservableLike, SubscriberLike } from "./interfaces";
import { createScheduledObservable, createDelayedScheduledObservable } from "./observable";
import { AbstractProducer } from "./producer";

class FromIteratorProducer<T> extends AbstractProducer<T> {
  private next: IteratorResult<T, any>;

  constructor(
    subscriber: SubscriberLike<T>,
    private readonly iterator: Iterator<T>,
    private readonly delay: number,
  ) {
    super(subscriber);
    this.next = iterator.next();
  }

  produce(shouldYield?: () => boolean): number {
    const delay = this.delay;
    const iterator = this.iterator;

    let next = this.next;
    let done = next.done;
    if (delay > 0 || shouldYield !== undefined) {
      let isDisposed = this.isDisposed;
      shouldYield = shouldYield || alwaysTrue;

      while (!done && !isDisposed) {
        this.notify(next.value);

        next = iterator.next();
        done = next.done;

        isDisposed = this.isDisposed;
        if (!done && !isDisposed && (delay > 0 || shouldYield())) {
          this.next = next;
          return delay;
        }
      }
    } else {
      while (!this.isDisposed && !done) {
        this.notify(next.value);

        next = iterator.next();
        done = next.done;
      }
    }

    this.dispose();
    return 0;
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

  return delay > 0
    ? createDelayedScheduledObservable(factory, delay)
    : createScheduledObservable(factory, true);
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

  return delay > 0
    ? createDelayedScheduledObservable(factory, delay)
    : createScheduledObservable(factory, true);
}
