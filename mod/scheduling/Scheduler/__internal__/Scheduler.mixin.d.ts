import { Mixin } from "../../../__internal__/mixins.js";
import { PrioritySchedulerLike, SchedulerLike_now } from "../../../scheduling.js";
import { DisposableLike, QueueLike } from "../../../util.js";
export declare const ContinuationSchedulerLike_now: unique symbol;
export declare const ContinuationSchedulerLike_schedule: unique symbol;
export declare const ContinuationSchedulerLike_shouldYield: unique symbol;
export interface ContinuationSchedulerLike {
    readonly [ContinuationSchedulerLike_shouldYield]: boolean;
    readonly [ContinuationSchedulerLike_now]: number;
    [ContinuationSchedulerLike_schedule](continuation: ContinuationLike, options?: {
        readonly delay?: number;
    }): void;
}
export declare const ContinuationLike_run: unique symbol;
export declare const ContinuationLike_priority: unique symbol;
export declare const ContinuationLike_continuationScheduler: unique symbol;
export interface ContinuationLike extends DisposableLike, QueueLike<ContinuationLike>, ContinuationSchedulerLike {
    [ContinuationLike_continuationScheduler]: ContinuationSchedulerLike;
    readonly [ContinuationLike_priority]: number;
    [ContinuationLike_run](): void;
}
export declare const PrioritySchedulerImplementationLike_runContinuation: unique symbol;
export declare const PrioritySchedulerImplementationLike_shouldYield: unique symbol;
export interface PrioritySchedulerImplementationLike extends PrioritySchedulerLike, ContinuationSchedulerLike {
    readonly [PrioritySchedulerImplementationLike_shouldYield]: boolean;
    [PrioritySchedulerImplementationLike_runContinuation](continuation: ContinuationLike): void;
}
type PrioritySchedulerMixin = Omit<PrioritySchedulerImplementationLike, typeof SchedulerLike_now | typeof ContinuationSchedulerLike_schedule | typeof PrioritySchedulerImplementationLike_shouldYield>;
export declare const PriorityScheduler_mixin: Mixin<PrioritySchedulerMixin>;
export {};
