import { DisposableLike, addTo } from "../disposable";
import { Function1, pipe } from "../functions";
import { ObservableLike } from "../observable";
import { SchedulerLike } from "../scheduler";
import { sourceFrom } from "../source";
import { Observer } from "./observer";

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
    pipe(new Observer(scheduler), addTo(scheduler), sourceFrom(observable));
