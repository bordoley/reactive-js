import { SchedulerLike } from "../../concurrent.js";
import { DisposableLike } from "../../utils.js";
import AnimationFrameScheduler_create from "./AnimationFrameScheduler/__internal__/AnimationFrameScheduler.create.js";

export interface AnimationFrameScheduler {
  create(hostScheduler: SchedulerLike): SchedulerLike & DisposableLike;
}

export type Signature = AnimationFrameScheduler;

export const create: Signature["create"] = AnimationFrameScheduler_create;

// Add PostTask scheduler in here as well
