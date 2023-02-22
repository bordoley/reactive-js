import { ObserverLike, ObserverLike_scheduler } from "../../../rx.js";
import { SchedulerLike } from "../../../scheduling.js";

const Observer_getScheduler = <T>(observer: ObserverLike<T>): SchedulerLike =>
  observer[ObserverLike_scheduler];

export default Observer_getScheduler;
