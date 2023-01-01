import { DispatcherLike_scheduler, SchedulerLike } from "../../../scheduling";

const DispatcherLike__getScheduler = (dispatcher: {
  [DispatcherLike_scheduler]: SchedulerLike;
}): SchedulerLike => dispatcher[DispatcherLike_scheduler];

export default DispatcherLike__getScheduler;
