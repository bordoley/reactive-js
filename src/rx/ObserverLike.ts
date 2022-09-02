import { Function1, SideEffect, pipe } from "../functions";
import {
  ObserverLike,
  ObserverLike_dispatcher,
  ObserverLike_scheduler,
} from "../rx";
import { DispatcherLike, SchedulerLike } from "../scheduling";
import { schedule as scheduleOnScheduler } from "../scheduling/SchedulerLike";
import { ContinuationLike, DisposableLike } from "../util";
import { addTo } from "../util/DisposableLike";

export const getScheduler = <T>(observer: ObserverLike<T>): SchedulerLike =>
  observer[ObserverLike_scheduler];

export const getDispatcher = <T>(
  observer: ObserverLike<T>,
): DispatcherLike<T> => observer[ObserverLike_dispatcher];

export const schedule =
  (
    f: SideEffect | ContinuationLike,
    options?: { readonly delay?: number },
  ): Function1<ObserverLike<unknown>, DisposableLike> =>
  observer =>
    pipe(
      observer,
      getScheduler,
      scheduleOnScheduler(f, options),
      addTo(observer),
    );
