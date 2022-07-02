import { Disposable, isDisposed } from "./disposable";
import { Function1 } from "./functions";
import { SchedulerContinuationLike } from "./scheduler";

export interface SchedulerImplementationLike extends Disposable {
  inContinuation: boolean;
}

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
