import { Function1 } from "../functions";
import {
  PrioritySchedulerLike,
  SchedulerLike,
  SchedulerLike_inContinuation,
  SchedulerLike_now,
  SchedulerLike_requestYield,
  SchedulerLike_shouldYield,
} from "../scheduling";

import { create as SchedulerLike__toPriorityScheduler } from "./__internal__/QueueSchedulerLike";
import { createHostScheduler as SchedulerLike__createHostScheduler } from "./__internal__/SchedulerLike/SchedulerLike.createHostScheduler";
import { getCurrentTime as SchedulerLike__getCurrentTime } from "./__internal__/SchedulerLike/SchedulerLike.getCurrentTime";
import { isInContinuation as SchedulerLike__isInContinuation } from "./__internal__/SchedulerLike/SchedulerLike.isInContinuation";
import { requestYield as SchedulerLike__requestYield } from "./__internal__/SchedulerLike/SchedulerLike.requestYield";
import { schedule as SchedulerLike__schedule } from "./__internal__/SchedulerLike/SchedulerLike.schedule";
import { shouldYield as SchedulerLike__shouldYield } from "./__internal__/SchedulerLike/SchedulerLike.shouldYield";
import { toPausableScheduler as SchedulerLike__toPausableScheduler } from "./__internal__/SchedulerLike/SchedulerLike.toPausableScheduler";

export const createHostScheduler = SchedulerLike__createHostScheduler;

export const getCurrentTime: (scheduler: {
  readonly [SchedulerLike_now]: number;
}) => number = SchedulerLike__getCurrentTime;

export const isInContinuation: (scheduler: {
  readonly [SchedulerLike_inContinuation]: boolean;
}) => boolean = SchedulerLike__isInContinuation;

export const requestYield: (scheduler: {
  [SchedulerLike_requestYield](): void;
}) => void = SchedulerLike__requestYield;

export const shouldYield: (scheduler: {
  [SchedulerLike_shouldYield]: boolean;
}) => boolean = SchedulerLike__shouldYield;

export const schedule = SchedulerLike__schedule;

export const toPausableScheduler = SchedulerLike__toPausableScheduler;

export const toPriorityScheduler: Function1<
  SchedulerLike,
  PrioritySchedulerLike
> = SchedulerLike__toPriorityScheduler;
