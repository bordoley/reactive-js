import { alwaysFalse } from "./functions.ts";
import { ObservableLike, SubscriberLike } from "./interfaces.ts";
import { createDelayedScheduledObservable } from "./observable.ts";
import { AbstractProducer } from "./producer.ts";

class FromScheduledValuesProducer<T> extends AbstractProducer<T> {
  private index = 0;

  constructor(
    subscriber: SubscriberLike<T>,
    private readonly values: ReadonlyArray<[number, T]>,
  ) {
    super(subscriber);
  }

  produce(shouldYield?: () => boolean): number {
    const values = this.values;
    const length = values.length;

    let index = this.index;
    let isDisposed = this.isDisposed;

    shouldYield = shouldYield ?? alwaysFalse;

    while (index < length && !isDisposed) {
      const [, value] = values[index];
      this.notify(value);

      index++;

      const shouldYieldDueToDelay = index < length && values[index][0] > 0;

      isDisposed = this.isDisposed;
      if (
        index < length &&
        !isDisposed &&
        (shouldYieldDueToDelay || shouldYield())
      ) {
        this.index = index;
        return values[index][0];
      }
    }

    return -1;
  }
}

/**
 * Creates an `ObservableLike` from a series of [delay, value] tuples.
 * The delay is relative to the current time.
 */
export function fromScheduledValues<T>(
  value: [number, T],
  ...values: Array<[number, T]>
): ObservableLike<T>;

export function fromScheduledValues<T>(
  ...values: Array<[number, T]>
): ObservableLike<T> {
  const factory = (subscriber: SubscriberLike<T>) =>
    new FromScheduledValuesProducer(subscriber, values);

  const [delay] = values[0];
  return createDelayedScheduledObservable(factory, delay);
}
