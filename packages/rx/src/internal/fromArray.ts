import { EnumerableLike, ObservableLike, SubscriberLike } from "./interfaces";
import {
  SchedulerContinuationLike,
  SchedulerContinuationResultLike,
} from "@reactive-js/scheduler";
import { producerMixin } from "./producer";
import { enumerableMixin } from "./enumerable";

class FromArrayProducer<T> implements SchedulerContinuationLike {
  private index = this.startIndex;

  private readonly continuationResult: SchedulerContinuationResultLike = {
    continuation: this,
    delay: this.delay,
  };

  run = producerMixin.run;
  constructor(
    private readonly subscriber: SubscriberLike<T>,
    private readonly values: readonly T[],
    private readonly startIndex: number,
    private readonly delay: number,
  ) {}

  loop(shouldYield?: () => boolean): SchedulerContinuationResultLike | void {
    const values = this.values;
    const length = values.length;
    const subscriber = this.subscriber;

    let index = this.index;
    if (this.delay > 0 && index < length && !subscriber.isDisposed) {
      const value = values[index];
      this.index++;

      subscriber.notifyNext(value);
      return this.continuationResult;
    } else if (shouldYield !== undefined) {
      while (index < length && !subscriber.isDisposed) {
        const value = values[index];
        index++;

        subscriber.notifyNext(value);

        if (shouldYield()) {
          this.index = index;
          return this.continuationResult;
        }
      }
    } else {
      while (index < length && !subscriber.isDisposed) {
        const value = values[index];
        index++;

        subscriber.notifyNext(value);
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
    subscriber.schedule(producer, this.delay);
  }
}

class FromArrayEnumerable<T> extends FromArrayObservable<T>
  implements EnumerableLike<T> {
  readonly [Symbol.iterator] = enumerableMixin[Symbol.iterator];
  readonly enumerate = enumerableMixin.enumerate;

  constructor(values: readonly T[], startIndex: number) {
    super(values, startIndex, 0);
  }
}

export function fromArray<T>(
  values: readonly T[],
  options?: {
    startIndex: number;
  },
): EnumerableLike<T>;
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
