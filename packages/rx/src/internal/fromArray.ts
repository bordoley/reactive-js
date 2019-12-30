import { defer } from "./defer";
import {
  EnumerableLike,
  EnumeratorLike,
  ObservableLike,
  SubscriberLike,
} from "./interfaces";
import {
  SchedulerContinuationLike,
  SchedulerContinuationResultLike,
} from "@reactive-js/scheduler";
import { producerMixin } from "./producer";
import { disposableMixin, createDisposable } from "@reactive-js/disposable";

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
    return;
  }

  
}

class FromArrayEnumerator<T> implements EnumeratorLike<T> {
  current: any;
  readonly disposable = createDisposable();
  hasCurrent = false;

  add = disposableMixin.add;
dispose = disposableMixin.dispose;
remove = disposableMixin.remove;
constructor(private readonly values: readonly T[], private index: number) {}

  get isDisposed(): boolean {
    return this.disposable.isDisposed;
  }

  

  

  
moveNext(): boolean {
    if (this.hasCurrent) {
      this.index++;
    } else {
      this.hasCurrent = true;
    }

    const values = this.values;
    const index = this.index;

    if (index < values.length) {
      this.current = values[index];
      return true;
    } else {
      this.current = undefined;
      this.hasCurrent = false;
      this.dispose();
      return false;
    }
  }

  
}

class FromArrayObservable<T> implements ObservableLike<T>, EnumerableLike<T> {
  constructor(
    private readonly values: readonly T[],
    private readonly startIndex: number,
  ) {}

  getEnumerator(): EnumeratorLike<T> {
    return new FromArrayEnumerator(this.values, this.startIndex);
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
