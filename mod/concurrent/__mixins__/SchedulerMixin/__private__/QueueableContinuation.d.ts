import { ContinuationContextLike, SchedulerLike, SchedulerLike_now, SchedulerLike_shouldYield } from "../../../../concurrent.js";
import { Optional, SideEffect1 } from "../../../../functions.js";
import { QueueLike } from "../../../../utils.js";
import { ContinuationLike } from "../../../__internal__/Continuation.js";
export declare const QueueableContinuationLike_parent: unique symbol;
export interface QueueableContinuationLike extends ContinuationLike, QueueLike<QueueableContinuationLike> {
    [QueueableContinuationLike_parent]: Optional<QueueableContinuationLike>;
}
export declare const QueueableSchedulerMixinBaseLike_schedule: unique symbol;
export declare const QueueableSchedulerMixinBaseLike_nextTaskID: unique symbol;
export declare const QueueableSchedulerMixinBaseLike_currentContinuation: unique symbol;
export interface QueueableSchedulerMixinBaseLike extends Pick<SchedulerLike, typeof SchedulerLike_now | typeof SchedulerLike_shouldYield> {
    readonly [QueueableSchedulerMixinBaseLike_nextTaskID]: number;
    [QueueableSchedulerMixinBaseLike_currentContinuation]: Optional<QueueableContinuationLike>;
    [QueueableSchedulerMixinBaseLike_schedule](continuation: QueueableContinuationLike): void;
}
export declare const create: (scheduler: QueueableSchedulerMixinBaseLike, effect: SideEffect1<ContinuationContextLike>, dueTime: number) => QueueableContinuationLike;
