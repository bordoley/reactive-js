import { Updater } from "./functions.js";
import { DisposableLike } from "./util.js";
/** @ignore */
export declare const ContinuationLike_run: unique symbol;
/**
 * A unit of work to be executed by a scheduler.
 *
 * @noInheritDoc
 */
export interface ContinuationLike extends DisposableLike {
    [ContinuationLike_run](): void;
}
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
    [SchedulerLike_schedule](continuation: ContinuationLike, options?: {
        readonly delay?: number;
    }): void;
}
/** @ignore */
export declare const DispatcherLike_dispatch: unique symbol;
/** @ignore */
export declare const DispatcherLike_scheduler: unique symbol;
/** @ignore */
export declare const DispatcherLike_count: unique symbol;
/**
 * @noInheritDoc
 */
export interface DispatcherLike<T = unknown> extends DisposableLike {
    /**
     * Dispatches the next request
     * @param req
     */
    [DispatcherLike_dispatch](req: T): void;
    readonly [DispatcherLike_scheduler]: SchedulerLike;
    /**
     * The number of queued up events on the dispatcher's dispatch queue.
     */
    readonly [DispatcherLike_count]: number;
}
export declare const PauseableState_running: unique symbol;
export declare const PauseableState_paused: unique symbol;
export type PauseableState = typeof PauseableState_running | typeof PauseableState_paused;
/**
 * @noInheritDoc
 */
export interface PauseableLike extends DispatcherLike<Updater<PauseableState>> {
}
/**
 * @noInheritDoc
 */
export interface PauseableSchedulerLike extends PauseableLike, SchedulerLike {
}
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
    [SchedulerLike_schedule](continuation: ContinuationLike, options: {
        readonly priority: number;
        readonly delay?: number;
    }): void;
}
/**
 * @noInheritDoc
 */
export interface VirtualTimeSchedulerLike extends SchedulerLike, ContinuationLike {
}
