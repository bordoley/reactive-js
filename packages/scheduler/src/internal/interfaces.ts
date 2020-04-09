import { DisposableLike } from "@reactive-js/disposable";

/**
 * A unit of work to be executed by a scheduler.
 *
 * @noInheritDoc
 */
export interface SchedulerContinuationLike extends DisposableLike {
  /**
   * An optional delay in ms that the scheduler should wait
   * before invoking the continuation's `run` function.
   */
  readonly delay: number;

  /**
   * Work function to be invoked by the scheduler after the specified delay.
   *
   * @param shouldYield An optional function that should be periodically checked
   * when defined. If `shouldYield` returns true the continuation should return,
   * yielding control back to the scheduler.
   */
  run(shouldYield?: () => boolean): void;
}

/**
 * An object that schedules units of work on a runloop.
 */
export interface SchedulerLike {
  readonly inContinuation: boolean;

  /** The scheduler's current time in ms. */
  readonly now: number;

  /**
   * Schedules a continuation to be executed on the scheduler.
   *
   * @param continuation The SchedulerContinuation to be executed.
   */
  schedule(continuation: SchedulerContinuationLike): void;
}

/**
 * A scheduler that uses a virtual clock to simulate time. Useful for testing.
 *
 * @noInheritDoc
 */
export interface VirtualTimeSchedulerLike
  extends DisposableLike,
    SchedulerLike,
    SchedulerContinuationLike {}

/**
 * A scheduler which schedules work according to it's priority.
 *
 * @noInheritDoc
 */
export interface PrioritySchedulerLike {
  readonly inContinuation: boolean;

  /** The scheduler's current time in ms. */
  readonly now: number;

  /**
   * Schedules a continuation to be executed on the scheduler.
   *
   * @param continuation The SchedulerContinuation to be executed.
   * @param priority An optional priority that is used when prioritizing which work
   * to execute next. The definition of the priority value along with it's default
   * value is implementation specific.
   *
   * @returns A `DisposableLike` that can be disposed to cancel the scheduled work.
   */
  schedule(continuation: SchedulerContinuationLike, priority: number): void;
}

/**
 * A priority scheduler which is also an unmanaged resource.
 *
 * @noInheritDoc
 * */
export interface PrioritySchedulerResourceLike
  extends PrioritySchedulerLike,
    DisposableLike {}

/**
 * Interface used by Scheduler implementations using the 'schedulerMixin' functions
 *
 * @noInheritDoc
 */
export interface HostSchedulerLike extends SchedulerLike {
  inContinuation: boolean;

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
