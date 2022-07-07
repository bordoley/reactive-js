import { DisposableLike, addTo } from "../disposable";
import { Function1, newInstanceWith, pipe } from "../functions";
import { ObservableLike } from "../observable";
import { Observer } from "../observer";
import { sourceFrom } from "../reactiveContainer";
import { SchedulerLike } from "../scheduler";

/**
 * Safely subscribes to an `ObservableLike` with a `ObserverLike` instance
 * using the provided scheduler. The returned `DisposableLike`
 * may used to cancel the subscription.
 *
 * @param scheduler The SchedulerLike instance that should be used by the source to notify it's observer.
 */
export const subscribe =
  <T>(scheduler: SchedulerLike): Function1<ObservableLike<T>, DisposableLike> =>
  observable =>
    pipe(
      Observer,
      newInstanceWith(scheduler),
      addTo(scheduler, true),
      sourceFrom(observable),
    );
