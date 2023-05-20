import { DisposableLike, PauseableSchedulerLike, SchedulerLike, VirtualTimeSchedulerLike } from "./types.js";
/**
 * @noInheritDoc
 * @category Module
 */
export interface SchedulerModule {
    createHostScheduler(options?: {
        readonly maxYieldInterval?: number;
    }): SchedulerLike & DisposableLike;
    createVirtualTimeScheduler(options?: {
        readonly maxMicroTaskTicks?: number | undefined;
    }): VirtualTimeSchedulerLike;
    createPausableScheduler(hostScheduler: SchedulerLike): PauseableSchedulerLike & DisposableLike;
}
export type Signature = SchedulerModule;
export declare const createHostScheduler: Signature["createHostScheduler"];
export declare const createVirtualTimeScheduler: Signature["createVirtualTimeScheduler"];
export declare const createPausableScheduler: Signature["createPausableScheduler"];
