import { Mixin1 } from "../../__internal__/mixins.js";
import { SchedulerLike, SchedulerLike_now } from "../../concurrent.js";
import { DisposableLike } from "../../utils.js";
export declare const ContinuationLike_run: unique symbol;
export interface ContinuationLike extends DisposableLike {
    [ContinuationLike_run](): void;
}
export declare const ContinuationSchedulerImplementationLike_shouldYield: unique symbol;
export declare const ContinuationSchedulerImplementationLike_scheduleContinuation: unique symbol;
export interface ContinuationSchedulerImplementationLike {
    readonly [ContinuationSchedulerImplementationLike_shouldYield]: boolean;
    readonly [SchedulerLike_now]: number;
    [ContinuationSchedulerImplementationLike_scheduleContinuation](continuation: ContinuationLike, delay: number): void;
}
export interface ContinuationSchedulerLike extends SchedulerLike, ContinuationSchedulerImplementationLike, DisposableLike {
}
declare const ContinuationSchedulerMixin: Mixin1<ContinuationSchedulerLike, number, ContinuationSchedulerImplementationLike>;
export default ContinuationSchedulerMixin;
