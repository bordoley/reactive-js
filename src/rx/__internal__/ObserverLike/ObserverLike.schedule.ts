import { Function1, SideEffect, pipe } from "../../../functions";
import { ObserverLike } from "../../../rx";
import { ContinuationLike } from "../../../scheduling";
import { schedule as SchedulerLike__schedule } from "../../../scheduling/SchedulerLike";
import { DisposableLike } from "../../../util";
import { addTo } from "../../../util/DisposableLike";
import getScheduler from "./ObserverLike.getScheduler";

const schedule =
  (
    f: SideEffect | ContinuationLike,
    options?: { readonly delay?: number },
  ): Function1<ObserverLike<unknown>, DisposableLike> =>
  observer =>
    pipe(
      observer,
      getScheduler,
      SchedulerLike__schedule(f, options),
      addTo(observer),
    );

export default schedule;
