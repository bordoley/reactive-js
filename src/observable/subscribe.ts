import { DisposableLike, addTo } from "../disposable";
import { Function1, SideEffect1, ignore, pipe } from "../functions";
import { ObservableLike } from "../observable";
import { none } from "../option";
import { SchedulerLike } from "../scheduler";
import { sinkInto } from "../source";
import { Observer } from "./observer";

class DefaultObserver<T> extends Observer<T> {
  constructor(
    scheduler: SchedulerLike,
    private readonly onNotify: SideEffect1<T>,
    private readonly onNotifyThis: unknown,
  ) {
    super(scheduler);
  }

  notify(next: T) {
    this.assertState();

    this.onNotify.call(this.onNotifyThis, next);
  }
}

/**
 * Safely subscribes to an `ObservableLike` with a `ObserverLike` instance
 * using the provided scheduler. The returned `DisposableLike`
 * may used to cancel the subscription.
 *
 * @param scheduler The SchedulerLike instance that should be used by the source to notify it's observer.
 */
export function subscribe<T>(
  scheduler: SchedulerLike,
): Function1<ObservableLike<T>, DisposableLike>;
export function subscribe<T>(
  scheduler: SchedulerLike,
  onNotify: SideEffect1<T>,
): Function1<ObservableLike<T>, DisposableLike>;
export function subscribe<This, T>(
  scheduler: SchedulerLike,
  onNotify: (this: This, value: T) => void,
  onNotifyThis: This,
): Function1<ObservableLike<T>, DisposableLike>;
export function subscribe<T>(
  scheduler: SchedulerLike,
  onNotify: SideEffect1<T> = ignore,
  onNotifyThis: unknown = none,
): Function1<ObservableLike<T>, DisposableLike> {
  return (observable: ObservableLike<T>): DisposableLike => {
    const observer = pipe(
      new DefaultObserver(scheduler, onNotify, onNotifyThis),
      addTo(scheduler),
    );

    pipe(observable, sinkInto(observer));
    return observer;
  };
}
