import { dispose } from "../../disposable";
import { Function, Factory } from "../../functions";
import { SchedulerLike } from "../scheduler/interfaces";
import { ObservableLike, ObserverLike } from "./interfaces";
import {
  createScheduledObservable,
  createDelayedScheduledObservable,
} from "./observable";
import { AbstractProducer } from "./producer";

class ThrowsProducer<T> extends AbstractProducer<T> {
  constructor(
    observer: ObserverLike<T>,
    private readonly f: Factory<unknown>,
    readonly delay: number,
  ) {
    super(observer);
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
): Function<Factory<unknown>, ObservableLike<T>> => errorFactory => {
  const factory = (observer: ObserverLike<T>) =>
    new ThrowsProducer(observer, errorFactory, delay);

  return delay > 0
    ? createDelayedScheduledObservable(factory, delay)
    : createScheduledObservable(factory, true);
};
