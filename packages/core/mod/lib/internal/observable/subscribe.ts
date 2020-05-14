import { DisposableLike } from "../../disposable.ts";
import { Function } from "../../functions.ts";
import { SchedulerLike } from "../../scheduler.ts";
import { ObservableLike } from "./interfaces.ts";
import {
  AbstractObserver,
  assertObserverNotifyInContinuation,
} from "./observer.ts";

class DefaultObserver<T> extends AbstractObserver<T> {
  notify(_: T) {
    assertObserverNotifyInContinuation(this);
  }
}

/**
 * Safely subscribes to an `ObservableLike` with a `ObserverLike` instance
 * using the provided scheduler. The returned `DisposableLike`
 * may used to cancel the subscription.
 *
 * @param scheduler The SchedulerLike instance that should be used by the source to notify it's observer.
 */
export const subscribe = <T>(
  scheduler: SchedulerLike,
): Function<ObservableLike<T>, DisposableLike> => (
  observable: ObservableLike<T>,
): DisposableLike => {
  const observer = new DefaultObserver(scheduler);
  observable.observe(observer);
  return observer;
};
