import { SideEffect1 } from "./functions.js";
import { DisposableLike, QueueableLike } from "./util.js";
/** @ignore */
export declare const SchedulerLike_inContinuation: unique symbol;
/** @ignore */
export declare const SchedulerLike_now: unique symbol;
/** @ignore */
export declare const SchedulerLike_requestYield: unique symbol;
/** @ignore */
export declare const SchedulerLike_shouldYield: unique symbol;
/** @ignore */
export declare const SchedulerLike_schedule: unique symbol;
/** @ignore */
export declare const ContinuationContextLike_now: unique symbol;
/** @ignore */
export declare const ContinuationContextLike_yield: unique symbol;
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
    [SchedulerLike_schedule](continuation: SideEffect1<ContinuationContextLike>, options?: {
        readonly delay?: number;
    }): DisposableLike;
}
/** @ignore */
export declare const PauseableSchedulerLike_isPaused: unique symbol;
/** @ignore */
export declare const PauseableSchedulerLike_pause: unique symbol;
/** @ignore */
export declare const PauseableSchedulerLike_resume: unique symbol;
/**
 * @noInheritDoc
 */
export interface PauseableSchedulerLike extends SchedulerLike {
    readonly [PauseableSchedulerLike_isPaused]: boolean;
    [PauseableSchedulerLike_pause](): void;
    [PauseableSchedulerLike_resume](): void;
}
export interface PrioritySchedulerLike extends SchedulerLike {
    [SchedulerLike_schedule](continuation: SideEffect1<ContinuationContextLike>, options?: {
        readonly delay?: number;
        readonly priority?: number;
    }): DisposableLike;
}
/** @ignore */
export declare const VirtualTimeSchedulerLike_run: unique symbol;
/**
 * @noInheritDoc
 */
export interface VirtualTimeSchedulerLike extends SchedulerLike {
    [VirtualTimeSchedulerLike_run](): void;
}
/** @ignore */
export declare const DispatcherLike_scheduler: unique symbol;
/**
 * @noInheritDoc
 */
export interface DispatcherLike<T = unknown> extends QueueableLike<T>, DisposableLike {
    readonly [DispatcherLike_scheduler]: SchedulerLike;
}
