import { Function1 } from "../../functions.mjs";
import { ContinuationLike, SchedulerLike_inContinuation, SchedulerLike_now, SchedulerLike_shouldYield, SchedulerLike_requestYield, SchedulerLike_schedule, SchedulerLike } from "../../scheduling.mjs";
import { DisposableLike, PauseableLike } from "../../util.mjs";
declare type QueueTask = {
    readonly continuation: ContinuationLike;
    dueTime: number;
    readonly priority: number;
    taskID: number;
};
declare type QueueSchedulerOptions = {
    readonly priority?: number;
    readonly delay?: number;
};
/**
 * A scheduler which schedules work according to it's priority.
 *
 * @noInheritDoc
 */
interface QueueSchedulerLike extends DisposableLike, PauseableLike {
    readonly [SchedulerLike_inContinuation]: boolean;
    readonly [SchedulerLike_now]: number;
    readonly [SchedulerLike_shouldYield]: boolean;
    /**
     * Request the scheduler to yield.
     */
    [SchedulerLike_requestYield](): void;
    [SchedulerLike_schedule](continuation: ContinuationLike, options?: QueueSchedulerOptions): void;
}
declare const create: Function1<SchedulerLike, QueueSchedulerLike>;
export { QueueSchedulerLike, QueueSchedulerOptions, QueueTask, create };
