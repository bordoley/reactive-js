import { SideEffect, Updater } from "./functions.js";
import { DisposableLike, QueueLike } from "./util.js";

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
    continuation: SideEffect,
    options?: { readonly delay?: number },
  ): DisposableLike;
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

export interface PrioritySchedulerLike extends SchedulerLike {
  [SchedulerLike_schedule](
    continuation: SideEffect,
    options?: { readonly delay?: number; readonly priority?: number },
  ): DisposableLike;
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
