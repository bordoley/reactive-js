import {
  createSerialDisposable,
  DisposableLike,
  SerialDisposableLike,
} from "@reactive-js/disposable";
import {
  SchedulerContinuationLike,
  SchedulerLike,
} from "@reactive-js/scheduler";

/** 
 * Interface used by Scheduler implementations using the 'schedulerMixin' functions 
 * 
 * @noInheritDoc 
 */
export interface SchedulerHost extends SchedulerLike {
  /** Platform specific shouldYield function passed to continuations when they are run.*/
  readonly shouldYield: (() => boolean) | undefined;

  /** 
   * Schedules a callback with the specified delay to be executed in the future.
   *
   * @param callback The callback function to be executed.
   * @param delay An optional delay in ms that the scheduler should wait
   * before invoking the callback function.  
   */
  scheduleCallback(callback: () => void, delay?: number): DisposableLike;
}

function createCallback(
  this: SchedulerHost,
  continuation: SchedulerContinuationLike,
  disposable: SerialDisposableLike,
): () => void {
  const callback = () => {
    if (!disposable.isDisposed) {
      const result = continuation.run(this.shouldYield) || undefined;

      if (result !== undefined) {
        const { delay = 0 } = result;
        const nextCallback =
          result === continuation
            ? callback
            : createCallback.call(this, result, disposable);

        disposable.inner = this.scheduleCallback(nextCallback, delay);
      } else {
        disposable.dispose();
      }
    }
  };
  return callback;
}

/** Mixin functions that can be used to implement the SchedulerLike interface */
export const schedulerMixin = {
  schedule(
    this: SchedulerHost,
    continuation: SchedulerContinuationLike,
  ): DisposableLike {
    const disposable = createSerialDisposable();
    const callback = createCallback.call(this, continuation, disposable);
    disposable.inner = this.scheduleCallback(callback, continuation.delay);
    return disposable;
  },
};
