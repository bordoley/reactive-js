import { Mixin } from "../../__internal__/mixins.js";
import { SchedulerLike, SchedulerLike_maxYieldInterval, SchedulerLike_now } from "../../concurrent.js";
import { DisposableLike } from "../../utils.js";
export declare const SchedulerContinuationLike_run: unique symbol;
export declare const SchedulerContinuationLike_dueTime: unique symbol;
export declare const SchedulerContinuationLike_id: unique symbol;
export interface SchedulerContinuationLike extends DisposableLike {
    readonly [SchedulerContinuationLike_dueTime]: number;
    readonly [SchedulerContinuationLike_id]: number;
    [SchedulerContinuationLike_run](): void;
}
export declare const SchedulerContinuation: {
    compare: (a: SchedulerContinuationLike, b: SchedulerContinuationLike) => number;
};
export declare const SchedulerMixinBaseLike_shouldYield: unique symbol;
export declare const SchedulerMixinBaseLike_schedule: unique symbol;
export interface SchedulerMixinBaseLike extends Pick<SchedulerLike, typeof SchedulerLike_now | typeof SchedulerLike_maxYieldInterval> {
    readonly [SchedulerMixinBaseLike_shouldYield]: boolean;
    [SchedulerMixinBaseLike_schedule](continuation: SchedulerContinuationLike): void;
}
declare const SchedulerMixin: Mixin<SchedulerLike & DisposableLike, SchedulerMixinBaseLike>;
export default SchedulerMixin;
