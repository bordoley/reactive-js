import { VirtualTimeSchedulerLike } from "../../../scheduling.js";
import { DisposableLike } from "../../../util.js";
declare const Scheduler_createVirtualTimeScheduler: (options?: {
    readonly maxMicroTaskTicks?: number;
}) => VirtualTimeSchedulerLike & DisposableLike;
export default Scheduler_createVirtualTimeScheduler;
