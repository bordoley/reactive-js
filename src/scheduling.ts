import { Updater } from "./functions.js";
import { DisposableLike, QueueLike } from "./util.js";

/** @ignore */
export const ContinuationLike_run = Symbol("ContinuationLike_run");

/** @ignore */
export const ContinuationLike_scheduler = Symbol("ContinuationLike_run");

/**
 * A unit of work to be executed by a scheduler.
 *
 * @noInheritDoc
 */
export interface ContinuationLike
  extends DisposableLike,
    QueueLike<ContinuationLike> {
  readonly [ContinuationLike_scheduler]: SchedulerLike;

  [ContinuationLike_run](): void;
}

/** @ignore */
export const SchedulerLike_inContinuation = Symbol(
  "SchedulerLike_inContinuation",
);

/** @ignore */
export const SchedulerLike_now = Symbol("SchedulerLike_now");

/** @ignore */
export const SchedulerLike_requestYield = Symbol("SchedulerLike_requestYield");

/** @ignore */
export const SchedulerLike_shouldYield = Symbol("SchedulerLike_shouldYield");

/** @ignore */
export const SchedulerLike_schedule = Symbol("SchedulerLike_schedule");

/**
 * @noInheritDoc
 */
export interface SchedulerLike extends DisposableLike {
  readonly [SchedulerLike_inContinuation]: boolean;
  readonly [SchedulerLike_now]: number;
  readonly [SchedulerLike_shouldYield]: boolean;

  /**
   * Request the scheduler to yield.
   */
  [SchedulerLike_requestYield](): void;

  [SchedulerLike_schedule](
    continuation: ContinuationLike,
    options?: { readonly delay?: number },
  ): void;
}

/** @ignore */
export const DispatcherLike_scheduler = Symbol("DispatcherLike_scheduler");

/**
 * @noInheritDoc
 */
export interface DispatcherLike<T = unknown>
  extends QueueLike<T>,
    DisposableLike {
  readonly [DispatcherLike_scheduler]: SchedulerLike;
}

/** @ignore */
export const PauseableState_running = Symbol("PauseableState_running");
/** @ignore */
export const PauseableState_paused = Symbol("PauseableState_paused");

export type PauseableState =
  | typeof PauseableState_running
  | typeof PauseableState_paused;

/**
 * @noInheritDoc
 */
export interface PauseableLike extends QueueLike<Updater<PauseableState>> {}

/** @ignore */
export const PauseableSchedulerLike_isPaused = Symbol(
  "PauseableSchedulerLike_isPaused",
);

/**
 * @noInheritDoc
 */
export interface PauseableSchedulerLike extends PauseableLike, SchedulerLike {
  readonly [PauseableSchedulerLike_isPaused]: boolean;
}

/**
 * A scheduler which schedules work according to it's priority.
 *
 * @noInheritDoc
 */
export interface PrioritySchedulerLike extends SchedulerLike {
  [SchedulerLike_schedule](
    continuation: ContinuationLike,
    options?: {
      readonly priority?: number;
      readonly delay?: number;
    },
  ): void;
}

/** @ignore */
export const VirtualTimeSchedulerLike_run = Symbol(
  "VirtualTimeSchedulerLike_run",
);

/**
 * @noInheritDoc
 */
export interface VirtualTimeSchedulerLike extends SchedulerLike {
  [VirtualTimeSchedulerLike_run](): void;
}
