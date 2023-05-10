import { DisposableLike, PauseableSchedulerLike, SchedulerLike, VirtualTimeSchedulerLike } from "./types.js";
export interface Signature {
    createHostScheduler(options?: {
        readonly maxYieldInterval?: number;
    }): SchedulerLike & DisposableLike;
    createVirtualTimeScheduler(options?: {
        readonly maxMicroTaskTicks?: number | undefined;
    }): VirtualTimeSchedulerLike;
    createPausableScheduler(hostScheduler: SchedulerLike): PauseableSchedulerLike & DisposableLike;
}
export declare const createHostScheduler: Signature["createHostScheduler"];
export declare const createVirtualTimeScheduler: Signature["createVirtualTimeScheduler"];
export declare const createPausableScheduler: Signature["createPausableScheduler"];
