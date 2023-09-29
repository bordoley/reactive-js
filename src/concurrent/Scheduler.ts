import { PauseableSchedulerLike, SchedulerLike } from "../concurrent.js";
import { DisposableLike } from "../utils.js";
import Scheduler_createHostScheduler from "./Scheduler/__internal__/Scheduler.createHostScheduler.js";
import Scheduler_toPausableScheduler from "./Scheduler/__internal__/Scheduler.toPausableScheduler.js";

/**
 * @noInheritDoc
 * @category Module
 */
export interface SchedulerModule {
  createHostScheduler(options?: {
    readonly maxYieldInterval?: number;
  }): SchedulerLike & DisposableLike;

  toPausableScheduler(
    hostScheduler: SchedulerLike,
  ): PauseableSchedulerLike & DisposableLike;
}

export type Signature = SchedulerModule;

export const createHostScheduler: Signature["createHostScheduler"] =
  Scheduler_createHostScheduler;
export const toPausableScheduler: Signature["toPausableScheduler"] =
  Scheduler_toPausableScheduler;
