import { SideEffect1, Updater } from "../functions";
import {
  DispatcherLike_dispatch,
  DispatcherLike_scheduler,
  SchedulerLike,
} from "../scheduling";

import Dispatcher$dispatch from "./__internal__/Dispatcher/Dispatcher.dispatch";
import Dispatcher$dispatchTo from "./__internal__/Dispatcher/Dispatcher.dispatchTo";
import Dispatcher$getScheduler from "./__internal__/Dispatcher/Dispatcher.getScheduler";

export const dispatch: <
  T,
  TDispatcher extends { [DispatcherLike_dispatch](v: T): void },
>(
  v: T,
) => Updater<TDispatcher> = Dispatcher$dispatch;

export const dispatchTo: <T>(dispatcher: {
  [DispatcherLike_dispatch](v: T): void;
}) => SideEffect1<T> = Dispatcher$dispatchTo;

export const getScheduler: (dispatcher: {
  [DispatcherLike_scheduler]: SchedulerLike;
}) => SchedulerLike = Dispatcher$getScheduler;
