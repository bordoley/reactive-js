import { DispatcherLike_scheduler, SchedulerLike } from "../../../scheduling";

const getScheduler = (dispatcher: {
  [DispatcherLike_scheduler]: SchedulerLike;
}): SchedulerLike => dispatcher[DispatcherLike_scheduler];

export default getScheduler;
