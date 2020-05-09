import { Operator } from "../../functions.ts";
import { SchedulerLike } from "../scheduler/interfaces.ts";
import { ObservableLike, SubscriberLike } from "./interfaces.ts";
import {
  createScheduledObservable,
  createDelayedScheduledObservable,
} from "./observable.ts";
import { AbstractProducer } from "./producer.ts";

class ComputeProducer<T> extends AbstractProducer<T> {
  constructor(
    subscriber: SubscriberLike<T>,
    private readonly f: () => T,
    readonly delay: number,
  ) {
    super(subscriber);
  }

  produce(_: SchedulerLike) {
    this.notify(this.f());
    this.dispose();
  }
}

/**
 *  Creates an `ObservableLike` that emits `value` after the specified `delay` then disposes the subscriber.
 *
 * @param value The value to emit.
 * @param delay The delay before emitting the value.
 */
export const compute = <T>(
  { delay } = { delay: 0 },
): Operator<() => T, ObservableLike<T>> => valueFactory => {
  const factory = (subscriber: SubscriberLike<T>) =>
    new ComputeProducer(subscriber, valueFactory, delay);

  return delay > 0
    ? createDelayedScheduledObservable(factory, delay)
    : createScheduledObservable(factory, true);
};
