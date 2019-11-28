import { DisposableLike } from "@reactive-js/disposable";

/**
 * A unit of work which executes on a scheduler. Implementations should
 * periodically check whether they should yield, and return
 * a SchedulerContinuationResult if there is additional
 * work to be performed.
 */
export interface SchedulerContinuation {
  (shouldYield: () => boolean): SchedulerContinuationResult | void;
}

export interface SchedulerContinuationResult {
  readonly continuation: SchedulerContinuation;
  readonly delay?: number;
  readonly priority?: number;
}

export interface SchedulerOptions {
  /**
   * The delay in ms after which to execute the continuation.
   */
  readonly delay?: number;
  /**
   * The scheduling priority of the continuation.
   */
  readonly priority?: number;
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
   * @param options
   */
  schedule(
    continuation: SchedulerContinuation,
    options?: SchedulerOptions,
  ): DisposableLike;
}

/**
 * A SchedulerLike instance that is also a DisposableLike resource.
 * @noInheritDoc
 */
export interface SchedulerResourceLike extends SchedulerLike, DisposableLike {}

let instance: SchedulerLike | undefined;

/**
 * Registers a default scheduler for the current process. Calling this
 * function more than once with a different scheduler instance
 * results in an error being thrown.
 *
 * @param scheduler
 */
export const registerDefaultScheduler = (scheduler: SchedulerLike) => {
  if (instance !== undefined && scheduler !== instance) {
    throw new Error("Default scheduler already registered");
  }
  instance = scheduler;
};

/**
 * Returns the default scheduler, if registered, otherwise throws an error.
 */
export const getDefaultScheduler = () => {
  if (instance === undefined) {
    throw new Error("No default scheduler registered");
  }
  return instance;
};
