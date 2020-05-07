import { DisposableLike } from "../../disposable.ts";

export interface SchedulerContinuationRunStatusChangedListenerLike {
  onRunStatusChanged(state: boolean): void;
}

/**
 * A unit of work to be executed by a scheduler.
 *
 * @noInheritDoc
 */
export interface SchedulerContinuationLike extends DisposableLike {
  addListener(
    ev: "onRunStatusChanged",
    listener: SchedulerContinuationRunStatusChangedListenerLike,
  ): void;
  removeListener(
    ev: "onRunStatusChanged",
    listener: SchedulerContinuationRunStatusChangedListenerLike,
  ): void;

  /**
   * Work function to be invoked by the scheduler after the specified delay.
   *
   * @param shouldYield An optional function that should be periodically checked
   * when defined. If `shouldYield` returns true the continuation should return,
   * yielding control back to the scheduler.
   */
  run(shouldYield?: () => boolean): number;
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
  schedule(continuation: SchedulerContinuationLike, delay?: number): void;
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

export interface PausableSchedulerLike extends SchedulerLike {
  pause(): void;
  resume(): void;
}

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
  schedule(
    continuation: SchedulerContinuationLike,
    priority: number,
    delay?: number,
  ): void;
}

export type CallbackContinuation = (
  shouldYield?: () => boolean,
) => CallbackContinuation | void;
