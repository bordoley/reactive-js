import { Mixin } from "../../__internal__/mixins.js";
import { DisposableLike, SchedulerLike, SchedulerLike_maxYieldInterval, SchedulerLike_now } from "../../utils.js";
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
export declare const SchedulerMixinHostLike_shouldYield: unique symbol;
export declare const SchedulerMixinHostLike_schedule: unique symbol;
export interface SchedulerMixinHostLike extends Pick<SchedulerLike, typeof SchedulerLike_now | typeof SchedulerLike_maxYieldInterval> {
    readonly [SchedulerMixinHostLike_shouldYield]: boolean;
    [SchedulerMixinHostLike_schedule](continuation: SchedulerContinuationLike): void;
}
declare const SchedulerMixin: Mixin<SchedulerLike & DisposableLike, SchedulerMixinHostLike>;
export default SchedulerMixin;
