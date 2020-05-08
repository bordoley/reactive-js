import { ObservableLike, SubscriberLike } from "./interfaces";
import {
  createScheduledObservable,
  createDelayedScheduledObservable,
} from "./observable";
import { AbstractProducer } from "./producer";
import { Operator } from "../../functions";

class ComputeProducer<T> extends AbstractProducer<T> {
  constructor(
    subscriber: SubscriberLike<T>,
    private readonly f: () => T,
    readonly delay: number,
  ) {
    super(subscriber);
  }

  produce(_?: () => boolean): number {
    this.notify(this.f());
    return -1;
  }
}

/**
 *  Creates an `ObservableLike` that emits `value` after the specified `delay` then disposes the subscriber.
 *
 * @param value The value to emit.
 * @param delay The delay before emitting the value.
 */
export const compute = <T>(
  delay = 0,
): Operator<() => T, ObservableLike<T>> => valueFactory => {
  const factory = (subscriber: SubscriberLike<T>) =>
    new ComputeProducer(subscriber, valueFactory, delay);

  return delay > 0
    ? createDelayedScheduledObservable(factory, delay)
    : createScheduledObservable(factory, true);
};
