import { Function1, SideEffect1, pipe } from "../../../functions.js";
import { DispatcherLike_scheduler, ObserverLike } from "../../../rx.js";
import {
  ContinuationContextLike,
  SchedulerLike_schedule,
} from "../../../scheduling.js";
import { DisposableLike } from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";

const Observer_schedule =
  (
    f: SideEffect1<ContinuationContextLike>,
    options?: { readonly delay?: number },
  ): Function1<ObserverLike, DisposableLike> =>
  observer =>
    pipe(
      observer[DispatcherLike_scheduler][SchedulerLike_schedule](f, options),
      Disposable_addTo(observer),
    );

export default Observer_schedule;
