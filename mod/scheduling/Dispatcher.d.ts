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
/** @ignore */
declare const Dispatcher: {
    dispatch: <T, TDispatcher extends {
        [DispatcherLike_dispatch](v: T): void;
    }>(v: T) => Updater<TDispatcher>;
    dispatchTo: <T_1>(dispatcher: {
        [DispatcherLike_dispatch](v: T_1): void;
    }) => SideEffect1<T_1>;
    getScheduler: (dispatcher: {
        [DispatcherLike_scheduler]: SchedulerLike;
    }) => SchedulerLike;
};
export { Dispatcher as default, dispatch, dispatchTo, getScheduler };
