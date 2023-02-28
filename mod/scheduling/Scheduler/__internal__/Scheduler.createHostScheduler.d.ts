import { SchedulerLike } from "../../../scheduling.js";
declare const Scheduler_createHostScheduler: (options?: {
    readonly maxYieldInterval?: number;
}) => SchedulerLike;
export default Scheduler_createHostScheduler;
