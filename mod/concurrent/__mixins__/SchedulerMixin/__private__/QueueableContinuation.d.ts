import { ContinuationContextLike, SchedulerLike, SchedulerLike_now, SchedulerLike_shouldYield } from "../../../../concurrent.js";
import { Optional, SideEffect1 } from "../../../../functions.js";
import { QueueLike } from "../../../../utils.js";
import { ContinuationLike } from "../../../__internal__/Continuation.js";
export declare const QueueableContinuationSchedulerLike_schedule: unique symbol;
export declare const QueueableContinuationSchedulerLike_nextTaskID: unique symbol;
export declare const QueueableContinuationSchedulerLike_currentContinuation: unique symbol;
export interface QueueableContinuationSchedulerLike extends Pick<SchedulerLike, typeof SchedulerLike_now | typeof SchedulerLike_shouldYield> {
    readonly [QueueableContinuationSchedulerLike_nextTaskID]: number;
    [QueueableContinuationSchedulerLike_currentContinuation]: Optional<QueueableContinuationLike>;
    [QueueableContinuationSchedulerLike_schedule](continuation: QueueableContinuationLike): void;
}
export declare const QueueableContinuationLike_parent: unique symbol;
export interface QueueableContinuationLike extends ContinuationLike, QueueLike<QueueableContinuationLike> {
    [QueueableContinuationLike_parent]: Optional<QueueableContinuationLike>;
}
export declare const create: (scheduler: QueueableContinuationSchedulerLike, effect: SideEffect1<ContinuationContextLike>, delay: number) => QueueableContinuationLike;
