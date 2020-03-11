import { SchedulerContinuationLike } from "@reactive-js/scheduler";
import { ObservableLike, SubscriberLike } from "./interfaces";
import { observableMixin } from "./observable";
import { producerMixin } from "./producer";

class FromScheduledValuesProducer<T> implements SchedulerContinuationLike {
  private index = 0;
  delay: number;

  readonly run = producerMixin.run;

  constructor(
    private subscriber: SubscriberLike<T>,
    private readonly values: ReadonlyArray<[number, T]>,
  ) {
    const [delay] = this.values[0];
    this.delay = delay;
  }

  produce(shouldYield?: () => boolean): SchedulerContinuationLike | void {
    const subscriber = this.subscriber as SubscriberLike<T>;
    const values = this.values;

    let index = this.index;
    while (index < values.length && !subscriber.isDisposed) {
      const [, value] = values[index];
      index++;
      subscriber.notify(value);

      if (index < values.length) {
        const delay = values[index][0] || 0;

        if (delay > 0 || (shouldYield !== undefined && shouldYield())) {
          this.index = index;
          this.delay = delay;
          return this;
        }
      }
    }
    subscriber.dispose();
    return;
  }
}

class FromScheduledValuesObservable<T> implements ObservableLike<T> {
  readonly enumerate = observableMixin.enumerate;
  readonly isSynchronous = false;

  constructor(private readonly values: ReadonlyArray<[number, T]>) {}

  subscribe(subscriber: SubscriberLike<T>) {
    const producer = new FromScheduledValuesProducer(subscriber, this.values);
    subscriber.schedule(producer);
  }
}

/**
 * Creates an `ObservableLike` from a series of [delay, value] tuples.
 * The delay is relative to the current time.
 */
export function fromScheduledValues<T>(
  value: [number, T],
  ...values: Array<[number, T]>
): ObservableLike<T>;

export function fromScheduledValues<T>(
  ...values: Array<[number, T]>
): ObservableLike<T> {
  return new FromScheduledValuesObservable(values);
}
