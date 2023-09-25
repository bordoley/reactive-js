import { StoreLike } from "./events.js";
import { SideEffect1 } from "./functions.js";
import { DisposableLike } from "./utils.js";
export declare const PauseableLike_isPaused: unique symbol;
export declare const PauseableLike_pause: unique symbol;
export declare const PauseableLike_resume: unique symbol;
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
export declare const SchedulerLike_yield: unique symbol;
export declare const SchedulerLike_inContinuation: unique symbol;
export declare const SchedulerLike_maxYieldInterval: unique symbol;
export declare const SchedulerLike_now: unique symbol;
export declare const SchedulerLike_requestYield: unique symbol;
export declare const SchedulerLike_schedule: unique symbol;
export declare const SchedulerLike_shouldYield: unique symbol;
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
    [SchedulerLike_schedule](continuation: SideEffect1<SchedulerLike>, options?: {
        /**
         * The amount of time in ms to delay execution of the continuation.
         */
        readonly delay?: number;
    }): DisposableLike;
}
export declare const VirtualTimeSchedulerLike_run: unique symbol;
/**
 * A non-concurrent scheduler that simulates time but executes synchronously.
 *
 * @noInheritDoc
 */
export interface VirtualTimeSchedulerLike extends SchedulerLike, DisposableLike {
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
export interface PauseableSchedulerLike extends SchedulerLike, PauseableLike {
}
