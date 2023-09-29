import { PauseableSchedulerLike, SchedulerLike } from "../concurrent.js";
import { DisposableLike } from "../utils.js";
/**
 * @noInheritDoc
 * @category Module
 */
export interface SchedulerModule {
    createHostScheduler(options?: {
        readonly maxYieldInterval?: number;
    }): SchedulerLike & DisposableLike;
    toPausableScheduler(hostScheduler: SchedulerLike): PauseableSchedulerLike & DisposableLike;
}
export type Signature = SchedulerModule;
export declare const createHostScheduler: Signature["createHostScheduler"];
export declare const toPausableScheduler: Signature["toPausableScheduler"];
