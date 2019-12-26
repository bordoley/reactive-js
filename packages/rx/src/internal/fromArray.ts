import { defer } from "./defer";
import { ObservableLike, SubscriberLike } from "./interfaces";
import {
  SchedulerContinuationLike,
  SchedulerContinuationResultLike,
} from "@reactive-js/scheduler";

class FromArrayObservable<T>
  implements ObservableLike<T>, SchedulerContinuationLike {
  private subscriber: SubscriberLike<T> | undefined;
  private index = 0;

  private readonly continuationResult: SchedulerContinuationResultLike = {
    continuation: this,
    delay: this.delay,
  };

  constructor(
    private readonly values: readonly T[],
    private readonly delay: number,
  ) {}

  private loop(
    shouldYield: () => boolean,
  ): SchedulerContinuationResultLike | void {
    const values = this.values;
    const length = values.length;
    const subscriber = this.subscriber as SubscriberLike<T>;

    let index = this.index;
    while (index < length && !subscriber.isDisposed) {
      const value = values[index];
      index++;

      subscriber.next(value);

      if (shouldYield()) {
        this.index = index;
        return this.continuationResult;
      }
    }
    return;
  }

  private loopFast() {
    const values = this.values;
    const length = values.length;
    const subscriber = this.subscriber as SubscriberLike<T>;

    let index = this.index;
    while (index < length && !subscriber.isDisposed) {
      const value = values[index];
      index++;

      subscriber.next(value);
    }
    return;
  }

  private emitDelayedValue() {
    const values = this.values;
    const subscriber = this.subscriber as SubscriberLike<T>;

    if (this.index < values.length && !subscriber.isDisposed) {
      const value = values[this.index];
      this.index++;

      subscriber.next(value);
      return this.continuationResult;
    } else {
      return;
    }
  }

  run(shouldYield?: () => boolean) {
    let error = undefined;
    try {
      let result: SchedulerContinuationResultLike | void;
      if (this.delay > 0) {
        result = this.emitDelayedValue();
      } else if (shouldYield !== undefined) {
        result = this.loop(shouldYield);
      } else {
        result = this.loopFast();
      }

      if (result !== undefined) {
        return result;
      }
    } catch (cause) {
      error = { cause };
    }

    (this.subscriber as SubscriberLike<T>).complete(error);
    return;
  }

  subscribe(subscriber: SubscriberLike<T>) {
    this.subscriber = subscriber;
    subscriber.schedule(this, this.delay);
  }
}

export const fromArray = <T>(
  values: readonly T[],
  delay = 0,
): ObservableLike<T> => defer(() => new FromArrayObservable(values, delay));

export const ofValue = <T>(value: T, delay?: number): ObservableLike<T> =>
  fromArray([value], delay);
