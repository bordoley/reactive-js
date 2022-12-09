import { SideEffect1, Updater } from "../functions";
import {
  DispatcherLike_dispatch,
  DispatcherLike_scheduler,
  SchedulerLike,
} from "../scheduling";

import { dispatch as DispatcherLike__dispatch } from "./__internal__/DispatcherLike/DispatcherLike.dispatch";
import { dispatchTo as DispatcherLike__dispatchTo } from "./__internal__/DispatcherLike/DispatcherLike.dispatchTo";
import { getScheduler as DispatcherLike__getScheduler } from "./__internal__/DispatcherLike/DispatcherLike.getScheduler";

export const dispatch: <
  T,
  TDispatcher extends { [DispatcherLike_dispatch](v: T): void },
>(
  v: T,
) => Updater<TDispatcher> = DispatcherLike__dispatch;

export const dispatchTo: <T>(dispatcher: {
  [DispatcherLike_dispatch](v: T): void;
}) => SideEffect1<T> = DispatcherLike__dispatchTo;

export const getScheduler: (dispatcher: {
  [DispatcherLike_scheduler]: SchedulerLike;
}) => SchedulerLike = DispatcherLike__getScheduler;
