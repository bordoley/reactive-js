import { ObservableLike, SubscriberLike } from "./interfaces";
import { createScheduledObservable } from "./observable";
import { AbstractProducer } from "./producer";

class FromArrayProducer<T> extends AbstractProducer<T> {
  private index = this.startIndex;

  constructor(
    subscriber: SubscriberLike<T>,
    private readonly values: readonly T[],
    private readonly startIndex: number,
    readonly delay: number,
  ) {
    super(subscriber);
  }

  produce(shouldYield?: () => boolean) {
    const values = this.values;
    const length = values.length;

    let index = this.index;
    if (this.delay > 0 && index < length && !this.isDisposed) {
      const value = values[index];
      this.notify(value);

      this.index++;
      if (this.index < length) {
        return;
      }
    } else if (shouldYield !== undefined) {
      while (index < length && !this.isDisposed) {
        const value = values[index];
        index++;

        this.notify(value);

        if (shouldYield()) {
          this.index = index;
          return;
        }
      }
    } else {
      while (index < length && !this.isDisposed) {
        const value = values[index];
        index++;

        this.notify(value);
      }
    }
    this.dispose();
  }
}

/**
 * Creates an `ObservableLike` from the given array with a specified `delay` between emitted items.
 * An optional `startIndex` in the array maybe specified,
 *
 * @param values The array.
 * @param options Config object that specifies an optional `delay` between emitted items and
 * an optional `startIndex` into the array.
 */
export function fromArray<T>(
  values: readonly T[],
  options: {
    delay?: number;
    startIndex?: number;
  } = {},
): ObservableLike<T> {
  const delay = Math.max(options.delay ?? 0, 0);
  const startIndex = Math.min(options.startIndex ?? 0, values.length);

  const factory = (subscriber: SubscriberLike<T>) =>
    new FromArrayProducer(subscriber, values, startIndex, delay);

  return createScheduledObservable(factory, delay === 0);
}
