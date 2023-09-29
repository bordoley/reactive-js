import { Mixin1 } from "../../__internal__/mixins.js";
import { ContinuationLike, ContinuationSchedulerLike, SchedulerLike, SchedulerLike_now } from "../../concurrent.js";
import { DisposableLike } from "../../utils.js";
export declare const ContinuationSchedulerInstanceLike_shouldYield: unique symbol;
export declare const ContinuationSchedulerInstanceLike_scheduleContinuation: unique symbol;
type ContinuationSchedulerMixinInstanceBase = Pick<SchedulerLike, typeof SchedulerLike_now>;
export interface ContinuationSchedulerInstanceLike extends ContinuationSchedulerMixinInstanceBase {
    readonly [ContinuationSchedulerInstanceLike_shouldYield]: boolean;
    [ContinuationSchedulerInstanceLike_scheduleContinuation](continuation: ContinuationLike, delay: number): void;
}
export declare const ContinuationSchedulerMixinLike_runContinuation: unique symbol;
export interface ContinuationSchedulerMixinLike extends ContinuationSchedulerInstanceLike, ContinuationSchedulerLike, DisposableLike {
    [ContinuationSchedulerMixinLike_runContinuation](continuation: ContinuationLike): void;
}
declare const ContinuationSchedulerMixin: Mixin1<ContinuationSchedulerMixinLike, number, ContinuationSchedulerInstanceLike>;
export default ContinuationSchedulerMixin;
