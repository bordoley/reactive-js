import { Optional } from "../functions.js";
import { SchedulerLike } from "../scheduling.js";
import { CollectionLike, DisposableLike, QueueableLike } from "../util.js";
import { __ContinuationLike_activeChild as ContinuationLike_activeChild, __ContinuationLike_parent as ContinuationLike_parent, __ContinuationLike_priority as ContinuationLike_priority, __ContinuationLike_run as ContinuationLike_run, __ContinuationLike_scheduler as ContinuationLike_scheduler, __ContinuationSchedulerLike_schedule as ContinuationSchedulerLike_schedule } from "./symbols.js";
export { ContinuationLike_activeChild, ContinuationLike_parent, ContinuationLike_priority, ContinuationLike_run, ContinuationLike_scheduler, ContinuationSchedulerLike_schedule, };
export interface ContinuationLike extends DisposableLike, QueueableLike<ContinuationLike>, CollectionLike {
    readonly [ContinuationLike_activeChild]: Optional<ContinuationLike>;
    readonly [ContinuationLike_priority]: number;
    readonly [ContinuationLike_scheduler]: ContinuationSchedulerLike;
    [ContinuationLike_parent]: Optional<ContinuationLike>;
    [ContinuationLike_run](): void;
}
export interface ContinuationSchedulerLike extends SchedulerLike {
    [ContinuationSchedulerLike_schedule](continuation: ContinuationLike, options?: {
        readonly delay?: number;
    }): void;
}
