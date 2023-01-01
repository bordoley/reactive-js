import { ObserverLike, ObserverLike_scheduler } from "../../../rx";
import { SchedulerLike } from "../../../scheduling";

const ObserverLike__getScheduler = <T>(
  observer: ObserverLike<T>,
): SchedulerLike => observer[ObserverLike_scheduler];

export default ObserverLike__getScheduler;
