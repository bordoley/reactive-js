import { SchedulerLike } from "../../../scheduling.mjs";
declare const createHostScheduler: (options?: {
    readonly yieldInterval?: number;
}) => SchedulerLike;
export { createHostScheduler as default };
