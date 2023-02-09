import { Function1 } from "../functions";
import {
  PrioritySchedulerLike,
  SchedulerLike,
  SchedulerLike_inContinuation,
  SchedulerLike_now,
  SchedulerLike_requestYield,
  SchedulerLike_shouldYield,
} from "../scheduling";

import { create as Scheduler_toPriorityScheduler } from "./__internal__/QueueScheduler";
import Scheduler_createHostScheduler from "./__internal__/Scheduler/Scheduler.createHostScheduler";
import Scheduler_getCurrentTime from "./__internal__/Scheduler/Scheduler.getCurrentTime";
import Scheduler_isInContinuation from "./__internal__/Scheduler/Scheduler.isInContinuation";
import Scheduler_requestYield from "./__internal__/Scheduler/Scheduler.requestYield";
import Scheduler_schedule from "./__internal__/Scheduler/Scheduler.schedule";
import Scheduler_shouldYield from "./__internal__/Scheduler/Scheduler.shouldYield";
import Scheduler_toPausableScheduler from "./__internal__/Scheduler/Scheduler.toPausableScheduler";

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

/** @ignore */
const Scheduler = {
  createHostScheduler,
  getCurrentTime,
  isInContinuation,
  requestYield,
  shouldYield,
  schedule,
  toPausableScheduler,
  toPriorityScheduler,
};

export default Scheduler;
