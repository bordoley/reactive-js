import { DisposableLike } from "./disposable";

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
   */
  continue(): void;
}

/**
 * An object that schedules units of work on a runloop.
 */
export interface SchedulerLike {
  readonly inContinuation: boolean;
  readonly now: number;
  readonly shouldYield: boolean;

  /**
   * Schedules a continuation to be executed on the scheduler.
   *
   * @param continuation The SchedulerContinuation to be executed.
   */
  schedule(
    continuation: SchedulerContinuationLike,
    options?: { readonly delay?: number },
  ): void;
}

/**
 * A scheduler that uses a virtual clock to simulate time. Useful for testing.
 *
 * @noInheritDoc
 */
export interface VirtualTimeSchedulerLike
  extends DisposableLike,
    SchedulerLike {
  run(): void;
}

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
  readonly now: number;
  readonly shouldYield: boolean;

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
    options: { readonly priority: number; readonly delay?: number },
  ): void;
}

export {
  toPriorityScheduler,
  toPausableScheduler,
} from "./scheduler/priorityQueueScheduler";
export {
  run,
  schedule,
  yield$,
  YieldError,
} from "./scheduler/schedulerContinuation";
export { toSchedulerWithPriority } from "./scheduler/schedulerWithPriority";
export { createHostScheduler } from "./scheduler/hostScheduler";
export { createVirtualTimeScheduler } from "./scheduler/virtualTimeScheduler";
