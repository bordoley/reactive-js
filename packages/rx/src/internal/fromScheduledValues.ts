import {
  SchedulerContinuationLike,
  SchedulerContinuationResultLike,
} from "@reactive-js/scheduler";
import { defer } from "./defer";
import { ObservableLike, SubscriberLike } from "./interfaces";
import { producerMixin } from "./producer";

class FromScheduledValuesObservable<T>
  implements ObservableLike<T>, SchedulerContinuationLike {
  private index = 0;
  readonly run = producerMixin.run;
  private subscriber: SubscriberLike<T> | undefined;

  constructor(private readonly values: ReadonlyArray<[number, T]>) {}

  loop(shouldYield?: () => boolean): SchedulerContinuationResultLike | void {
    const subscriber = this.subscriber as SubscriberLike<T>;
    const values = this.values;

    let index = this.index;
    while (index < values.length && !subscriber.isDisposed) {
      const [, value] = values[index];
      index++;
      subscriber.notifyNext(value);

      if (index < values.length) {
        const delay = values[index][0] || 0;

        if (delay > 0 || (shouldYield !== undefined && shouldYield())) {
          this.index = index;
          return { continuation: this, delay };
        }
      }
    }
    subscriber.dispose();
    return;
  }

  subscribe(subscriber: SubscriberLike<T>) {
    this.subscriber = subscriber;

    const [delay] = this.values[0];
    subscriber.schedule(this, delay);
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
