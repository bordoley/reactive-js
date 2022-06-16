import { DisposableLike } from "./disposable";

export interface SchedulerContinuationRunStatusChangedListenerLike {
  onRunStatusChanged(
    this: SchedulerContinuationRunStatusChangedListenerLike,
    state: boolean,
  ): void;
}

/**
 * A unit of work to be executed by a scheduler.
 *
 * @noInheritDoc
 */
export interface SchedulerContinuationLike extends DisposableLike {
  addListener(
    this: SchedulerContinuationLike,
    ev: "onRunStatusChanged",
    listener: SchedulerContinuationRunStatusChangedListenerLike,
  ): void;
  removeListener(
    this: SchedulerContinuationLike,
    ev: "onRunStatusChanged",
    listener: SchedulerContinuationRunStatusChangedListenerLike,
  ): void;

  /**
   * Work function to be invoked by the scheduler after the specified delay.
   */
  continue(this: SchedulerContinuationLike): void;
}

/**
 * An object that schedules units of work on a runloop.
 */
export interface SchedulerLike extends DisposableLike {
  readonly inContinuation: boolean;
  readonly now: number;
  readonly shouldYield: boolean;

  /**
   * Request the scheduler to yield.
   */
  requestYield(this: SchedulerLike): void;

  /**
   * Schedules a continuation to be executed on the scheduler.
   *
   * @param continuation The SchedulerContinuation to be executed.
   */
  schedule(
    this: SchedulerLike,
    continuation: SchedulerContinuationLike,
    options?: { readonly delay?: number },
  ): void;
}

/**
 * A scheduler that uses a virtual clock to simulate time. Useful for testing.
 *
 * @noInheritDoc
 */
export interface VirtualTimeSchedulerLike extends SchedulerLike {
  run(this: VirtualTimeSchedulerLike): void;
}

export interface PausableSchedulerLike extends SchedulerLike {
  pause(this: PausableSchedulerLike): void;
  resume(this: PausableSchedulerLike): void;
}

/**
 * A scheduler which schedules work according to it's priority.
 *
 * @noInheritDoc
 */
export interface PrioritySchedulerLike extends DisposableLike {
  readonly inContinuation: boolean;
  readonly now: number;
  readonly shouldYield: boolean;

  /**
   * Request the scheduler to yield.
   */
  requestYield(this: PrioritySchedulerLike): void;

  /**
   * Schedules a continuation to be executed on the scheduler.
   *
   * @param continuation The SchedulerContinuation to be executed.
   * @param priority An optional priority that is used when prioritizing which work
   * to execute next. The definition of the priority value along with it's default
   * value is implementation specific.
   */
  schedule(
    this: PrioritySchedulerLike,
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
  __yield,
  YieldError,
} from "./scheduler/schedulerContinuation";
export { toSchedulerWithPriority } from "./scheduler/schedulerWithPriority";
export { createHostScheduler } from "./scheduler/hostScheduler";
export { createVirtualTimeScheduler } from "./scheduler/virtualTimeScheduler";
