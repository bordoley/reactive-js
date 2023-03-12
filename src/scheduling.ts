import { SideEffect1 } from "./functions.js";
import { DisposableLike, QueueableLike } from "./util.js";

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

/** @ignore */
export const ContinuationContextLike_now = Symbol(
  "ContinuationContextLike_now",
);
/** @ignore */
export const ContinuationContextLike_yield = Symbol(
  "ContinuationContextLike_yield",
);
export interface ContinuationContextLike {
  readonly [ContinuationContextLike_now]: number;
  [ContinuationContextLike_yield](delay?: number): void;
}

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
    continuation: SideEffect1<ContinuationContextLike>,
    options?: { readonly delay?: number },
  ): DisposableLike;
}

/** @ignore */
export const PauseableSchedulerLike_isPaused = Symbol(
  "PauseableSchedulerLike_isPaused",
);

/** @ignore */
export const PauseableSchedulerLike_pause = Symbol(
  "PauseableSchedulerLike_pause",
);

/** @ignore */
export const PauseableSchedulerLike_resume = Symbol(
  "PauseableSchedulerLike_resume",
);

/**
 * @noInheritDoc
 */
export interface PauseableSchedulerLike extends SchedulerLike {
  readonly [PauseableSchedulerLike_isPaused]: boolean;
  [PauseableSchedulerLike_pause](): void;
  [PauseableSchedulerLike_resume](): void;
}

export interface PrioritySchedulerLike extends SchedulerLike {
  [SchedulerLike_schedule](
    continuation: SideEffect1<ContinuationContextLike>,
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

/** @ignore */
export const DispatcherLike_scheduler = Symbol("DispatcherLike_scheduler");

/**
 * @noInheritDoc
 */
export interface DispatcherLike<T = unknown>
  extends QueueableLike<T>,
    DisposableLike {
  readonly [DispatcherLike_scheduler]: SchedulerLike;
}
