import { DisposableLike } from "../util/DisposableLike.mjs";
import { Function1 } from "../util/functions.mjs";
import { ContinuationLike } from "./ContinuationLike.mjs";
import { SchedulerLike_now, SchedulerLike_shouldYield, SchedulerLike_requestYield, SchedulerLike_schedule, SchedulerLike } from "./SchedulerLike.mjs";
import { SchedulerLike_inContinuation } from "../__internal__/scheduling.mjs";
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
/**
 * Converts a PrioritySchedulerLike to a SchedulerLike that schedules work with the given priority.
 *
 * @param priorityScheduler The underlying scheduler upon which to scheduler work.
 * @param priority The priority to schedule work at.
 */
declare const toScheduler: (priority: number) => Function1<PrioritySchedulerLike, SchedulerLike>;
declare const create: Function1<SchedulerLike, PrioritySchedulerLike>;
export { PrioritySchedulerLike, PrioritySchedulerOptions, create, toScheduler };
