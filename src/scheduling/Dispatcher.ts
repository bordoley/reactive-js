import { SideEffect1, Updater } from "../functions.js";
import {
  DispatcherLike_dispatch,
  DispatcherLike_scheduler,
  SchedulerLike,
} from "../scheduling.js";

import Dispatcher_dispatch from "./Dispatcher/__internal__/Dispatcher.dispatch.js";
import Dispatcher_dispatchTo from "./Dispatcher/__internal__/Dispatcher.dispatchTo.js";
import Dispatcher_getScheduler from "./Dispatcher/__internal__/Dispatcher.getScheduler.js";

export const dispatch: <
  T,
  TDispatcher extends { [DispatcherLike_dispatch](v: T): void },
>(
  v: T,
) => Updater<TDispatcher> = Dispatcher_dispatch;

export const dispatchTo: <T>(dispatcher: {
  [DispatcherLike_dispatch](v: T): void;
}) => SideEffect1<T> = Dispatcher_dispatchTo;

export const getScheduler: (dispatcher: {
  [DispatcherLike_scheduler]: SchedulerLike;
}) => SchedulerLike = Dispatcher_getScheduler;
