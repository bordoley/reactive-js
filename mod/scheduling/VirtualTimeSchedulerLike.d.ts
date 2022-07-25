import { VirtualTimeSchedulerLike } from "../scheduling.mjs";
/**
 * Creates a new virtual time scheduler instance.
 *
 * @param maxMicroTaskTicks The max number of times
 * shouldYield should return false before returning true. Useful
 * for testing cooperative multitasking.
 */
declare const create: (options?: {
    readonly maxMicroTaskTicks?: number;
}) => VirtualTimeSchedulerLike;
export { create };
