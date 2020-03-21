import { DisposableLike } from "@reactive-js/disposable";
import { EnumeratorLike } from "@reactive-js/enumerable";

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
  readonly delay?: number;

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
    EnumeratorLike<void, void>,
    SchedulerLike,
    SchedulerContinuationLike {}
