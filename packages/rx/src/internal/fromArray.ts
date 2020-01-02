import { defer } from "./defer";
import { EnumerableLike, ObservableLike, SubscriberLike } from "./interfaces";
import {
  SchedulerContinuationLike,
  SchedulerContinuationResultLike,
} from "@reactive-js/scheduler";
import { producerMixin } from "./producer";
import { enumerableMixin } from "./enumerable";

class FromArrayWithDelayObservable<T>
  implements ObservableLike<T>, SchedulerContinuationLike {
  private readonly continuationResult: SchedulerContinuationResultLike = {
    continuation: this,
    delay: this.delay,
  };
  private index = this.startIndex;
  readonly run = producerMixin.run;
  private subscriber: SubscriberLike<T> | undefined;

  constructor(
    private readonly values: readonly T[],
    private readonly delay: number,
    private readonly startIndex: number,
  ) {}

  loop(_?: () => boolean) {
    const values = this.values;
    const subscriber = this.subscriber as SubscriberLike<T>;

    if (this.index < values.length && !subscriber.isDisposed) {
      const value = values[this.index];
      this.index++;

      subscriber.next(value);
      return this.continuationResult;
    } else {
      subscriber.complete();
      return;
    }
  }

  subscribe(subscriber: SubscriberLike<T>) {
    this.subscriber = subscriber;
    subscriber.schedule(this, this.delay);
  }
}

class FromArrayProducer<T> implements SchedulerContinuationLike {
  private index = this.startIndex;

  private readonly continuationResult: SchedulerContinuationResultLike = {
    continuation: this,
  };

  run = producerMixin.run;
  constructor(
    private readonly subscriber: SubscriberLike<T>,
    private readonly values: readonly T[],
    private readonly startIndex: number,
  ) {}

  loop(shouldYield?: () => boolean): SchedulerContinuationResultLike | void {
    const values = this.values;
    const length = values.length;
    const subscriber = this.subscriber;

    let index = this.index;
    if (shouldYield !== undefined) {
      while (index < length && !subscriber.isDisposed) {
        const value = values[index];
        index++;

        subscriber.next(value);

        if (shouldYield()) {
          this.index = index;
          return this.continuationResult;
        }
      }
    } else {
      while (index < length && !subscriber.isDisposed) {
        const value = values[index];
        index++;

        subscriber.next(value);
      }
    }

    subscriber.complete();
    return;
  }
}

class FromArrayEnumerable<T> implements EnumerableLike<T> {
  readonly [Symbol.iterator] = enumerableMixin[Symbol.iterator];
  readonly enumerate = enumerableMixin.enumerate;

  constructor(
    private readonly values: readonly T[],
    private readonly startIndex: number,
  ) {}

  subscribe(subscriber: SubscriberLike<T>) {
    const producer = new FromArrayProducer(
      subscriber,
      this.values,
      this.startIndex,
    );
    subscriber.schedule(producer);
  }
}

export function fromArray <T>(
  values: readonly T[],
  options?: {
    startIndex: number;
  },
): ObservableLike<T>;
export function fromArray <T>(
  values: readonly T[],
  options: {
    delay: number;
    startIndex?: number;
  },
): EnumerableLike<T>;
export function fromArray <T>(
  values: readonly T[],
  options: {
    delay?: number;
    startIndex?: number;
  } = {},
): ObservableLike<T> {
  const delay = Math.max(options.delay ?? 0, 0);
  const startIndex = Math.min(options.startIndex ?? 0, values.length);

  return delay > 0
    ? defer(() => new FromArrayWithDelayObservable(values, delay, startIndex))
    : new FromArrayEnumerable(values, startIndex);
};
