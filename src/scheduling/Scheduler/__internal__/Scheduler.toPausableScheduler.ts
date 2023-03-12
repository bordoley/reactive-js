import { Function1 } from "../../../functions.js";
import {
  PauseableSchedulerLike,
  PauseableSchedulerLike_pause,
  SchedulerLike,
} from "../../../scheduling.js";
import Scheduler_toPriorityScheduler from "./Scheduler.toPriorityScheduler.js";

const Scheduler_toPausableScheduler: Function1<
  SchedulerLike,
  PauseableSchedulerLike
> = scheduler => {
  const pauseableScheduler = Scheduler_toPriorityScheduler(scheduler);
  pauseableScheduler[PauseableSchedulerLike_pause]();
  return pauseableScheduler;
};

export default Scheduler_toPausableScheduler;
