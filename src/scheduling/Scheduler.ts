import { Function1 } from "../functions.js";
import {
  PrioritySchedulerLike,
  SchedulerLike,
  SchedulerLike_inContinuation,
  SchedulerLike_now,
  SchedulerLike_requestYield,
  SchedulerLike_shouldYield,
} from "../scheduling.js";

import Scheduler_createHostScheduler from "./Scheduler/__internal__/Scheduler.createHostScheduler.js";
import Scheduler_getCurrentTime from "./Scheduler/__internal__/Scheduler.getCurrentTime.js";
import Scheduler_isInContinuation from "./Scheduler/__internal__/Scheduler.isInContinuation.js";
import Scheduler_requestYield from "./Scheduler/__internal__/Scheduler.requestYield.js";
import Scheduler_schedule from "./Scheduler/__internal__/Scheduler.schedule.js";
import Scheduler_shouldYield from "./Scheduler/__internal__/Scheduler.shouldYield.js";
import Scheduler_toPausableScheduler from "./Scheduler/__internal__/Scheduler.toPausableScheduler.js";
import { create as Scheduler_toPriorityScheduler } from "./__internal__/QueueScheduler.js";

export const createHostScheduler = Scheduler_createHostScheduler;

export const getCurrentTime: (scheduler: {
  readonly [SchedulerLike_now]: number;
}) => number = Scheduler_getCurrentTime;

export const isInContinuation: (scheduler: {
  readonly [SchedulerLike_inContinuation]: boolean;
}) => boolean = Scheduler_isInContinuation;

export const requestYield: (scheduler: {
  [SchedulerLike_requestYield](): void;
}) => void = Scheduler_requestYield;

export const shouldYield: (scheduler: {
  [SchedulerLike_shouldYield]: boolean;
}) => boolean = Scheduler_shouldYield;

export const schedule = Scheduler_schedule;

export const toPausableScheduler = Scheduler_toPausableScheduler;

export const toPriorityScheduler: Function1<
  SchedulerLike,
  PrioritySchedulerLike
> = Scheduler_toPriorityScheduler;
