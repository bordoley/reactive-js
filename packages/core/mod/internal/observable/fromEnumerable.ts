import { dispose } from "../../disposable.ts";
import { EnumeratorLike, EnumerableLike, enumerate } from "../../enumerable.ts";
import { Operator } from "../../functions.ts";
import { SchedulerLike } from "../scheduler/interfaces.ts";
import { ObservableLike, SubscriberLike } from "./interfaces.ts";
import {
  createScheduledObservable,
  createDelayedScheduledObservable,
} from "./observable.ts";
import { AbstractProducer } from "./producer.ts";
import { schedule } from "../../scheduler.ts";

class FromEnumeratorProducer<T> extends AbstractProducer<T> {
  constructor(
    subscriber: SubscriberLike<T>,
    private readonly enumerator: EnumeratorLike<T>,
    readonly delay: number,
  ) {
    super(subscriber);
  }

  produce(scheduler: SchedulerLike) {
    const delay = this.delay;
    const enumerator = this.enumerator;

    let isDisposed = this.isDisposed;

    while (enumerator.move() && !isDisposed) {
      this.notify(enumerator.current);

      isDisposed = this.isDisposed;
      if (!isDisposed && (delay > 0 || scheduler.shouldYield())) {
        schedule(scheduler, this, this);
        return;
      }
    }

    dispose(this);
  }
}

/**
 * Creates an `ObservableLike` which enumerates through the values
 * produced by the provided `EnumeratorLike` with a specified `delay` between emitted items.
 *
 * @param delay The requested delay between emitted items by the observable.
 */
export const fromEnumerator = <T>(
  { delay } = { delay: 0 },
): Operator<EnumeratorLike<T>, ObservableLike<T>> => enumerator => {
  const factory = (subscriber: SubscriberLike<T>) =>
    new FromEnumeratorProducer(subscriber, enumerator, delay);

  return delay > 0
    ? createDelayedScheduledObservable(factory, delay)
    : createScheduledObservable(factory, true);
};

/**
 * Creates an `ObservableLike` which enumerates through the values
 * produced by the provided `Enumerable` with a specified `delay` between emitted items.
 *
 * @param values The `Enumerable`.
 * @param delay The requested delay between emitted items by the observable.
 */
export const fromEnumerable = <T>(
  { delay } = { delay: 0 },
): Operator<EnumerableLike<T>, ObservableLike<T>> => enumerable => {
  const factory = (subscriber: SubscriberLike<T>) => {
    const enumerator = enumerate(enumerable);
    return new FromEnumeratorProducer(subscriber, enumerator, delay);
  };

  return delay > 0
    ? createDelayedScheduledObservable(factory, delay)
    : createScheduledObservable(factory, true);
};
