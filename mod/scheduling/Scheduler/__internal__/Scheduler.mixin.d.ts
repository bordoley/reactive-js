import { Mixin1 } from "../../../__internal__/mixins.js";
import { ContinuationLike, ContinuationSchedulerLike } from "../../../__internal__/scheduling.js";
import { __PrioritySchedulerImplementationLike_runContinuation as PrioritySchedulerImplementationLike_runContinuation, __PrioritySchedulerImplementationLike_scheduleContinuation as PrioritySchedulerImplementationLike_scheduleContinuation, __PrioritySchedulerImplementationLike_shouldYield as PrioritySchedulerImplementationLike_shouldYield } from "../../../__internal__/symbols.js";
import { SideEffect1 } from "../../../functions.js";
import { PrioritySchedulerLike, SchedulerLike, SchedulerLike_now, SchedulerLike_schedule } from "../../../scheduling.js";
import { DisposableLike } from "../../../util.js";
export { PrioritySchedulerImplementationLike_runContinuation, PrioritySchedulerImplementationLike_scheduleContinuation, PrioritySchedulerImplementationLike_shouldYield, };
export interface PrioritySchedulerImplementationLike extends PrioritySchedulerLike, ContinuationSchedulerLike, DisposableLike {
    readonly [PrioritySchedulerImplementationLike_shouldYield]: boolean;
    [PrioritySchedulerImplementationLike_runContinuation](continuation: ContinuationLike): void;
    [PrioritySchedulerImplementationLike_scheduleContinuation](continuation: ContinuationLike, delay: number): void;
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
type PrioritySchedulerMixin = Omit<PrioritySchedulerImplementationLike, typeof SchedulerLike_now | typeof PrioritySchedulerImplementationLike_scheduleContinuation | typeof PrioritySchedulerImplementationLike_shouldYield>;
export declare const PriorityScheduler_mixin: Mixin1<PrioritySchedulerMixin, number>;
