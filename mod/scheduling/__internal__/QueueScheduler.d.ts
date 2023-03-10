import { Function1, SideEffect1 } from "../../functions.js";
import { ContinuationContextLike, PauseableSchedulerLike, PrioritySchedulerLike, SchedulerLike, SchedulerLike_schedule } from "../../scheduling.js";
import { DisposableLike } from "../../util.js";
export type QueueSchedulerOptions = {
    readonly priority?: number;
    readonly delay?: number;
};
export interface QueueSchedulerLike extends DisposableLike, PauseableSchedulerLike, PrioritySchedulerLike {
    [SchedulerLike_schedule](effect: SideEffect1<ContinuationContextLike>, options?: QueueSchedulerOptions): DisposableLike;
}
export declare const create: Function1<SchedulerLike, QueueSchedulerLike>;
