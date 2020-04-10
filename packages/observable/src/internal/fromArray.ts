import { alwaysTrue } from "./functions";
import { ObservableLike, SubscriberLike } from "./interfaces";
import {
  createScheduledObservable,
  createDelayedScheduledObservable,
} from "./observable";
import { AbstractProducer } from "./producer";

class FromArrayProducer<T> extends AbstractProducer<T> {
  private index = this.startIndex;

  constructor(
    subscriber: SubscriberLike<T>,
    private readonly values: readonly T[],
    private readonly startIndex: number,
    private readonly delay: number,
  ) {
    super(subscriber);
  }

  produce(shouldYield?: () => boolean): number {
    const delay = this.delay;
    const values = this.values;
    const length = values.length;

    let index = this.index;
    if (delay > 0 || shouldYield !== undefined) {
      let isDisposed = this.isDisposed;
      shouldYield = shouldYield || alwaysTrue;

      while (index < length && !isDisposed) {
        this.notify(values[index]);
        index++;

        isDisposed = this.isDisposed;
        if (index < length && !isDisposed && (delay > 0 || shouldYield())) {
          this.index = index;
          return delay;
        }
      }
    } else {
      while (index < length && !this.isDisposed) {
        this.notify(values[index]);
        index++;
      }
    }
    return -1;
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

  return delay > 0
    ? createDelayedScheduledObservable(factory, delay)
    : createScheduledObservable(factory, true);
}
