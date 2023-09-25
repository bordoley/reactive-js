import { StoreLike } from "./events.js";
import { SideEffect1 } from "./functions.js";
import { DisposableLike } from "./utils.js";

export const PauseableLike_isPaused = Symbol("PauseableLike_isPaused");
export const PauseableLike_pause = Symbol("PauseableLike_pause");
export const PauseableLike_resume = Symbol("PauseableLike_resume");

/**
 * @noInheritDoc
 */
export interface PauseableLike {
  /**
   * Boolean flag indicating if the PauseableLike is currently paused or not.
   */
  readonly [PauseableLike_isPaused]: StoreLike<boolean>;

  /**
   * Imperatively pause the source.
   */
  [PauseableLike_pause](): void;

  /**
   * Imperatively resume the source.
   */
  [PauseableLike_resume](): void;
}

export const SchedulerLike_yield = Symbol("SchedulerLike_yield");
export const SchedulerLike_inContinuation = Symbol(
  "SchedulerLike_inContinuation",
);
export const SchedulerLike_maxYieldInterval = Symbol(
  "SchedulerLike_maxYieldInterval",
);
export const SchedulerLike_now = Symbol("SchedulerLike_now");
export const SchedulerLike_requestYield = Symbol("SchedulerLike_requestYield");
export const SchedulerLike_schedule = Symbol("SchedulerLike_schedule");
export const SchedulerLike_shouldYield = Symbol("SchedulerLike_shouldYield");

/**
 * Schedulers are the core unit of concurrency, orchestration and
 * cooperative multi-tasking.
 *
 * @noInheritDoc
 */
export interface SchedulerLike {
  /**
   * Boolean flag indicating the scheduler is currently
   * running a continuation.
   */
  readonly [SchedulerLike_inContinuation]: boolean;

  /**
   * The max number of milliseconds the scheduler will run
   * before yielding control back to the underlying system scheduler.
   */
  readonly [SchedulerLike_maxYieldInterval]: number;

  /**
   * The current time in milliseconds.
   */
  readonly [SchedulerLike_now]: number;

  /**
   * Boolean flag indicating whether a running continuation
   * should yield control back to the scheduler.
   */
  readonly [SchedulerLike_shouldYield]: boolean;

  /**
   * Request the scheduler to yield the current continuation.
   */
  [SchedulerLike_requestYield](): void;

  /**
   * Yields control back to the scheduler.
   *
   * If no delay is specified, a scheduler may either allow
   * the continuation to continue to execute, or it will throw
   * an internal exception that must not be caught by the continuation
   * which the scheduler will use to reschedule the continuation for
   * a future time.
   *
   * @param delay - The amount of delay in ms the scheduler
   * should delay before resuming execution of the continuation.
   */
  [SchedulerLike_yield](delay?: number): void;

  /**
   * Schedule a continuation on the Scheduler.
   * @param continuation - The continuation to run on the scheduler.
   * @param options
   */
  [SchedulerLike_schedule](
    continuation: SideEffect1<SchedulerLike>,
    options?: {
      /**
       * The amount of time in ms to delay execution of the continuation.
       */
      readonly delay?: number;
    },
  ): DisposableLike;
}

export const VirtualTimeSchedulerLike_run = Symbol(
  "VirtualTimeSchedulerLike_run",
);

/**
 * A non-concurrent scheduler that simulates time but executes synchronously.
 *
 * @noInheritDoc
 */
export interface VirtualTimeSchedulerLike
  extends SchedulerLike,
    DisposableLike {
  /**
   * Runs the scheduler synchronously until it has no more
   * enqueued continuations, at which time the scheduler will auto dispose.
   */
  [VirtualTimeSchedulerLike_run](): void;
}

/**
 * A `SchedulerLike` that supports imperative pausing and resuming
 * of it's run loop.
 *
 * @noInheritDoc
 */
export interface PauseableSchedulerLike extends SchedulerLike, PauseableLike {}
