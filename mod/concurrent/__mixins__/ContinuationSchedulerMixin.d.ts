import { Mixin1 } from "../../__internal__/mixins.js";
import { SchedulerLike, SchedulerLike_now } from "../../concurrent.js";
import { DisposableLike } from "../../utils.js";
export declare const ContinuationLike_run: unique symbol;
export interface ContinuationLike extends DisposableLike {
    [ContinuationLike_run](): void;
}
export declare const ContinuationSchedulerLike_shouldYield: unique symbol;
export declare const ContinuationSchedulerLike_scheduleContinuation: unique symbol;
export interface ContinuationSchedulerLike extends Pick<SchedulerLike, typeof SchedulerLike_now> {
    readonly [ContinuationSchedulerLike_shouldYield]: boolean;
    [ContinuationSchedulerLike_scheduleContinuation](continuation: ContinuationLike, delay: number): void;
}
declare const ContinuationSchedulerMixin: Mixin1<SchedulerLike & DisposableLike & ContinuationSchedulerLike, number, ContinuationSchedulerLike>;
export default ContinuationSchedulerMixin;
