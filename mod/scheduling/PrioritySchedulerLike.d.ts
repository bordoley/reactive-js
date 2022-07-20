import { DisposableLike } from '../util/DisposableLike.js';
import { ContinuationLike } from "./ContinuationLike.mjs";
import { SchedulerLike_inContinuation, SchedulerLike_now, SchedulerLike_shouldYield, SchedulerLike_requestYield, SchedulerLike_schedule } from "./SchedulerLike.mjs";
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
export { PrioritySchedulerLike, PrioritySchedulerOptions };
