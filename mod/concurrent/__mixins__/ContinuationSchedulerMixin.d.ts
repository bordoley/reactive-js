import { Mixin1 } from "../../__internal__/mixins.js";
import { ContinuationLike, ContinuationSchedulerLike, SchedulerLike_now } from "../../concurrent.js";
import { DisposableLike } from "../../utils.js";
export declare const ContinuationSchedulerImplementationLike_shouldYield: unique symbol;
export declare const ContinuationSchedulerImplementationLike_scheduleContinuation: unique symbol;
export interface ContinuationSchedulerImplementationLike {
    readonly [ContinuationSchedulerImplementationLike_shouldYield]: boolean;
    readonly [SchedulerLike_now]: number;
    [ContinuationSchedulerImplementationLike_scheduleContinuation](continuation: ContinuationLike, delay: number): void;
}
export declare const ContinuationSchedulerMixinLike_runContinuation: unique symbol;
export interface ContinuationSchedulerMixinLike extends ContinuationSchedulerImplementationLike, ContinuationSchedulerLike, DisposableLike {
    [ContinuationSchedulerMixinLike_runContinuation](continuation: ContinuationLike): void;
}
declare const ContinuationSchedulerMixin: Mixin1<ContinuationSchedulerMixinLike, number, ContinuationSchedulerImplementationLike>;
export default ContinuationSchedulerMixin;
