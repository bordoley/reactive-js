import { DisposableLike } from "../util.js";
import { SideEffect, Function1 } from "../functions.js";
import { DispatcherLike, SchedulerLike, ContinuationLike } from "../scheduling.js";
import { ObserverLike } from "../rx.js";
declare const getDispatcher: <T>(observer: ObserverLike<T>) => DispatcherLike<T>;
declare const getScheduler: <T>(observer: ObserverLike<T>) => SchedulerLike;
declare const schedule: (f: ContinuationLike | SideEffect, options?: {
    readonly delay?: number | undefined;
} | undefined) => Function1<ObserverLike<unknown>, DisposableLike>;
export { getDispatcher, getScheduler, schedule };
