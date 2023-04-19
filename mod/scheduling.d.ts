import { __ContinuationContextLike_yield as ContinuationContextLike_yield, __PauseableSchedulerLike_isPaused as PauseableSchedulerLike_isPaused, __PauseableSchedulerLike_pause as PauseableSchedulerLike_pause, __PauseableSchedulerLike_resume as PauseableSchedulerLike_resume, __SchedulerLike_inContinuation as SchedulerLike_inContinuation, __SchedulerLike_maxYieldInterval as SchedulerLike_maxYieldInterval, __SchedulerLike_now as SchedulerLike_now, __SchedulerLike_requestYield as SchedulerLike_requestYield, __SchedulerLike_schedule as SchedulerLike_schedule, __SchedulerLike_shouldYield as SchedulerLike_shouldYield, __VirtualTimeSchedulerLike_run as VirtualTimeSchedulerLike_run } from "./__internal__/symbols.js";
import { SideEffect1 } from "./functions.js";
import { DisposableLike } from "./util.js";
export { ContinuationContextLike_yield, PauseableSchedulerLike_isPaused, PauseableSchedulerLike_pause, PauseableSchedulerLike_resume, SchedulerLike_inContinuation, SchedulerLike_maxYieldInterval, SchedulerLike_now, SchedulerLike_requestYield, SchedulerLike_schedule, SchedulerLike_shouldYield, VirtualTimeSchedulerLike_run, };
/**
 * A context object passed by a scheduler to a continuation
 * when it is run, which can be used by the continuation to
 * yield control back to the scheduler.
 */
export interface ContinuationContextLike {
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
    [ContinuationContextLike_yield](delay?: number): void;
}
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
     * Schedule a continuation on the Scheduler.
     * @param continuation - The continuation to run on the scheduler.
     * @param options
     */
    [SchedulerLike_schedule](continuation: SideEffect1<ContinuationContextLike>, options?: {
        /**
         * The amount of time in ms to delay execution of the continuation.
         */
        readonly delay?: number;
    }): DisposableLike;
}
/**
 * A `SchedulerLike` that supports imperative pausing and resuming
 * of it's run loop.
 *
 * @noInheritDoc
 */
export interface PauseableSchedulerLike extends SchedulerLike {
    /**
     * Boolean flag indicating if the scheduler is currently paused or not.
     */
    readonly [PauseableSchedulerLike_isPaused]: boolean;
    /**
     * Imperatively pause the scheduler.
     */
    [PauseableSchedulerLike_pause](): void;
    /**
     * Imperatively resume the scheduler.
     */
    [PauseableSchedulerLike_resume](): void;
}
/**
 * A scheduler that support priority scheduling based upon priority.
 *
 * Lower priority values indicate higher priority.
 *
 * @noInheritDoc
 */
export interface PrioritySchedulerLike extends SchedulerLike {
    [SchedulerLike_schedule](continuation: SideEffect1<ContinuationContextLike>, options?: {
        /**
         * The amount of time in ms to delay execution of the continuation.
         */
        readonly delay?: number;
        /**
         * The priority to execute the continuation with. The default behavior
         * is implementation specific.
         */
        readonly priority?: number;
    }): DisposableLike;
}
/**
 * A non-concurrent scheduler that simulates time but executes synchronously.
 *
 * @noInheritDoc
 */
export interface VirtualTimeSchedulerLike extends SchedulerLike {
    /**
     * Runs the scheduler synchronously until it has no more
     * enqueued continuations, at which time the scheduler will auto dispose.
     */
    [VirtualTimeSchedulerLike_run](): void;
}
