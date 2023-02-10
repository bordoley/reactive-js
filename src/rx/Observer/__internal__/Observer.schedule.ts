import { Function1, SideEffect, pipe } from "../../../functions";
import { ObserverLike } from "../../../rx";
import { ContinuationLike } from "../../../scheduling";
import Scheduler_schedule from "../../../scheduling/Scheduler/__internal__/Scheduler.schedule";
import { DisposableLike } from "../../../util";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo";
import getScheduler from "./Observer.getScheduler";

const Observer_schedule =
  (
    f: SideEffect | ContinuationLike,
    options?: { readonly delay?: number },
  ): Function1<ObserverLike<unknown>, DisposableLike> =>
  observer =>
    pipe(
      observer,
      getScheduler,
      Scheduler_schedule(f, options),
      Disposable_addTo(observer),
    );

export default Observer_schedule;
