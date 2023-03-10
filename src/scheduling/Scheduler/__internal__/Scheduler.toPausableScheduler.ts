import { Function1 } from "../../../functions.js";
import {
  PauseableSchedulerLike,
  PauseableState_paused,
  SchedulerLike,
} from "../../../scheduling.js";
import { QueueLike_push } from "../../../util.js";
import { create as createQueueScheduler } from "../../__internal__/QueueScheduler.js";

const Scheduler_toPausableScheduler: Function1<
  SchedulerLike,
  PauseableSchedulerLike
> = scheduler => {
  const pauseableScheduler = createQueueScheduler(scheduler);
  pauseableScheduler[QueueLike_push](PauseableState_paused);
  return pauseableScheduler;
};

export default Scheduler_toPausableScheduler;
