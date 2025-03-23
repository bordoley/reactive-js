import { Mixin } from "../../__internal__/mixins.js";
import { DisposableLike, DisposableLike_error, DisposableLike_isDisposed, SchedulerLike, SchedulerLike_maxYieldInterval, SchedulerLike_now } from "../../utils.js";
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
declare const SchedulerMixin: Mixin<Omit<SchedulerLike & DisposableLike, typeof SchedulerLike_maxYieldInterval | typeof SchedulerLike_now>, SchedulerMixinHostLike, Omit<SchedulerLike & DisposableLike, keyof SchedulerMixinHostLike | typeof DisposableLike_error | typeof DisposableLike_isDisposed>>;
export default SchedulerMixin;
