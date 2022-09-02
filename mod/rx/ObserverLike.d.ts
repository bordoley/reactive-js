import { SideEffect, Function1 } from "../functions.mjs";
import { ObserverLike } from "../rx.mjs";
import { SchedulerLike, DispatcherLike } from "../scheduling.mjs";
import { ContinuationLike, DisposableLike } from "../util.mjs";
declare const getScheduler: <T>(observer: ObserverLike<T>) => SchedulerLike;
declare const getDispatcher: <T>(observer: ObserverLike<T>) => DispatcherLike<T>;
declare const schedule: (f: SideEffect | ContinuationLike, options?: {
    readonly delay?: number;
}) => Function1<ObserverLike<unknown>, DisposableLike>;
export { getDispatcher, getScheduler, schedule };
