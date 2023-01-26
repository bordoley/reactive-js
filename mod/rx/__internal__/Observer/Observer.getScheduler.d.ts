import { ObserverLike } from "../../../rx.js";
import { SchedulerLike } from "../../../scheduling.js";
declare const Observer$getScheduler: <T>(observer: ObserverLike<T>) => SchedulerLike;
export { Observer$getScheduler as default };
