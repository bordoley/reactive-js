import { SchedulerContinuationLike } from "@reactive-js/scheduler";
import { ObservableLike, SubscriberLike } from "./interfaces";
import { observableMixin } from "./observable";
import { producerMixin } from "./producer";

class FromArrayProducer<T> implements SchedulerContinuationLike {
  private index = this.startIndex;

  readonly run = producerMixin.run;

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
    if (this.delay > 0 && index <= length && !subscriber.isDisposed) {
      if (index < length) {
        const value = values[index];
        subscriber.notify(value);
      }

      this.index++;
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
  readonly enumerate = observableMixin.enumerate;
  readonly isSynchronous: boolean;

  constructor(
    private readonly values: readonly T[],
    private readonly startIndex: number,
    private readonly delay: number,
  ) {
    this.isSynchronous = delay === 0;
  }

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

  return new FromArrayObservable(values, startIndex, delay);
}
