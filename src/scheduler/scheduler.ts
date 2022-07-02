import { isDisposed } from "../disposable";
import { Function1 } from "../functions";
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

export const getNow = (scheduler: SchedulerLike): number => scheduler.now;

export const shouldYield = (scheduler: SchedulerLike): boolean =>
  scheduler.shouldYield;
