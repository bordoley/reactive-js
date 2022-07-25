import { Identity, SideEffect1 } from "../functions";
import {
  DispatcherLike_dispatch,
  DispatcherLike_scheduler,
  SchedulerLike,
} from "../scheduling";

export const dispatch =
  <T, TDispatcher extends { [DispatcherLike_dispatch](v: T): void }>(
    v: T,
  ): Identity<TDispatcher> =>
  dispatcher => {
    dispatcher[DispatcherLike_dispatch](v);
    return dispatcher;
  };

export const dispatchTo =
  <T>(dispatcher: { [DispatcherLike_dispatch](v: T): void }): SideEffect1<T> =>
  v =>
    dispatcher[DispatcherLike_dispatch](v);

export const getScheduler = (dispatcher: {
  [DispatcherLike_scheduler]: SchedulerLike;
}): SchedulerLike => dispatcher[DispatcherLike_scheduler];
