import { SchedulerLike_inContinuation, SchedulerLike_now } from "./__internal__/schedulingInternal.mjs";
export { SchedulerLike_inContinuation, SchedulerLike_now } from './__internal__/schedulingInternal.js';
import { DisposableLike, ContinuationLike, PauseableLike } from "./util.mjs";
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
declare const createHostScheduler: (options?: {
    readonly yieldInterval?: number;
}) => SchedulerLike;
declare const createVirtualTimeScheduler: (options?: {
    readonly maxMicroTaskTicks?: number;
}) => VirtualTimeSchedulerLike;
export { DispatcherLike, DispatcherLike_dispatch, DispatcherLike_scheduler, PauseableSchedulerLike, PrioritySchedulerLike, PrioritySchedulerOptions, SchedulerLike, SchedulerLike_requestYield, SchedulerLike_schedule, SchedulerLike_shouldYield, SchedulerOptions, VirtualTimeSchedulerLike, createHostScheduler, createVirtualTimeScheduler };
