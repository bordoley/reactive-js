import { SchedulerLike, VirtualTimeSchedulerLike, PauseableSchedulerLike } from "./scheduling/SchedulerLike.mjs";
import { Function1 } from "./util/functions.mjs";
import { PrioritySchedulerLike } from "./scheduling/PrioritySchedulerLike.mjs";
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
declare const createPauseableScheduler: Function1<SchedulerLike, PauseableSchedulerLike>;
declare const createPriorityScheduler: Function1<SchedulerLike, PrioritySchedulerLike>;
export { createHostScheduler, createPauseableScheduler, createPriorityScheduler, createVirtualTimeScheduler };
