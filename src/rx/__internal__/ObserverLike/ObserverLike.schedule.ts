import { Function1, SideEffect, pipe } from "../../../functions";
import { ObserverLike } from "../../../rx";
import { ContinuationLike } from "../../../scheduling";
import SchedulerLike__schedule from "../../../scheduling/__internal__/SchedulerLike/SchedulerLike.schedule";
import { DisposableLike } from "../../../util";
import DisposableLike__addTo from "../../../util/__internal__/DisposableLike/DisposableLike.addTo";
import getScheduler from "./ObserverLike.getScheduler";

const ObserverLike__schedule =
  (
    f: SideEffect | ContinuationLike,
    options?: { readonly delay?: number },
  ): Function1<ObserverLike<unknown>, DisposableLike> =>
  observer =>
    pipe(
      observer,
      getScheduler,
      SchedulerLike__schedule(f, options),
      DisposableLike__addTo(observer),
    );

export default ObserverLike__schedule;
