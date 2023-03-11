import { Function1 } from "../../../functions.js";
import {
  PauseableSchedulerLike,
  PauseableState_paused,
  SchedulerLike,
} from "../../../scheduling.js";
import { QueueableLike_push } from "../../../util.js";
import Scheduler_toPriorityScheduler from "./Scheduler.toPriorityScheduler.js";

const Scheduler_toPausableScheduler: Function1<
  SchedulerLike,
  PauseableSchedulerLike
> = scheduler => {
  const pauseableScheduler = Scheduler_toPriorityScheduler(scheduler);
  pauseableScheduler[QueueableLike_push](PauseableState_paused);
  return pauseableScheduler;
};

export default Scheduler_toPausableScheduler;
