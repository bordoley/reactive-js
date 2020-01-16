import {
  EnumerableObservableLike,
  ObservableLike,
  SubscriberLike,
} from "./interfaces";
import { SchedulerContinuationLike } from "@reactive-js/scheduler";
import { producerMixin } from "./producer";
import { enumerableMixin } from "./enumerableObservable";

class FromArrayProducer<T> implements SchedulerContinuationLike {
  private index = this.startIndex;

  run = producerMixin.run;
  constructor(
    private readonly subscriber: SubscriberLike<T>,
    private readonly values: readonly T[],
    private readonly startIndex: number,
    readonly delay: number,
  ) {}

  produce(shouldYield?: () => boolean): SchedulerContinuationLike | void {
    const values = this.values;
    const length = values.length;
    const subscriber = this.subscriber;

    let index = this.index;
    if (this.delay > 0 && index < length && !subscriber.isDisposed) {
      const value = values[index];
      this.index++;

      subscriber.notify(value);
      return this;
    } else if (shouldYield !== undefined) {
      while (index < length && !subscriber.isDisposed) {
        const value = values[index];
        index++;

        subscriber.notify(value);

        if (shouldYield()) {
          this.index = index;
          return this;
        }
      }
    } else {
      while (index < length && !subscriber.isDisposed) {
        const value = values[index];
        index++;

        subscriber.notify(value);
      }
    }

    subscriber.dispose();
    return;
  }
}

class FromArrayObservable<T> implements ObservableLike<T> {
  constructor(
    private readonly values: readonly T[],
    private readonly startIndex: number,
    private readonly delay: number,
  ) {}

  subscribe(subscriber: SubscriberLike<T>) {
    const producer = new FromArrayProducer(
      subscriber,
      this.values,
      this.startIndex,
      this.delay,
    );
    subscriber.schedule(producer);
  }
}

class FromArrayEnumerable<T> extends FromArrayObservable<T>
  implements EnumerableObservableLike<T> {
  readonly [Symbol.iterator] = enumerableMixin[Symbol.iterator];
  readonly enumerate = enumerableMixin.enumerate;

  constructor(values: readonly T[], startIndex: number) {
    super(values, startIndex, 0);
  }
}

/**
 * Creates an `EnumerableObservableLike` from the given array, starting at the `startIndex` if specified.
 *
 * @param values The array.
 * @param options Optional config object that specifies the `startIndex` into the array.
 */
export function fromArray<T>(
  values: readonly T[],
  options?: {
    startIndex: number;
  },
): EnumerableObservableLike<T>;

/**
 * Creates an `ObservableLike` from the given array with a specified `delay` between emitted items.
 * An optional `startIndex` in the array maybe specified,
 *
 * @param values The array.
 * @param options Config object that includes a the specified `delay` between emitted items and
 * an optional `startIndex` into the array.
 */
export function fromArray<T>(
  values: readonly T[],
  options: {
    delay: number;
    startIndex?: number;
  },
): ObservableLike<T>;

export function fromArray<T>(
  values: readonly T[],
  options: {
    delay?: number;
    startIndex?: number;
  } = {},
): ObservableLike<T> {
  const delay = Math.max(options.delay ?? 0, 0);
  const startIndex = Math.min(options.startIndex ?? 0, values.length);

  return delay > 0
    ? new FromArrayObservable(values, startIndex, delay)
    : new FromArrayEnumerable(values, startIndex);
}
