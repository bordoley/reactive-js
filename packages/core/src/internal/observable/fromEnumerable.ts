import { EnumeratorLike, EnumerableLike } from "../../enumerable";
import { isSome } from "../../option";
import { alwaysFalse } from "../../functions";
import { ObservableLike, SubscriberLike } from "./interfaces";
import {
  createScheduledObservable,
  createDelayedScheduledObservable,
} from "./observable";
import { AbstractProducer } from "./producer";

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
 * produced by the provided `Enumerable` with a specified `delay` between emitted items.
 *
 * @param values The `Enumerable`.
 * @param delay The requested delay between emitted items by the observable.
 */
export function fromEnumerable<T>(
  enumerable: EnumerableLike<T>,
  delay = 0,
): ObservableLike<T> {
  const factory = (subscriber: SubscriberLike<T>) => {
    const enumerator = enumerable.enumerate();
    return new FromEnumeratorProducer(subscriber, enumerator, delay);
  };

  return delay > 0
    ? createDelayedScheduledObservable(factory, delay)
    : createScheduledObservable(factory, true);
}
