import { dispose } from "../../disposable.ts";
import { Function1, Factory } from "../../functions.ts";
import { SchedulerLike } from "../scheduler/interfaces.ts";
import { ObservableLike, ObserverLike } from "./interfaces.ts";
import {
  createScheduledObservable,
  createDelayedScheduledObservable,
} from "./observable.ts";
import { AbstractProducer } from "./producer.ts";

class ThrowsProducer<T> extends AbstractProducer<T> {
  constructor(
    observer: ObserverLike<T>,
    private readonly f: Factory<unknown>,
  ) {
    super(observer);
  }

  continueUnsafe(_: SchedulerLike) {
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
): Function1<Factory<unknown>, ObservableLike<T>> => errorFactory => {
  const factory = (observer: ObserverLike<T>) =>
    new ThrowsProducer(observer, errorFactory);

  return delay > 0
    ? createDelayedScheduledObservable(factory, delay)
    : createScheduledObservable(factory, true);
};
