import { dispose } from "../../disposable";
import { EnumeratorLike, EnumerableLike, enumerate } from "../../enumerable";
import { Function } from "../../functions";
import { schedule } from "../../scheduler";
import { SchedulerLike } from "../scheduler/interfaces";
import { ObservableLike, ObserverLike } from "./interfaces";
import {
  createScheduledObservable,
  createDelayedScheduledObservable,
} from "./observable";
import { AbstractProducer } from "./producer";

class FromEnumeratorProducer<T> extends AbstractProducer<T> {
  constructor(
    observer: ObserverLike<T>,
    private readonly enumerator: EnumeratorLike<T>,
    readonly delay: number,
  ) {
    super(observer);
  }

  continueUnsafe(scheduler: SchedulerLike) {
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
): Function<EnumeratorLike<T>, ObservableLike<T>> => enumerator => {
  const factory = (observer: ObserverLike<T>) =>
    new FromEnumeratorProducer(observer, enumerator, delay);

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
): Function<EnumerableLike<T>, ObservableLike<T>> => enumerable => {
  const factory = (observer: ObserverLike<T>) => {
    const enumerator = enumerate(enumerable);
    return new FromEnumeratorProducer(observer, enumerator, delay);
  };

  return delay > 0
    ? createDelayedScheduledObservable(factory, delay)
    : createScheduledObservable(factory, true);
};
