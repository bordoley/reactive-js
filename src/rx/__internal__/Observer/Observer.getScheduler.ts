import { ObserverLike, ObserverLike_scheduler } from "../../../rx";
import { SchedulerLike } from "../../../scheduling";

const Observer$getScheduler = <T>(observer: ObserverLike<T>): SchedulerLike =>
  observer[ObserverLike_scheduler];

export default Observer$getScheduler;
