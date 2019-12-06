import { DisposableLike } from "@reactive-js/disposable";

/**
 * A unit of work which executes on a scheduler. Implementations should
 * periodically check whether they should yield, and return
 * a SchedulerContinuationResult if there is additional
 * work to be performed.
 */
export interface SchedulerContinuationLike {
  (shouldYield: () => boolean): [SchedulerContinuationLike, (number | void)] | undefined;
}

/**
 * An object that schedules units of work on a runloop.
 */
export interface SchedulerLike {
  /**
   * Returns true if the scheduler is currently executing a SchedulerContinuation.
   */
  readonly inScheduledContinuation: boolean;

  /** The scheduler's current time in ms. */
  now: number;

  /**
   * Schedules a continuation to be execute on the scheduler.
   *
   * @param continuation
   * @param delay The delay in ms after which to execute the continuation.
   */
  schedule(
    continuation: SchedulerContinuationLike,
    delay?: number,
  ): DisposableLike;
}

/**
 * A SchedulerLike instance that is also a DisposableLike resource.
 * @noInheritDoc
 */
export interface SchedulerResourceLike extends SchedulerLike, DisposableLike {}
