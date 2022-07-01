import { Disposable } from "./disposable.mjs";
import { Enumerator } from "./enumerator.mjs";
import { SideEffect, Function1 } from "./functions.mjs";
/**
 * Creates a new priority scheduler which schedules work using the provided
 * host scheduler.
 *
 * @param hostScheduler The underlying platform scheduler used by the priority
 * scheduler to schedule work.
 */
declare const createPriorityScheduler: (hostScheduler: SchedulerLike) => PrioritySchedulerLike;
declare const createPausableScheduler: (hostScheduler: SchedulerLike) => PausableSchedulerLike;
declare const __yield: (options?: {
    delay?: number;
}) => void;
declare const schedule: (f: SideEffect, options?: {
    readonly delay?: number;
}) => Function1<SchedulerLike, Disposable>;
/**
 * Converts a PrioritySchedulerLike to a SchedulerLike that schedules work with the given priority.
 *
 * @param priorityScheduler The underlying scheduler upon which to scheduler work.
 * @param priority The priority to schedule work at.
 */
declare const toSchedulerWithPriority: (priority: number) => Function1<PrioritySchedulerLike, SchedulerLike>;
declare const createHostScheduler: (options?: {
    readonly yieldInterval?: number;
}) => SchedulerLike;
/**
 * Creates a new virtual time scheduler instance.
 *
 * @param maxMicroTaskTicks The max number of times
 * shouldYield should return false before returning true. Useful
 * for testing cooperative multitasking.
 */
declare const createVirtualTimeScheduler: (options?: {
    readonly maxMicroTaskTicks?: number;
}) => VirtualTimeSchedulerLike;
declare const runContinuation: <TScheduler extends SchedulerImplementationLike>(continuation: SchedulerContinuationLike) => Function1<TScheduler, TScheduler>;
declare const inContinuation: (scheduler: SchedulerLike | PrioritySchedulerLike) => boolean;
declare const now: (scheduler: SchedulerLike) => number;
declare const shouldYield: (scheduler: SchedulerLike) => boolean;
declare const getDelay: (options?: {
    delay?: number;
}) => number;
declare const hasDelay: (options?: {
    delay?: number;
}) => boolean;
/**
 * A unit of work to be executed by a scheduler.
 *
 * @noInheritDoc
 */
interface SchedulerContinuationLike extends Disposable {
    /**
     * Work function to be invoked by the scheduler after the specified delay.
     */
    continue(this: SchedulerContinuationLike): void;
}
/**
 * An object that schedules units of work on a runloop.
 */
interface SchedulerLike extends Disposable {
    readonly inContinuation: boolean;
    readonly now: number;
    readonly shouldYield: boolean;
    /**
     * Request the scheduler to yield.
     */
    requestYield(this: this): void;
    /**
     * Schedules a continuation to be executed on the scheduler.
     *
     * @param continuation The SchedulerContinuation to be executed.
     */
    schedule(this: this, continuation: SchedulerContinuationLike, options?: {
        readonly delay?: number;
    }): void;
}
interface VirtualTimeSchedulerLike extends Enumerator<void>, SchedulerLike {
    readonly isDisposed: boolean;
    dispose(this: this): void;
}
interface PausableSchedulerLike extends SchedulerLike {
    pause(this: PausableSchedulerLike): void;
    resume(this: PausableSchedulerLike): void;
}
/**
 * A scheduler which schedules work according to it's priority.
 *
 * @noInheritDoc
 */
interface PrioritySchedulerLike extends Disposable {
    readonly inContinuation: boolean;
    readonly now: number;
    readonly shouldYield: boolean;
    /**
     * Request the scheduler to yield.
     */
    requestYield(this: PrioritySchedulerLike): void;
    /**
     * Schedules a continuation to be executed on the scheduler.
     *
     * @param continuation The SchedulerContinuation to be executed.
     * @param priority An optional priority that is used when prioritizing which work
     * to execute next. The definition of the priority value along with it's default
     * value is implementation specific.
     */
    schedule(this: PrioritySchedulerLike, continuation: SchedulerContinuationLike, options: {
        readonly priority: number;
        readonly delay?: number;
    }): void;
}
interface SchedulerImplementationLike extends Disposable {
    inContinuation: boolean;
}
export { PausableSchedulerLike, PrioritySchedulerLike, SchedulerContinuationLike, SchedulerImplementationLike, SchedulerLike, VirtualTimeSchedulerLike, __yield, createHostScheduler, createPausableScheduler, createPriorityScheduler, createVirtualTimeScheduler, getDelay, hasDelay, inContinuation, now, runContinuation, schedule, shouldYield, toSchedulerWithPriority };
