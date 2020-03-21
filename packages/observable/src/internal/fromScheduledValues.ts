import { ObservableLike, SubscriberLike } from "./interfaces";
import { createScheduledObservable } from "./observable";
import { AbstractProducer } from "./producer";

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

    let index = this.index;
    while (index < values.length && !this.isDisposed) {
      const [, value] = values[index];
      index++;
      this.notify(value);

      if (index < values.length) {
        const delay = values[index][0] || 0;

        if (delay > 0 || (shouldYield !== undefined && shouldYield())) {
          this.index = index;
          this.delay = delay;
          return;
        }
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
