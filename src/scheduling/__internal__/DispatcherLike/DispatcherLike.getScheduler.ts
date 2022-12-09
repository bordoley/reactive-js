import { DispatcherLike_scheduler, SchedulerLike } from "../../../scheduling";

export const getScheduler = (dispatcher: {
  [DispatcherLike_scheduler]: SchedulerLike;
}): SchedulerLike => dispatcher[DispatcherLike_scheduler];
