import { Mixin1 } from "../../__internal__/mixins.js";
import { __SchedulerImplementationLike_runContinuation as SchedulerImplementationLike_runContinuation, __SchedulerImplementationLike_scheduleContinuation as SchedulerImplementationLike_scheduleContinuation, __SchedulerImplementationLike_shouldYield as SchedulerImplementationLike_shouldYield } from "../../__internal__/symbols.js";
import { ContinuationLike, ContinuationSchedulerLike } from "../../__internal__/types.js";
import { DisposableLike, SchedulerLike, SchedulerLike_now } from "../../types.js";
export { SchedulerImplementationLike_runContinuation, SchedulerImplementationLike_scheduleContinuation, SchedulerImplementationLike_shouldYield, };
export interface SchedulerImplementationLike extends SchedulerLike, ContinuationSchedulerLike, DisposableLike {
    readonly [SchedulerImplementationLike_shouldYield]: boolean;
    [SchedulerImplementationLike_runContinuation](continuation: ContinuationLike): void;
    [SchedulerImplementationLike_scheduleContinuation](continuation: ContinuationLike, delay: number): void;
}
type SchedulerImplementationMixin = Omit<SchedulerImplementationLike, typeof SchedulerLike_now | typeof SchedulerImplementationLike_scheduleContinuation | typeof SchedulerImplementationLike_shouldYield>;
export declare const SchedulerImplementation_mixin: Mixin1<SchedulerImplementationMixin, number>;
