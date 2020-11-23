import { DisposableLike } from "../../disposable";
import { Function1, pipe } from "../../functions";
import { SchedulerLike } from "../../scheduler";
import { ObservableLike } from "../../observable";
import { observe } from "./observable";
import { AbstractObserver, assertObserverState } from "./observer";

class DefaultObserver<T> extends AbstractObserver<T, SchedulerLike> {
  notify(_: T) {
    assertObserverState(this);
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
): Function1<ObservableLike<T>, DisposableLike> => (
  observable: ObservableLike<T>,
): DisposableLike => {
  const observer = new DefaultObserver(scheduler);
  pipe(observable, observe(observer));
  return observer;
};
