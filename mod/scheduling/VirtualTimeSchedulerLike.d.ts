import { VirtualTimeSchedulerLike } from "../scheduling.mjs";
declare const create: (options?: {
    readonly maxMicroTaskTicks?: number | undefined;
}) => VirtualTimeSchedulerLike;
export { create };
