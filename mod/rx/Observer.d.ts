import { DisposableLike } from "../util.js";
import { SideEffect, Function1 } from "../functions.js";
import { DispatcherLike, SchedulerLike } from "../scheduling.js";
import { ObserverLike } from "../rx.js";
declare const getDispatcher: <T>(observer: ObserverLike<T>) => DispatcherLike<T>;
declare const getScheduler: <T>(observer: ObserverLike<T>) => SchedulerLike;
declare const schedule: (f: SideEffect, options?: {
    readonly delay?: number | undefined;
} | undefined) => Function1<ObserverLike<unknown>, DisposableLike>;
/** @ignore */
declare const Observer: {
    getDispatcher: <T>(observer: ObserverLike<T>) => DispatcherLike<T>;
    getScheduler: <T_1>(observer: ObserverLike<T_1>) => SchedulerLike;
    schedule: (f: SideEffect, options?: {
        readonly delay?: number | undefined;
    } | undefined) => Function1<ObserverLike<unknown>, DisposableLike>;
};
export { Observer as default, getDispatcher, getScheduler, schedule };
