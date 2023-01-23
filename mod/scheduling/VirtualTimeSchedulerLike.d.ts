import { VirtualTimeSchedulerLike } from "../scheduling.js";
declare const create: (options?: {
    readonly maxMicroTaskTicks?: number | undefined;
}) => VirtualTimeSchedulerLike;
export { create };
