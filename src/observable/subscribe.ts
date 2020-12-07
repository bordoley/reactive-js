import { DisposableLike } from "../disposable";
import { Function1, SideEffect1, ignore, pipe } from "../functions";
import { ObservableLike } from "../observable";
import { SchedulerLike } from "../scheduler";
import { AbstractObserver, assertObserverState, observe } from "./observer";

class DefaultObserver<T> extends AbstractObserver<T, SchedulerLike> {
  constructor(
    scheduler: SchedulerLike,
    private readonly onNotify: SideEffect1<T>,
  ) {
    super(scheduler);
  }

  notify(next: T) {
    assertObserverState(this);

    this.onNotify(next);
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
  onNotify: SideEffect1<T> = ignore,
): Function1<ObservableLike<T>, DisposableLike> => (
  observable: ObservableLike<T>,
): DisposableLike => {
  const observer = new DefaultObserver(scheduler, onNotify);
  pipe(observable, observe(observer));
  return observer;
};
