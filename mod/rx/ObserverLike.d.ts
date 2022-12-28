import { DisposableLike } from "../util.mjs";
import { SideEffect, Function1 } from "../functions.mjs";
import { DispatcherLike, SchedulerLike, ContinuationLike } from "../scheduling.mjs";
import { ObserverLike } from "../rx.mjs";
declare const getDispatcher: <T>(observer: ObserverLike<T>) => DispatcherLike<T>;
declare const getScheduler: <T>(observer: ObserverLike<T>) => SchedulerLike;
declare const schedule: (f: ContinuationLike | SideEffect, options?: {
    readonly delay?: number | undefined;
} | undefined) => Function1<ObserverLike<unknown>, DisposableLike>;
export { getDispatcher, getScheduler, schedule };
