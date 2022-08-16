import {
  SchedulerLike_inContinuation as SchedulerLike_inContinuation_internal,
  SchedulerLike_now as SchedulerLike_now_internal,
} from "./__internal__/__internal__scheduling";
import {
  ContinuationLike,
  DisposableLike,
  PauseableLike,
  SinkLike,
} from "./util";

/** @ignore */
export const SchedulerLike_inContinuation: typeof SchedulerLike_inContinuation_internal =
  SchedulerLike_inContinuation_internal;

/** @ignore */
export const SchedulerLike_now: typeof SchedulerLike_now_internal =
  SchedulerLike_now_internal;

/** @ignore */
export const SchedulerLike_requestYield = Symbol("SchedulerLike_requestYield");

/** @ignore */
export const SchedulerLike_shouldYield = Symbol("SchedulerLike_shouldYield");

/** @ignore */
export const SchedulerLike_schedule = Symbol("SchedulerLike_schedule");

export type SchedulerOptions = { readonly delay?: number };

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
    options?: SchedulerOptions,
  ): void;
}

/** @ignore */
export const DispatcherLike_dispatch = Symbol("DispatcherLike_dispatch");

/** @ignore */
export const DispatcherLike_scheduler = Symbol("DispatcherLike_scheduler");

export interface DispatcherLike<T = unknown> extends DisposableLike {
  /**
   * Dispatches the next request
   * @param req
   */
  [DispatcherLike_dispatch](req: T): void;

  readonly [DispatcherLike_scheduler]: SchedulerLike;
}

export interface PauseableSchedulerLike extends PauseableLike, SchedulerLike {}

export type PrioritySchedulerOptions = {
  readonly priority: number;
  readonly delay?: number;
};

/**
 * A scheduler which schedules work according to it's priority.
 *
 * @noInheritDoc
 */
export interface PrioritySchedulerLike extends DisposableLike {
  readonly [SchedulerLike_inContinuation]: boolean;
  readonly [SchedulerLike_now]: number;
  readonly [SchedulerLike_shouldYield]: boolean;

  /**
   * Request the scheduler to yield.
   */
  [SchedulerLike_requestYield](): void;

  [SchedulerLike_schedule](
    continuation: ContinuationLike,
    options: PrioritySchedulerOptions,
  ): void;
}

export interface VirtualTimeSchedulerLike
  extends SchedulerLike,
    ContinuationLike {}

/** @ignore */
export const ObserverLike_dispatcher = Symbol("ObserverLike_dispatcher");

/** @ignore */
export const ObserverLike_scheduler = Symbol("ObserverLike_scheduler");

export interface ObserverLike<T = unknown> extends SinkLike<T> {
  readonly [ObserverLike_dispatcher]: DispatcherLike<T>;
  readonly [ObserverLike_scheduler]: SchedulerLike;
}
