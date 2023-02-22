import { SideEffect1, Updater } from "../functions.js";
import { DispatcherLike_dispatch, DispatcherLike_scheduler, SchedulerLike } from "../scheduling.js";
export declare const dispatch: <T, TDispatcher extends {
    [DispatcherLike_dispatch](v: T): void;
}>(v: T) => Updater<TDispatcher>;
export declare const dispatchTo: <T>(dispatcher: {
    [DispatcherLike_dispatch](v: T): void;
}) => SideEffect1<T>;
export declare const getScheduler: (dispatcher: {
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
export default Dispatcher;
