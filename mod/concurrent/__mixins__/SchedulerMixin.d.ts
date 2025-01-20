import { Mixin } from "../../__internal__/mixins.js";
import { SchedulerLike, SchedulerLike_maxYieldInterval, SchedulerLike_now } from "../../concurrent.js";
import { DisposableLike } from "../../utils.js";
import { ContinuationLike } from "../__internal__/Continuation.js";
declare const SchedulerMixin: Mixin<SchedulerLike & DisposableLike, SchedulerMixinBaseLike>;
export default SchedulerMixin;
export declare const SchedulerMixinBaseLike_shouldYield: unique symbol;
export declare const SchedulerMixinBaseLike_schedule: unique symbol;
export interface SchedulerMixinBaseLike extends Pick<SchedulerLike, typeof SchedulerLike_now | typeof SchedulerLike_maxYieldInterval> {
    readonly [SchedulerMixinBaseLike_shouldYield]: boolean;
    [SchedulerMixinBaseLike_schedule](continuation: ContinuationLike): void;
}
