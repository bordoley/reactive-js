import { DisposableLike, PauseableLike } from "./util.mjs";
declare const ContinuationLike_run: unique symbol;
/**
 * A unit of work to be executed by a scheduler.
 *
 * @noInheritDoc
 */
interface ContinuationLike extends DisposableLike {
    [ContinuationLike_run](): void;
}
declare const SchedulerLike_inContinuation: unique symbol;
declare const SchedulerLike_now: unique symbol;
declare const SchedulerLike_requestYield: unique symbol;
declare const SchedulerLike_shouldYield: unique symbol;
declare const SchedulerLike_schedule: unique symbol;
declare type SchedulerOptions = {
    readonly delay?: number;
};
interface SchedulerLike extends DisposableLike {
    readonly [SchedulerLike_inContinuation]: boolean;
    readonly [SchedulerLike_now]: number;
    readonly [SchedulerLike_shouldYield]: boolean;
    /**
     * Request the scheduler to yield.
     */
    [SchedulerLike_requestYield](): void;
    [SchedulerLike_schedule](continuation: ContinuationLike, options?: SchedulerOptions): void;
}
declare const DispatcherLike_dispatch: unique symbol;
declare const DispatcherLike_scheduler: unique symbol;
interface DispatcherLike<T = unknown> extends DisposableLike {
    /**
     * Dispatches the next request
     * @param req
     */
    [DispatcherLike_dispatch](req: T): void;
    readonly [DispatcherLike_scheduler]: SchedulerLike;
}
interface PauseableSchedulerLike extends PauseableLike, SchedulerLike {
}
declare type PrioritySchedulerOptions = {
    readonly priority: number;
    readonly delay?: number;
};
/**
 * A scheduler which schedules work according to it's priority.
 *
 * @noInheritDoc
 */
interface PrioritySchedulerLike extends DisposableLike {
    readonly [SchedulerLike_inContinuation]: boolean;
    readonly [SchedulerLike_now]: number;
    readonly [SchedulerLike_shouldYield]: boolean;
    /**
     * Request the scheduler to yield.
     */
    [SchedulerLike_requestYield](): void;
    [SchedulerLike_schedule](continuation: ContinuationLike, options: PrioritySchedulerOptions): void;
}
interface VirtualTimeSchedulerLike extends SchedulerLike, ContinuationLike {
}
export { ContinuationLike, ContinuationLike_run, DispatcherLike, DispatcherLike_dispatch, DispatcherLike_scheduler, PauseableSchedulerLike, PrioritySchedulerLike, PrioritySchedulerOptions, SchedulerLike, SchedulerLike_inContinuation, SchedulerLike_now, SchedulerLike_requestYield, SchedulerLike_schedule, SchedulerLike_shouldYield, SchedulerOptions, VirtualTimeSchedulerLike };
