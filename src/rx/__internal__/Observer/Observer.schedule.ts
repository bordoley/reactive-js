import { Function1, SideEffect, pipe } from "../../../functions";
import { ObserverLike } from "../../../rx";
import { ContinuationLike } from "../../../scheduling";
import Scheduler$schedule from "../../../scheduling/__internal__/Scheduler/Scheduler.schedule";
import { DisposableLike } from "../../../util";
import Disposable$addTo from "../../../util/__internal__/Disposable/Disposable.addTo";
import getScheduler from "./Observer.getScheduler";

const Observer$schedule =
  (
    f: SideEffect | ContinuationLike,
    options?: { readonly delay?: number },
  ): Function1<ObserverLike<unknown>, DisposableLike> =>
  observer =>
    pipe(
      observer,
      getScheduler,
      Scheduler$schedule(f, options),
      Disposable$addTo(observer),
    );

export default Observer$schedule;
