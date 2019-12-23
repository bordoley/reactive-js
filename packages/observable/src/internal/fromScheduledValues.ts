import { ObservableLike, SubscriberLike } from "@reactive-js/rx";
import {
  SchedulerContinuationLike,
  SchedulerContinuationResultLike,
} from "@reactive-js/scheduler";
import { defer } from "./defer";

class FromScheduledValuesObservable<T> implements ObservableLike<T> {
  private subscriber: SubscriberLike<T> | undefined;
  private index = 0;

  constructor(private readonly values: ReadonlyArray<[number, T]>) {}

  private loop(
    shouldYield: () => boolean,
  ): SchedulerContinuationResultLike | void {
    const subscriber = this.subscriber as SubscriberLike<T>;
    const values = this.values;

    let index = this.index;
    while (index < values.length && !subscriber.isDisposed) {
      const [, value] = values[index];
      index++;
      subscriber.next(value);

      if (index < values.length) {
        const delay = values[index][0] || 0;

        if (delay > 0 || shouldYield()) {
          this.index = index;
          return { continuation: this.continuation, delay };
        }
      }
    }
    return;
  }

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

  subscribe(subscriber: SubscriberLike<T>) {
    this.subscriber = subscriber;

    const [delay] = this.values[0];
    subscriber.schedule(this.continuation, delay);
  }
}

export function fromScheduledValues<T>(
  value: [number, T],
  ...values: Array<[number, T]>
): ObservableLike<T>;
export function fromScheduledValues<T>(
  ...values: Array<[number, T]>
): ObservableLike<T> {
  return defer(() => new FromScheduledValuesObservable(values));
}
