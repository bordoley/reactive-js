import { Mixin1 } from "../../../__internal__/mixins.js";
import { ContinuationLike_continuationScheduler, ContinuationLike_priority, ContinuationLike_run, ContinuationSchedulerLike_schedule, ContinuationSchedulerLike_shouldYield, PrioritySchedulerImplementationLike_runContinuation, PrioritySchedulerImplementationLike_shouldYield } from "../../../__internal__/symbols.js";
import { PrioritySchedulerLike, SchedulerLike_now } from "../../../scheduling.js";
import { DisposableLike, QueueableLike } from "../../../util.js";
export { ContinuationLike_continuationScheduler, ContinuationLike_priority, ContinuationSchedulerLike_schedule, PrioritySchedulerImplementationLike_runContinuation, PrioritySchedulerImplementationLike_shouldYield, };
export interface ContinuationSchedulerLike {
    readonly [ContinuationSchedulerLike_shouldYield]: boolean;
    [ContinuationSchedulerLike_schedule](continuation: ContinuationLike, delay: number): void;
}
export interface ContinuationLike extends DisposableLike, QueueableLike<ContinuationLike>, ContinuationSchedulerLike {
    [ContinuationLike_continuationScheduler]: ContinuationSchedulerLike;
    readonly [ContinuationLike_priority]: number;
    [ContinuationLike_run](): void;
}
export interface PrioritySchedulerImplementationLike extends PrioritySchedulerLike, ContinuationSchedulerLike {
    readonly [PrioritySchedulerImplementationLike_shouldYield]: boolean;
    [PrioritySchedulerImplementationLike_runContinuation](continuation: ContinuationLike): void;
}
type PrioritySchedulerMixin = Omit<PrioritySchedulerImplementationLike, typeof SchedulerLike_now | typeof ContinuationSchedulerLike_schedule | typeof PrioritySchedulerImplementationLike_shouldYield | keyof DisposableLike>;
export declare const PriorityScheduler_mixin: Mixin1<Omit<PrioritySchedulerMixin, keyof DisposableLike>, number>;
