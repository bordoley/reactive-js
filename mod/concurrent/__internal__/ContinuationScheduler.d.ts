import { SchedulerLike, SchedulerLike_now } from "../../concurrent.js";
import { ContinuationLike } from "./Continuation.js";
export declare const ContinuationSchedulerLike_shouldYield: unique symbol;
export declare const ContinuationSchedulerLike_schedule: unique symbol;
export interface ContinuationSchedulerLike extends Pick<SchedulerLike, typeof SchedulerLike_now> {
    readonly [ContinuationSchedulerLike_shouldYield]: boolean;
    [ContinuationSchedulerLike_schedule](continuation: ContinuationLike): void;
}
