import { Operator, Factory } from "../../functions";
import { SchedulerLike } from "../scheduler/interfaces";
import { ObservableLike, SubscriberLike } from "./interfaces";
import {
  createScheduledObservable,
  createDelayedScheduledObservable,
} from "./observable";
import { AbstractProducer } from "./producer";
import { dispose } from "../../disposable";

class ThrowsProducer<T> extends AbstractProducer<T> {
  constructor(
    subscriber: SubscriberLike<T>,
    private readonly f: Factory<unknown>,
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
): Operator<Factory<unknown>, ObservableLike<T>> => errorFactory => {
  const factory = (subscriber: SubscriberLike<T>) =>
    new ThrowsProducer(subscriber, errorFactory, delay);

  return delay > 0
    ? createDelayedScheduledObservable(factory, delay)
    : createScheduledObservable(factory, true);
};
