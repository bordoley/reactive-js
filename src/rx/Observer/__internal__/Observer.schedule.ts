import { Function1, SideEffect, pipe } from "../../../functions.js";
import { ObserverLike, ObserverLike_scheduler } from "../../../rx.js";
import Scheduler_schedule from "../../../scheduling/Scheduler/__internal__/Scheduler.schedule.js";
import { DisposableLike } from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";

const Observer_schedule =
  (
    f: SideEffect,
    options?: { readonly delay?: number },
  ): Function1<ObserverLike<unknown>, DisposableLike> =>
  observer =>
    pipe(
      observer[ObserverLike_scheduler],
      Scheduler_schedule(f, options),
      Disposable_addTo(observer),
    );

export default Observer_schedule;
