import { SideEffect1, Updater } from "../functions";
import {
  DispatcherLike_dispatch,
  DispatcherLike_scheduler,
  SchedulerLike,
} from "../scheduling";

import Dispatcher_dispatch from "./Dispatcher/__internal__/Dispatcher.dispatch";
import Dispatcher_dispatchTo from "./Dispatcher/__internal__/Dispatcher.dispatchTo";
import Dispatcher_getScheduler from "./Dispatcher/__internal__/Dispatcher.getScheduler";

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

/** @ignore */
const Dispatcher = {
  dispatch,
  dispatchTo,
  getScheduler,
};

export default Dispatcher;
