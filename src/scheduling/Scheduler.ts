import { Function1 } from "../functions.js";
import { PrioritySchedulerLike, SchedulerLike } from "../scheduling.js";
import {
  Continuation__now,
  Continuation__yield,
} from "./Continuation/__internal__/Continuation.create.js";
import Scheduler_createHostScheduler from "./Scheduler/__internal__/Scheduler.createHostScheduler.js";
import Scheduler_createVirtualTimeScheduler from "./Scheduler/__internal__/Scheduler.createVirtualTimeScheduler.js";
import Scheduler_schedule from "./Scheduler/__internal__/Scheduler.schedule.js";
import Scheduler_toPausableScheduler from "./Scheduler/__internal__/Scheduler.toPausableScheduler.js";
import { create as Scheduler_toPriorityScheduler } from "./__internal__/QueueScheduler.js";

/**
 * @category SchedulerEffect
 */
export const __now = Continuation__now;

/**
 * @category SchedulerEffect
 */
export const __yield = Continuation__yield;

export const createHostScheduler = Scheduler_createHostScheduler;

export const createVirtualTimeScheduler = Scheduler_createVirtualTimeScheduler;

export const schedule = Scheduler_schedule;

export const toPausableScheduler = Scheduler_toPausableScheduler;

export const toPriorityScheduler: Function1<
  SchedulerLike,
  PrioritySchedulerLike
> = Scheduler_toPriorityScheduler;
