import { DisposableLike } from "@reactive-js/disposable";
import {
  SchedulerContinuationLike,
  SchedulerLike,
} from "@reactive-js/scheduler";

/**
 * Interface used by Scheduler implementations using the 'schedulerMixin' functions
 *
 * @noInheritDoc
 */
export interface CallbackScheduler extends SchedulerLike {
  /** Platform specific shouldYield function passed to continuations when they are run.*/
  readonly shouldYield: (() => boolean) | undefined;

  /**
   * Schedules a callback with the specified delay to be executed in the future.
   *
   * @param callback The callback function to be executed.
   * @param delay An optional delay in ms that the scheduler should wait
   * before invoking the callback function.
   */
  scheduleCallback(callback: () => void, delay: number): DisposableLike;
}

function createCallback(
  scheduler: CallbackScheduler,
  continuation: SchedulerContinuationLike,
): () => void {
  const callback = () => {
    if (!continuation.isDisposed) {
      continuation.run(scheduler.shouldYield);

      if (!continuation.isDisposed) {
        scheduler.scheduleCallback(callback, continuation.delay);
      }
    }
  };
  return callback;
}

/** Mixin functions that can be used to implement the SchedulerLike interface */
export const schedulerMixin = {
  schedule(this: CallbackScheduler, continuation: SchedulerContinuationLike): void {
    const callback = createCallback(this, continuation);
    const callbackSubscription = this.scheduleCallback(
      callback,
      continuation.delay,
    );
    continuation.add(callbackSubscription);
  },
};
