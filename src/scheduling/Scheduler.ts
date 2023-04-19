import { Function1 } from "../functions.js";
import { PrioritySchedulerLike, SchedulerLike } from "../scheduling.js";
import { DisposableLike } from "../util.js";
import Scheduler_createAnimationFrameScheduler from "./Scheduler/__internal__/Scheduler.createAnimationFrameScheduler.js";
import Scheduler_createHostScheduler from "./Scheduler/__internal__/Scheduler.createHostScheduler.js";
import Scheduler_createVirtualTimeScheduler from "./Scheduler/__internal__/Scheduler.createVirtualTimeScheduler.js";
import Scheduler_toPausableScheduler from "./Scheduler/__internal__/Scheduler.toPausableScheduler.js";
import Scheduler_toPriorityScheduler from "./Scheduler/__internal__/Scheduler.toPriorityScheduler.js";

export const createAnimationFrameScheduler =
  Scheduler_createAnimationFrameScheduler;

export const createHostScheduler = Scheduler_createHostScheduler;

export const createVirtualTimeScheduler = Scheduler_createVirtualTimeScheduler;

export const toPausableScheduler = Scheduler_toPausableScheduler;

export const toPriorityScheduler: Function1<
  SchedulerLike,
  PrioritySchedulerLike & DisposableLike
> = Scheduler_toPriorityScheduler;
