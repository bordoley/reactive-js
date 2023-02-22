import { VirtualTimeSchedulerLike } from "../../../scheduling.js";
declare const VirtualTimeScheduler_create: (options?: {
    readonly maxMicroTaskTicks?: number;
}) => VirtualTimeSchedulerLike;
export default VirtualTimeScheduler_create;
