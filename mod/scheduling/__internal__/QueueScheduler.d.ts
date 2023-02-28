import { Function1 } from "../../functions.js";
import { ContinuationLike, PauseableSchedulerLike, SchedulerLike, SchedulerLike_inContinuation, SchedulerLike_now, SchedulerLike_requestYield, SchedulerLike_schedule, SchedulerLike_shouldYield } from "../../scheduling.js";
import { DisposableLike } from "../../util.js";
export type QueueSchedulerOptions = {
    readonly priority?: number;
    readonly delay?: number;
};
export interface QueueSchedulerLike extends DisposableLike, PauseableSchedulerLike {
    readonly [SchedulerLike_inContinuation]: boolean;
    readonly [SchedulerLike_now]: number;
    readonly [SchedulerLike_shouldYield]: boolean;
    [SchedulerLike_requestYield](): void;
    [SchedulerLike_schedule](continuation: ContinuationLike, options?: QueueSchedulerOptions): void;
}
export declare const create: Function1<SchedulerLike, QueueSchedulerLike>;
