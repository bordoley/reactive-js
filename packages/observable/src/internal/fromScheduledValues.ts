import { ObservableLike, SubscriberLike } from "./interfaces";
import { createScheduledObservable } from "./observable";
import { AbstractProducer } from "./producer";

const alwaysTrue = () => true;

class FromScheduledValuesProducer<T> extends AbstractProducer<T> {
  private index = 0;
  delay: number;

  constructor(
    subscriber: SubscriberLike<T>,
    private readonly values: ReadonlyArray<[number, T]>,
  ) {
    super(subscriber);

    const [delay] = this.values[0];
    this.delay = delay;
  }

  produce(shouldYield?: () => boolean) {
    const values = this.values;
    const length = values.length;

    let index = this.index;
    let isDisposed = this.isDisposed;

    shouldYield = shouldYield || alwaysTrue;

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
        this.delay = values[index][0];
        return;
      }
    }

    this.dispose();
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

  return createScheduledObservable(factory, false);
}
