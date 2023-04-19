import { Mixin1 } from "../../../__internal__/mixins.js";
import { __ContinuationLike_priority as ContinuationLike_priority, __ContinuationLike_run as ContinuationLike_run, __ContinuationSchedulerLike_schedule as ContinuationSchedulerLike_schedule, __PrioritySchedulerImplementationLike_runContinuation as PrioritySchedulerImplementationLike_runContinuation, __PrioritySchedulerImplementationLike_shouldYield as PrioritySchedulerImplementationLike_shouldYield } from "../../../__internal__/symbols.js";
import { SideEffect1 } from "../../../functions.js";
import { PrioritySchedulerLike, SchedulerLike, SchedulerLike_now, SchedulerLike_schedule } from "../../../scheduling.js";
import { CollectionLike, DisposableLike, QueueableLike } from "../../../util.js";
export { ContinuationLike_priority, ContinuationLike_run, ContinuationSchedulerLike_schedule, PrioritySchedulerImplementationLike_runContinuation, PrioritySchedulerImplementationLike_shouldYield, };
export interface ContinuationSchedulerLike {
    [ContinuationSchedulerLike_schedule](continuation: ContinuationLike, delay: number): void;
}
export interface ContinuationLike extends DisposableLike, QueueableLike<ContinuationLike>, CollectionLike {
    readonly [ContinuationLike_priority]: number;
    [ContinuationLike_run](): void;
}
export interface PrioritySchedulerImplementationLike extends PrioritySchedulerLike, ContinuationSchedulerLike, DisposableLike {
    readonly [PrioritySchedulerImplementationLike_shouldYield]: boolean;
    [PrioritySchedulerImplementationLike_runContinuation](continuation: ContinuationLike): void;
    [SchedulerLike_schedule](continuation: SideEffect1<SchedulerLike>, options?: {
        /**
         * The amount of time in ms to delay execution of the continuation.
         */
        readonly delay?: number;
        /**
         * The priority to execute the continuation with. The default behavior
         * is implementation specific.
         */
        readonly priority?: number;
    }): DisposableLike;
}
type PrioritySchedulerMixin = Omit<PrioritySchedulerImplementationLike, typeof SchedulerLike_now | typeof ContinuationSchedulerLike_schedule | typeof PrioritySchedulerImplementationLike_shouldYield>;
export declare const PriorityScheduler_mixin: Mixin1<PrioritySchedulerMixin, number>;
