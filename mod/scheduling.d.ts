import { Updater } from "./functions.js";
import { DisposableLike } from "./util.js";
/** @ignore */
declare const ContinuationLike_run: unique symbol;
/**
 * A unit of work to be executed by a scheduler.
 *
 * @noInheritDoc
 */
interface ContinuationLike extends DisposableLike {
    [ContinuationLike_run](): void;
}
/** @ignore */
declare const SchedulerLike_inContinuation: unique symbol;
/** @ignore */
declare const SchedulerLike_now: unique symbol;
/** @ignore */
declare const SchedulerLike_requestYield: unique symbol;
/** @ignore */
declare const SchedulerLike_shouldYield: unique symbol;
/** @ignore */
declare const SchedulerLike_schedule: unique symbol;
interface SchedulerLike extends DisposableLike {
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
declare const DispatcherLike_dispatch: unique symbol;
/** @ignore */
declare const DispatcherLike_scheduler: unique symbol;
interface DispatcherLike<T = unknown> extends DisposableLike {
    /**
     * Dispatches the next request
     * @param req
     */
    [DispatcherLike_dispatch](req: T): void;
    readonly [DispatcherLike_scheduler]: SchedulerLike;
}
declare const PauseableState_running: unique symbol;
declare const PauseableState_paused: unique symbol;
type PauseableState = typeof PauseableState_running | typeof PauseableState_paused;
interface PauseableLike extends DispatcherLike<Updater<PauseableState>> {
}
interface PauseableSchedulerLike extends PauseableLike, SchedulerLike {
}
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
    [SchedulerLike_schedule](continuation: ContinuationLike, options: {
        readonly priority: number;
        readonly delay?: number;
    }): void;
}
interface VirtualTimeSchedulerLike extends SchedulerLike, ContinuationLike {
}
export { ContinuationLike, ContinuationLike_run, DispatcherLike, DispatcherLike_dispatch, DispatcherLike_scheduler, PauseableLike, PauseableSchedulerLike, PauseableState, PauseableState_paused, PauseableState_running, PrioritySchedulerLike, SchedulerLike, SchedulerLike_inContinuation, SchedulerLike_now, SchedulerLike_requestYield, SchedulerLike_schedule, SchedulerLike_shouldYield, VirtualTimeSchedulerLike };
