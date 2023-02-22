import {
  DispatcherLike_scheduler,
  SchedulerLike,
} from "../../../scheduling.js";

const Dispatcher_getScheduler = (dispatcher: {
  [DispatcherLike_scheduler]: SchedulerLike;
}): SchedulerLike => dispatcher[DispatcherLike_scheduler];

export default Dispatcher_getScheduler;
