import { Mixin1 } from "../../../__internal__/mixins.js";
import { __ContinuationLike_continuationScheduler as ContinuationLike_continuationScheduler, __ContinuationLike_priority as ContinuationLike_priority, __ContinuationLike_run as ContinuationLike_run, __ContinuationSchedulerLike_schedule as ContinuationSchedulerLike_schedule, __ContinuationSchedulerLike_shouldYield as ContinuationSchedulerLike_shouldYield, __PrioritySchedulerImplementationLike_runContinuation as PrioritySchedulerImplementationLike_runContinuation, __PrioritySchedulerImplementationLike_shouldYield as PrioritySchedulerImplementationLike_shouldYield } from "../../../__internal__/symbols.js";
import { PrioritySchedulerLike, SchedulerLike_now } from "../../../scheduling.js";
import { DisposableLike, QueueableLike } from "../../../util.js";
export { ContinuationLike_continuationScheduler, ContinuationLike_priority, ContinuationLike_run, ContinuationSchedulerLike_schedule, ContinuationSchedulerLike_shouldYield, PrioritySchedulerImplementationLike_runContinuation, PrioritySchedulerImplementationLike_shouldYield, };
export interface ContinuationSchedulerLike {
    readonly [ContinuationSchedulerLike_shouldYield]: boolean;
    [ContinuationSchedulerLike_schedule](continuation: ContinuationLike, delay: number): void;
}
export interface ContinuationLike extends DisposableLike, QueueableLike<ContinuationLike>, ContinuationSchedulerLike {
    [ContinuationLike_continuationScheduler]: ContinuationSchedulerLike;
    readonly [ContinuationLike_priority]: number;
    [ContinuationLike_run](): void;
}
export interface PrioritySchedulerImplementationLike extends PrioritySchedulerLike, ContinuationSchedulerLike, DisposableLike {
    readonly [PrioritySchedulerImplementationLike_shouldYield]: boolean;
    [PrioritySchedulerImplementationLike_runContinuation](continuation: ContinuationLike): void;
}
type PrioritySchedulerMixin = Omit<PrioritySchedulerImplementationLike, typeof SchedulerLike_now | typeof ContinuationSchedulerLike_schedule | typeof PrioritySchedulerImplementationLike_shouldYield>;
export declare const PriorityScheduler_mixin: Mixin1<PrioritySchedulerMixin, number>;
