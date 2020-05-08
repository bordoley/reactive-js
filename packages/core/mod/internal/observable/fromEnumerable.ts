import { EnumeratorLike, EnumerableLike } from "../../enumerable.ts";
import { alwaysFalse, Operator } from "../../functions.ts";
import { isSome } from "../../option.ts";
import { ObservableLike, SubscriberLike } from "./interfaces.ts";
import {
  createScheduledObservable,
  createDelayedScheduledObservable,
} from "./observable.ts";
import { AbstractProducer } from "./producer.ts";

class FromEnumeratorProducer<T> extends AbstractProducer<T> {
  constructor(
    subscriber: SubscriberLike<T>,
    private readonly enumerator: EnumeratorLike<T>,
    private readonly delay: number,
  ) {
    super(subscriber);
  }

  produce(shouldYield?: () => boolean): number {
    const delay = this.delay;
    const enumerator = this.enumerator;

    if (delay > 0 || isSome(shouldYield)) {
      let isDisposed = this.isDisposed;
      shouldYield = shouldYield ?? alwaysFalse;

      while (enumerator.move() && !isDisposed) {
        this.notify(enumerator.current);

        isDisposed = this.isDisposed;
        if (!isDisposed && (delay > 0 || shouldYield())) {
          return delay;
        }
      }
    } else {
      while (enumerator.move() && !this.isDisposed) {
        this.notify(enumerator.current);
      }
    }
    return -1;
  }
}

/**
 * Creates an `ObservableLike` which enumerates through the values
 * produced by the provided `EnumeratorLike` with a specified `delay` between emitted items.
 *
 * @param delay The requested delay between emitted items by the observable.
 */
export const fromEnumerator = <T>(
  delay = 0,
): Operator<EnumeratorLike<T>, ObservableLike<T>> => enumerator => {
  const factory = (subscriber: SubscriberLike<T>) =>
    new FromEnumeratorProducer(subscriber, enumerator, delay);

  return delay > 0
    ? createDelayedScheduledObservable(factory, delay)
    : createScheduledObservable(factory, true);
};

/**
 * Creates an `ObservableLike` which enumerates through the values
 * produced by the provided `Enumerable` with a specified `delay` between emitted items.
 *
 * @param values The `Enumerable`.
 * @param delay The requested delay between emitted items by the observable.
 */
export const fromEnumerable = <T>(
  { delay } = { delay: 0 },
): Operator<EnumerableLike<T>, ObservableLike<T>> => enumerable => {
  const factory = (subscriber: SubscriberLike<T>) => {
    const enumerator = enumerable.enumerate();
    return new FromEnumeratorProducer(subscriber, enumerator, delay);
  };

  return delay > 0
    ? createDelayedScheduledObservable(factory, delay)
    : createScheduledObservable(factory, true);
};
