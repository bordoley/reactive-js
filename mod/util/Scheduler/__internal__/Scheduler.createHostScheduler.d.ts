import { DisposableLike, SchedulerLike } from "../../../util.js";
declare const Scheduler_createHostScheduler: (options?: {
    readonly maxYieldInterval?: number;
}) => SchedulerLike & DisposableLike;
export default Scheduler_createHostScheduler;
