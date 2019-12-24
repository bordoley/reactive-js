import { ObservableLike, SubscriberLike } from "@reactive-js/rx";
import {
  SchedulerContinuationLike,
  SchedulerContinuationResultLike,
} from "@reactive-js/scheduler";
import { defer } from "./defer";

class FromArrayObservable<T> implements ObservableLike<T> {
  private subscriber: SubscriberLike<T> | undefined;
  private index = 0;

  private readonly continuation: SchedulerContinuationLike = shouldYield => {
    let error = undefined;
    try {
      const result = this.loop(shouldYield);
      if (result !== undefined) {
        return result;
      }
    } catch (cause) {
      error = { cause };
    }

    (this.subscriber as SubscriberLike<T>).complete(error);
    return;
  };

  private readonly continuationResult: SchedulerContinuationResultLike = {
    continuation: this.continuation,
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
    const delay = this.delay;
    const length = values.length;
    const subscriber = this.subscriber as SubscriberLike<T>;

    for (let index = this.index; index < length && !subscriber.isDisposed; ) {
      const value = values[index];
      index++;

      subscriber.next(value);

      if (shouldYield() || delay > 0) {
        this.index = index;
        return this.continuationResult;
      }
    }
    return;
  }

  subscribe(subscriber: SubscriberLike<T>) {
    this.subscriber = subscriber;
    subscriber.schedule(this.continuation, this.delay);
  }
}

export const fromArray = <T>(
  values: readonly T[],
  delay = 0,
): ObservableLike<T> => defer(() => new FromArrayObservable(values, delay));

export const empty = <T>(delay?: number): ObservableLike<T> =>
  fromArray([], delay);

export const ofValue = <T>(value: T, delay?: number): ObservableLike<T> =>
  fromArray([value], delay);
