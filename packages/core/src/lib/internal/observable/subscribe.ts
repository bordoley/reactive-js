import { DisposableLike } from "../../disposable";
import { Function } from "../../functions";
import { SchedulerLike } from "../../scheduler";
import { ObservableLike } from "./interfaces";
import {
  AbstractObserver,
  assertObserverNotifyInContinuation,
} from "./observer";

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
