import { VirtualTimeSchedulerLike } from "../scheduling.mjs";
declare const create: (options?: {
    readonly maxMicroTaskTicks?: number;
}) => VirtualTimeSchedulerLike;
export { create };
