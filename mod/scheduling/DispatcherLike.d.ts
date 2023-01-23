import { Updater, SideEffect1 } from "../functions.js";
import { DispatcherLike_dispatch, DispatcherLike_scheduler, SchedulerLike } from "../scheduling.js";
declare const dispatch: <T, TDispatcher extends {
    [DispatcherLike_dispatch](v: T): void;
}>(v: T) => Updater<TDispatcher>;
declare const dispatchTo: <T>(dispatcher: {
    [DispatcherLike_dispatch](v: T): void;
}) => SideEffect1<T>;
declare const getScheduler: (dispatcher: {
    [DispatcherLike_scheduler]: SchedulerLike;
}) => SchedulerLike;
export { dispatch, dispatchTo, getScheduler };
