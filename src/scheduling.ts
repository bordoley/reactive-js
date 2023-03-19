import {
  ContinuationContextLike_yield,
  PauseableSchedulerLike_isPaused,
  PauseableSchedulerLike_pause,
  PauseableSchedulerLike_resume,
  SchedulerLike_inContinuation,
  SchedulerLike_maxYieldInterval,
  SchedulerLike_now,
  SchedulerLike_requestYield,
  SchedulerLike_schedule,
  SchedulerLike_shouldYield,
  VirtualTimeSchedulerLike_run,
} from "./__internal__/symbols.js";
import { SideEffect1 } from "./functions.js";
import { DisposableLike } from "./util.js";

export {
  SchedulerLike_inContinuation,
  SchedulerLike_maxYieldInterval,
  SchedulerLike_now,
  SchedulerLike_requestYield,
  SchedulerLike_shouldYield,
  SchedulerLike_schedule,
  ContinuationContextLike_yield,
  PauseableSchedulerLike_isPaused,
  PauseableSchedulerLike_pause,
  PauseableSchedulerLike_resume,
  VirtualTimeSchedulerLike_run,
};

export interface ContinuationContextLike {
  [ContinuationContextLike_yield](delay?: number): void;
}

/**
 * @noInheritDoc
 */
export interface SchedulerLike extends DisposableLike {
  readonly [SchedulerLike_inContinuation]: boolean;
  readonly [SchedulerLike_maxYieldInterval]: number;
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

/**
 * @noInheritDoc
 */
export interface PauseableSchedulerLike extends SchedulerLike {
  readonly [PauseableSchedulerLike_isPaused]: boolean;
  [PauseableSchedulerLike_pause](): void;
  [PauseableSchedulerLike_resume](): void;
}

/**
 * @noInheritDoc
 */
export interface PrioritySchedulerLike extends SchedulerLike {
  [SchedulerLike_schedule](
    continuation: SideEffect1<ContinuationContextLike>,
    options?: { readonly delay?: number; readonly priority?: number },
  ): DisposableLike;
}

/**
 * @noInheritDoc
 */
export interface VirtualTimeSchedulerLike extends SchedulerLike {
  [VirtualTimeSchedulerLike_run](): void;
}
