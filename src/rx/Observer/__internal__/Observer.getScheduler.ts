import { ObserverLike, ObserverLike_scheduler } from "../../../rx";
import { SchedulerLike } from "../../../scheduling";

const Observer_getScheduler = <T>(observer: ObserverLike<T>): SchedulerLike =>
  observer[ObserverLike_scheduler];

export default Observer_getScheduler;
