import { isDisposed } from "../disposable";
import { Function1, floor, max } from "../functions";
import {
  PrioritySchedulerLike,
  SchedulerContinuationLike,
  SchedulerImplementationLike,
  SchedulerLike,
} from "../scheduler";

export const runContinuation =
  <TScheduler extends SchedulerImplementationLike>(
    continuation: SchedulerContinuationLike,
  ): Function1<TScheduler, TScheduler> =>
  scheduler => {
    if (!isDisposed(continuation)) {
      scheduler.inContinuation = true;
      continuation.continue();
      scheduler.inContinuation = false;
    }
    return scheduler;
  };

export const inContinuation = (
  scheduler: SchedulerLike | PrioritySchedulerLike,
): boolean => scheduler.inContinuation;

export const now = (scheduler: SchedulerLike): number => scheduler.now;

export const shouldYield = (scheduler: SchedulerLike): boolean =>
  scheduler.shouldYield;

export const getDelay = (options: { delay?: number } = {}): number =>
  floor(max(options.delay ?? 0, 0));

export const hasDelay = (options: { delay?: number } = {}): boolean =>
  getDelay(options) > 0;
