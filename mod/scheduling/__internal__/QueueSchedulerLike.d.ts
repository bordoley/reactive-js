import { Function1 } from "../../functions.mjs";
import { SchedulerLike_inContinuation, SchedulerLike_now, SchedulerLike_shouldYield, SchedulerLike_requestYield, SchedulerLike_schedule, ContinuationLike, SchedulerLike } from "../../scheduling.mjs";
import { DisposableLike, PauseableLike } from "../../util.mjs";
declare type QueueSchedulerOptions = {
    readonly priority?: number;
    readonly delay?: number;
};
interface QueueSchedulerLike extends DisposableLike, PauseableLike {
    readonly [SchedulerLike_inContinuation]: boolean;
    readonly [SchedulerLike_now]: number;
    readonly [SchedulerLike_shouldYield]: boolean;
    [SchedulerLike_requestYield](): void;
    [SchedulerLike_schedule](continuation: ContinuationLike, options?: QueueSchedulerOptions): void;
}
declare const create: Function1<SchedulerLike, QueueSchedulerLike>;
export { QueueSchedulerLike, QueueSchedulerOptions, create };
