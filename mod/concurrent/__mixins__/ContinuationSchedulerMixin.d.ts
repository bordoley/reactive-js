import { Mixin1 } from "../../__internal__/mixins.js";
import { SchedulerLike, SchedulerLike_now } from "../../concurrent.js";
import { DisposableLike } from "../../utils.js";
export declare const ContinuationLike_run: unique symbol;
export declare const ContinuationLike_dueTime: unique symbol;
export declare const ContinuationLike_id: unique symbol;
export interface ContinuationLike extends DisposableLike {
    readonly [ContinuationLike_dueTime]: number;
    readonly [ContinuationLike_id]: number;
    [ContinuationLike_run](): void;
}
export declare const ContinuationLike_comparator: (a: ContinuationLike, b: ContinuationLike) => number;
export declare const ContinuationSchedulerLike_shouldYield: unique symbol;
export declare const ContinuationSchedulerLike_scheduleContinuation: unique symbol;
export interface ContinuationSchedulerLike extends Pick<SchedulerLike, typeof SchedulerLike_now> {
    readonly [ContinuationSchedulerLike_shouldYield]: boolean;
    [ContinuationSchedulerLike_scheduleContinuation](continuation: ContinuationLike): void;
}
declare const ContinuationSchedulerMixin: Mixin1<SchedulerLike & DisposableLike, number, ContinuationSchedulerLike>;
export default ContinuationSchedulerMixin;
