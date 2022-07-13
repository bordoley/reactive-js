import { SchedulerLike } from "./scheduling/SchedulerLike.mjs";
declare const createHostScheduler: (options?: {
    readonly yieldInterval?: number;
}) => SchedulerLike;
export { createHostScheduler };
