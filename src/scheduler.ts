import { Disposable } from "./disposable";
import { Enumerator } from "./enumerator";

/**
 * A unit of work to be executed by a scheduler.
 *
 * @noInheritDoc
 */
export interface SchedulerContinuationLike extends Disposable {
  /**
   * Work function to be invoked by the scheduler after the specified delay.
   */
  continue(this: SchedulerContinuationLike): void;
}

/**
 * An object that schedules units of work on a runloop.
 */
export interface SchedulerLike extends Disposable {
  readonly inContinuation: boolean;
  readonly now: number;
  readonly shouldYield: boolean;

  /**
   * Request the scheduler to yield.
   */
  requestYield(this: this): void;

  /**
   * Schedules a continuation to be executed on the scheduler.
   *
   * @param continuation The SchedulerContinuation to be executed.
   */
  schedule(
    this: this,
    continuation: SchedulerContinuationLike,
    options?: { readonly delay?: number },
  ): void;
}

export interface VirtualTimeSchedulerLike
  extends Enumerator<void>,
    SchedulerLike {
  readonly isDisposed: boolean;
  dispose(this: this): void;
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
export interface PrioritySchedulerLike extends Disposable {
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

export interface SchedulerImplementationLike extends Disposable {
  inContinuation: boolean;
}

export { createPriorityScheduler } from "./scheduler/priorityScheduler";
export { createPausableScheduler } from "./scheduler/pausableScheduler";
export { schedule, __yield } from "./scheduler/schedulerContinuation";
export { toSchedulerWithPriority } from "./scheduler/schedulerWithPriority";
export { createHostScheduler } from "./scheduler/hostScheduler";
export { createVirtualTimeScheduler } from "./scheduler/virtualTimeScheduler";
export {
  runContinuation,
  inContinuation,
  now,
  shouldYield,
  getDelay,
  hasDelay,
} from "./scheduler/scheduler";
