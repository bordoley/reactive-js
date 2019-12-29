import { defer } from "./defer";
import {
  EnumerableLike,
  EnumeratorLike,
  createObservableEnumerator,
} from "./enumerable";
import { ObservableLike, SubscriberLike } from "./interfaces";
import {
  SchedulerContinuationLike,
  SchedulerContinuationResultLike,
} from "@reactive-js/scheduler";

class FromArrayWithDelayObservable<T>
  implements ObservableLike<T>, SchedulerContinuationLike {
  private subscriber: SubscriberLike<T> | undefined;
  private index = this.startIndex;

  private readonly continuationResult: SchedulerContinuationResultLike = {
    continuation: this,
    delay: this.delay,
  };

  constructor(
    private readonly values: readonly T[],
    private readonly delay: number,
    private readonly startIndex: number,
  ) {}

  run(_?: () => boolean) {
    let error = undefined;
    try {
      const values = this.values;
      const subscriber = this.subscriber as SubscriberLike<T>;

      if (this.index < values.length && !subscriber.isDisposed) {
        const value = values[this.index];
        this.index++;

        subscriber.next(value);
        return this.continuationResult;
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

class FromArrayProducer<T> implements SchedulerContinuationLike {
  private index = this.startIndex;

  private readonly continuationResult: SchedulerContinuationResultLike = {
    continuation: this,
  };

  constructor(
    private readonly subscriber: SubscriberLike<T>,
    private readonly values: readonly T[],
    private readonly startIndex: number,
  ) {}

  private loop(
    shouldYield: () => boolean,
  ): SchedulerContinuationResultLike | void {
    const values = this.values;
    const length = values.length;
    const subscriber = this.subscriber;

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
    const subscriber = this.subscriber;

    let index = this.index;
    while (index < length && !subscriber.isDisposed) {
      const value = values[index];
      index++;

      subscriber.next(value);
    }
    return;
  }

  run(shouldYield?: () => boolean) {
    let error = undefined;
    try {
      let result: SchedulerContinuationResultLike | void;
      if (shouldYield !== undefined) {
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

    this.subscriber.complete(error);
    return;
  }
}

class FromArrayObservable<T> implements ObservableLike<T>, EnumerableLike<T> {
  constructor(
    private readonly values: readonly T[],
    private readonly startIndex: number,
  ) {}

  getEnumerator(): EnumeratorLike<T> {
    return createObservableEnumerator(this);
  }

  subscribe(subscriber: SubscriberLike<T>) {
    const producer = new FromArrayProducer(
      subscriber,
      this.values,
      this.startIndex,
    );
    subscriber.schedule(producer);
  }
}

export const fromArray = <T>(
  values: readonly T[],
  options: {
    delay?: number;
    startIndex?: number;
  } = {},
): ObservableLike<T> => {
  const delay = Math.max(options.delay ?? 0, 0);
  const startIndex = Math.min(options.startIndex ?? 0, values.length);

  return delay > 0
    ? defer(() => new FromArrayWithDelayObservable(values, delay, startIndex))
    : new FromArrayObservable(values, startIndex);
};

export const ofValue = <T>(value: T, delay?: number): ObservableLike<T> =>
  fromArray([value], { delay });
