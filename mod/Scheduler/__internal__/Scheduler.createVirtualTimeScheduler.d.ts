import { VirtualTimeSchedulerLike } from "../../types.js";
declare const Scheduler_createVirtualTimeScheduler: (options?: {
    readonly maxMicroTaskTicks?: number;
}) => VirtualTimeSchedulerLike;
export default Scheduler_createVirtualTimeScheduler;
