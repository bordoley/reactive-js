export declare const create: (options?: {
    readonly maxMicroTaskTicks?: number | undefined;
}) => import("../scheduling.js").VirtualTimeSchedulerLike;
/** @ignore */
declare const VirtualTimeScheduler: {
    create: (options?: {
        readonly maxMicroTaskTicks?: number | undefined;
    }) => import("../scheduling.js").VirtualTimeSchedulerLike;
};
export default VirtualTimeScheduler;
