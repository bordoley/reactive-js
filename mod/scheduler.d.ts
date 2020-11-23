/// <reference types="node" />
import { SideEffect1, Function1 } from './functions';
import './option';
import { DisposableLike } from './disposable';

/**
 * Creates a new priority scheduler which schedules work using the provided
 * host scheduler.
 *
 * @param hostScheduler The underlying platform scheduler used by the priority
 * scheduler to schedule work.
 */
declare const toPriorityScheduler: (hostScheduler: SchedulerLike) => DisposableLike & PrioritySchedulerLike;
declare const toPausableScheduler: (hostScheduler: SchedulerLike) => DisposableLike & PausableSchedulerLike;

declare class YieldError {
    readonly delay: number;
    constructor(delay: number);
}
declare const run: (continuation: SchedulerContinuationLike) => void;
declare const yield$: (scheduler: SchedulerLike, delay: number) => void;
declare const schedule: <T extends SchedulerLike>(f: SideEffect1<T>, options?: {
    readonly delay?: number | undefined;
} | undefined) => Function1<T, DisposableLike>;

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
    onRunStatusChanged(state: boolean): void;
}
/**
 * A unit of work to be executed by a scheduler.
 *
 * @noInheritDoc
 */
interface SchedulerContinuationLike extends DisposableLike {
    addListener(ev: "onRunStatusChanged", listener: SchedulerContinuationRunStatusChangedListenerLike): void;
    removeListener(ev: "onRunStatusChanged", listener: SchedulerContinuationRunStatusChangedListenerLike): void;
    /**
     * Work function to be invoked by the scheduler after the specified delay.
     */
    continue(): void;
}
/**
 * An object that schedules units of work on a runloop.
 */
interface SchedulerLike {
    readonly inContinuation: boolean;
    readonly now: number;
    readonly shouldYield: boolean;
    /**
     * Schedules a continuation to be executed on the scheduler.
     *
     * @param continuation The SchedulerContinuation to be executed.
     */
    schedule(continuation: SchedulerContinuationLike, options?: {
        readonly delay?: number;
    }): void;
}
/**
 * A scheduler that uses a virtual clock to simulate time. Useful for testing.
 *
 * @noInheritDoc
 */
interface VirtualTimeSchedulerLike extends DisposableLike, SchedulerLike {
    run(): void;
}
interface PausableSchedulerLike extends SchedulerLike {
    pause(): void;
    resume(): void;
}
/**
 * A scheduler which schedules work according to it's priority.
 *
 * @noInheritDoc
 */
interface PrioritySchedulerLike {
    readonly inContinuation: boolean;
    readonly now: number;
    readonly shouldYield: boolean;
    /**
     * Schedules a continuation to be executed on the scheduler.
     *
     * @param continuation The SchedulerContinuation to be executed.
     * @param priority An optional priority that is used when prioritizing which work
     * to execute next. The definition of the priority value along with it's default
     * value is implementation specific.
     *
     * @returns A `DisposableLike` that can be disposed to cancel the scheduled work.
     */
    schedule(continuation: SchedulerContinuationLike, options: {
        readonly priority: number;
        readonly delay?: number;
    }): void;
}

export { PausableSchedulerLike, PrioritySchedulerLike, SchedulerContinuationLike, SchedulerContinuationRunStatusChangedListenerLike, SchedulerLike, VirtualTimeSchedulerLike, YieldError, createHostScheduler, createVirtualTimeScheduler, run, schedule, toPausableScheduler, toPriorityScheduler, toSchedulerWithPriority, yield$ };
