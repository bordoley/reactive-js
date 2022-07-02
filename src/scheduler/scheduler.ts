import { PrioritySchedulerLike, SchedulerLike } from "../scheduler";

export const isInContinuation = (
  scheduler: SchedulerLike | PrioritySchedulerLike,
): boolean => scheduler.inContinuation;

export const getNow = (scheduler: SchedulerLike): number => scheduler.now;

export const shouldYield = (scheduler: SchedulerLike): boolean =>
  scheduler.shouldYield;
