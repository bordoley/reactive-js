import { DisposableLike } from "./disposable.mjs";
import { SideEffect, Function1 } from "./functions.mjs";
/**
 * Creates a new priority scheduler which schedules work using the provided
 * host scheduler.
 *
 * @param hostScheduler The underlying platform scheduler used by the priority
 * scheduler to schedule work.
 */
declare const toPriorityScheduler: (hostScheduler: SchedulerLike) => PrioritySchedulerLike;
declare const toPausableScheduler: (hostScheduler: SchedulerLike) => PausableSchedulerLike;
declare class YieldError {
    readonly delay: number;
    constructor(delay: number);
}
declare const run: (continuation: SchedulerContinuationLike) => void;
declare const __yield: (delay?: number) => void;
declare const schedule: (f: SideEffect, options?: {
    readonly delay?: number;
}) => Function1<SchedulerLike, DisposableLike>;
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
interface SchedulerContinuationRunStatusChangedListenerLike {
    onRunStatusChanged(this: SchedulerContinuationRunStatusChangedListenerLike, state: boolean): void;
}
/**
 * A unit of work to be executed by a scheduler.
 *
 * @noInheritDoc
 */
interface SchedulerContinuationLike extends DisposableLike {
    addListener(this: SchedulerContinuationLike, ev: "onRunStatusChanged", listener: SchedulerContinuationRunStatusChangedListenerLike): void;
    removeListener(this: SchedulerContinuationLike, ev: "onRunStatusChanged", listener: SchedulerContinuationRunStatusChangedListenerLike): void;
    /**
     * Work function to be invoked by the scheduler after the specified delay.
     */
    continue(this: SchedulerContinuationLike): void;
}
/**
 * An object that schedules units of work on a runloop.
 */
interface SchedulerLike extends DisposableLike {
    readonly inContinuation: boolean;
    readonly now: number;
    readonly shouldYield: boolean;
    /**
     * Request the scheduler to yield.
     */
    requestYield(this: SchedulerLike): void;
    /**
     * Schedules a continuation to be executed on the scheduler.
     *
     * @param continuation The SchedulerContinuation to be executed.
     */
    schedule(this: SchedulerLike, continuation: SchedulerContinuationLike, options?: {
        readonly delay?: number;
    }): void;
}
/**
 * A scheduler that uses a virtual clock to simulate time. Useful for testing.
 *
 * @noInheritDoc
 */
interface VirtualTimeSchedulerLike extends SchedulerLike {
    run(this: VirtualTimeSchedulerLike): void;
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
interface PrioritySchedulerLike extends DisposableLike {
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
export { PausableSchedulerLike, PrioritySchedulerLike, SchedulerContinuationLike, SchedulerContinuationRunStatusChangedListenerLike, SchedulerLike, VirtualTimeSchedulerLike, YieldError, __yield, createHostScheduler, createVirtualTimeScheduler, run, schedule, toPausableScheduler, toPriorityScheduler, toSchedulerWithPriority };
