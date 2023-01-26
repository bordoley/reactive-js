import { ObserverLike } from "../../../rx.js";
import { SchedulerLike } from "../../../scheduling.js";
declare const Observer_getScheduler: <T>(observer: ObserverLike<T>) => SchedulerLike;
export { Observer_getScheduler as default };
