import { EnumeratorLike } from '../ix/EnumeratorLike.js';
import { DisposableLike } from '../util/DisposableLike.js';
import { SideEffect, Function1 } from '../util/functions.js';
import { ContinuationLike } from "./ContinuationLike.mjs";
declare const SchedulerLike_inContinuation: unique symbol;
declare const SchedulerLike_now: unique symbol;
declare const SchedulerLike_requestYield: unique symbol;
declare const SchedulerLike_shouldYield: unique symbol;
declare const SchedulerLike_schedule: unique symbol;
declare type SchedulerOptions = {
    readonly delay?: number;
};
interface SchedulerLike<TOptions extends SchedulerOptions = SchedulerOptions> extends DisposableLike {
    readonly [SchedulerLike_inContinuation]: boolean;
    readonly [SchedulerLike_now]: number;
    readonly [SchedulerLike_shouldYield]: boolean;
    /**
     * Request the scheduler to yield.
     */
    [SchedulerLike_requestYield](): void;
    [SchedulerLike_schedule](continuation: ContinuationLike, options?: TOptions): void;
}
declare type PrioritySchedulerOptions = {
    readonly priority: number;
    readonly delay?: number;
};
/**
 * A scheduler which schedules work according to it's priority.
 *
 * @noInheritDoc
 */
interface PrioritySchedulerLike extends SchedulerLike<PrioritySchedulerOptions> {
}
interface VirtualTimeSchedulerLike extends EnumeratorLike<void>, SchedulerLike {
}
declare const isInContinuation: (scheduler: {
    readonly [SchedulerLike_inContinuation]: boolean;
}) => boolean;
declare const getCurrentTime: (scheduler: {
    readonly [SchedulerLike_now]: number;
}) => number;
declare const requestYield: (scheduler: {
    [SchedulerLike_requestYield](): void;
}) => void;
declare const shouldYield: (scheduler: {
    [SchedulerLike_shouldYield]: boolean;
}) => boolean;
declare const __yield: (options?: {
    delay?: number;
}) => void;
declare const schedule: (f: SideEffect | ContinuationLike, options?: {
    readonly delay?: number;
}) => Function1<SchedulerLike, DisposableLike>;
export { PrioritySchedulerLike, PrioritySchedulerOptions, SchedulerLike, SchedulerLike_inContinuation, SchedulerLike_now, SchedulerLike_requestYield, SchedulerLike_schedule, SchedulerLike_shouldYield, SchedulerOptions, VirtualTimeSchedulerLike, __yield, getCurrentTime, isInContinuation, requestYield, schedule, shouldYield };
