import { Function1 } from "../functions";
import {
  PrioritySchedulerLike,
  SchedulerLike,
  SchedulerLike_inContinuation,
  SchedulerLike_now,
  SchedulerLike_requestYield,
  SchedulerLike_shouldYield,
} from "../scheduling";

import { create as Scheduler$toPriorityScheduler } from "./__internal__/QueueScheduler";
import Scheduler$createHostScheduler from "./__internal__/Scheduler/Scheduler.createHostScheduler";
import Scheduler$getCurrentTime from "./__internal__/Scheduler/Scheduler.getCurrentTime";
import Scheduler$isInContinuation from "./__internal__/Scheduler/Scheduler.isInContinuation";
import Scheduler$requestYield from "./__internal__/Scheduler/Scheduler.requestYield";
import Scheduler$schedule from "./__internal__/Scheduler/Scheduler.schedule";
import Scheduler$shouldYield from "./__internal__/Scheduler/Scheduler.shouldYield";
import Scheduler$toPausableScheduler from "./__internal__/Scheduler/Scheduler.toPausableScheduler";

export const createHostScheduler = Scheduler$createHostScheduler;

export const getCurrentTime: (scheduler: {
  readonly [SchedulerLike_now]: number;
}) => number = Scheduler$getCurrentTime;

export const isInContinuation: (scheduler: {
  readonly [SchedulerLike_inContinuation]: boolean;
}) => boolean = Scheduler$isInContinuation;

export const requestYield: (scheduler: {
  [SchedulerLike_requestYield](): void;
}) => void = Scheduler$requestYield;

export const shouldYield: (scheduler: {
  [SchedulerLike_shouldYield]: boolean;
}) => boolean = Scheduler$shouldYield;

export const schedule = Scheduler$schedule;

export const toPausableScheduler = Scheduler$toPausableScheduler;

export const toPriorityScheduler: Function1<
  SchedulerLike,
  PrioritySchedulerLike
> = Scheduler$toPriorityScheduler;
