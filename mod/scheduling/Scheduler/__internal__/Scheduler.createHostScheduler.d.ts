import { SchedulerLike } from "../../../scheduling.js";
import { DisposableLike } from "../../../util.js";
declare const Scheduler_createHostScheduler: (options?: {
    readonly maxYieldInterval?: number;
}) => SchedulerLike & DisposableLike;
export default Scheduler_createHostScheduler;
