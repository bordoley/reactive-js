import { Operator } from "../../functions.ts";
import { SchedulerLike } from "../scheduler/interfaces.ts";
import { ObservableLike, SubscriberLike } from "./interfaces.ts";
import {
  createScheduledObservable,
  createDelayedScheduledObservable,
} from "./observable.ts";
import { AbstractProducer } from "./producer.ts";
import { dispose } from "../../disposable.ts";

class ThrowsProducer<T> extends AbstractProducer<T> {
  constructor(
    subscriber: SubscriberLike<T>,
    private readonly f: () => unknown,
    readonly delay: number,
  ) {
    super(subscriber);
  }

  produce(_: SchedulerLike) {
    const cause = this.f();
    dispose(this, { cause });
  }
}

/**
 * Creates an `ObservableLike` that emits no items and immediately disposes its subscription with an error.
 *
 * @param factory Factory function to generate the error to emit.
 * @param delay The delay before disposing the subscription.
 */
export const throws = <T>(
  { delay }: { delay: number } = { delay: 0 },
): Operator<() => unknown, ObservableLike<T>> => errorFactory => {
  const factory = (subscriber: SubscriberLike<T>) =>
    new ThrowsProducer(subscriber, errorFactory, delay);

  return delay > 0
    ? createDelayedScheduledObservable(factory, delay)
    : createScheduledObservable(factory, true);
};
