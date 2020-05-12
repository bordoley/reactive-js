import { dispose } from "../../disposable.ts";
import { Operator } from "../../functions.ts";
import { SchedulerLike } from "../scheduler/interfaces.ts";
import { ObservableLike, SubscriberLike } from "./interfaces.ts";
import {
  createScheduledObservable,
  createDelayedScheduledObservable,
} from "./observable.ts";
import { AbstractProducer } from "./producer.ts";

class FromArrayProducer<T> extends AbstractProducer<T> {
  private index = this.startIndex;

  constructor(
    subscriber: SubscriberLike<T>,
    private readonly values: readonly T[],
    private readonly startIndex: number,
    readonly delay: number,
  ) {
    super(subscriber);
  }

  produce(scheduler: SchedulerLike) {
    const delay = this.delay;
    const values = this.values;
    const length = values.length;

    let index = this.index;
    let isDisposed = this.isDisposed;

    while (index < length && !isDisposed) {
      this.notify(values[index]);
      index++;

      isDisposed = this.isDisposed;
      if (
        index < length &&
        !isDisposed &&
        (delay > 0 || scheduler.shouldYield())
      ) {
        this.index = index;
        scheduler.schedule(this, this);
        return;
      }
    }

    dispose(this);
  }
}

/**
 * Creates an `ObservableLike` from the given array with a specified `delay` between emitted items.
 * An optional `startIndex` in the array maybe specified,
 *
 * @param options Config object that specifies an optional `delay` between emitted items and
 * an optional `startIndex` into the array.
 */
export const fromArray = <T>(
  options: {
    delay?: number;
    startIndex?: number;
  } = {},
): Operator<readonly T[], ObservableLike<T>> => values => {
  const delay = Math.max(options.delay ?? 0, 0);
  const startIndex = Math.min(options.startIndex ?? 0, values.length);

  const factory = (subscriber: SubscriberLike<T>) =>
    new FromArrayProducer(subscriber, values, startIndex, delay);

  return delay > 0
    ? createDelayedScheduledObservable(factory, delay)
    : createScheduledObservable(factory, true);
};
