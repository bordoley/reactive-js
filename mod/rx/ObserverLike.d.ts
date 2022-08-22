import { ObserverLike } from "../rx.mjs";
import { SchedulerLike, DispatcherLike } from "../scheduling.mjs";
declare const getScheduler: <T>(observer: ObserverLike<T>) => SchedulerLike;
declare const getDispatcher: <T>(observer: ObserverLike<T>) => DispatcherLike<T>;
export { getDispatcher, getScheduler };
