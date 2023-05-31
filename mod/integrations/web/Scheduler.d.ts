import { DisposableLike, SchedulerLike } from "../../types.js";
export interface WebScheduler {
    createAnimationFrameScheduler(hostScheduler: SchedulerLike): SchedulerLike & DisposableLike;
}
export type Signature = WebScheduler;
export declare const createAnimationFrameScheduler: Signature["createAnimationFrameScheduler"];
