import { SchedulerLike } from "../../concurrent.js";
import { DisposableLike } from "../../utils.js";
export interface AnimationFrameScheduler {
    create(hostScheduler: SchedulerLike): SchedulerLike & DisposableLike;
}
export type Signature = AnimationFrameScheduler;
export declare const create: Signature["create"];
