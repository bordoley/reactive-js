import { ObserverLike } from "../../../rx.mjs";
import { SchedulerLike } from "../../../scheduling.mjs";
declare const getScheduler: <T>(observer: ObserverLike<T>) => SchedulerLike;
export { getScheduler as default };
