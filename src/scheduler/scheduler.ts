import { isDisposed } from "../disposable";
import { Function1 } from "../functions";
import {
  PrioritySchedulerLike,
  SchedulerContinuationLike,
  SchedulerLike,
} from "../scheduler";

export interface SchedulerImplementation {
  inContinuation: boolean;
}

export const runContinuation =
  <TScheduler extends SchedulerImplementation>(
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
