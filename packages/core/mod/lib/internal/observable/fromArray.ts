import { dispose } from "../../disposable.ts";
import { Function } from "../../functions.ts";
import { schedule } from "../../scheduler.ts";
import { SchedulerLike } from "../scheduler/interfaces.ts";
import { ObservableLike, ObserverLike } from "./interfaces.ts";
import {
  createScheduledObservable,
  createDelayedScheduledObservable,
} from "./observable.ts";
import { AbstractProducer } from "./producer.ts";

class FromArrayProducer<T> extends AbstractProducer<T> {
  private index = this.startIndex;

  constructor(
    observer: ObserverLike<T>,
    private readonly values: readonly T[],
    private readonly startIndex: number,
    readonly delay: number,
  ) {
    super(observer);
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
        schedule(scheduler, this, this);
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
): Function<readonly T[], ObservableLike<T>> => values => {
  const delay = Math.max(options.delay ?? 0, 0);
  const startIndex = Math.min(options.startIndex ?? 0, values.length);

  const factory = (observer: ObserverLike<T>) =>
    new FromArrayProducer(observer, values, startIndex, delay);

  return delay > 0
    ? createDelayedScheduledObservable(factory, delay)
    : createScheduledObservable(factory, true);
};
