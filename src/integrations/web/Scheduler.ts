import { DisposableLike, SchedulerLike } from "../../types.js";
import Scheduler_createAnimationFrameScheduler from "./Scheduler/__internal__/Scheduler.createAnimationFrameScheduler.js";

export interface WebScheduler {
  createAnimationFrameScheduler(
    hostScheduler: SchedulerLike,
  ): SchedulerLike & DisposableLike;
}

export type Signature = WebScheduler;

export const createAnimationFrameScheduler: Signature["createAnimationFrameScheduler"] =
  Scheduler_createAnimationFrameScheduler;

// Add PostTask scheduler in here as well
