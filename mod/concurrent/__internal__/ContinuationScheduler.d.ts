import { SchedulerLike, SchedulerLike_maxYieldInterval, SchedulerLike_now } from "../../concurrent.js";
import { ContinuationLike } from "./Continuation.js";
export declare const ContinuationSchedulerLike_shouldYield: unique symbol;
export declare const ContinuationSchedulerLike_schedule: unique symbol;
export interface ContinuationSchedulerLike extends Pick<SchedulerLike, typeof SchedulerLike_now | typeof SchedulerLike_maxYieldInterval> {
    readonly [ContinuationSchedulerLike_shouldYield]: boolean;
    [ContinuationSchedulerLike_schedule](continuation: ContinuationLike): void;
}
