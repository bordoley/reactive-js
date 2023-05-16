import Scheduler_createHostScheduler from "./Scheduler/__internal__/Scheduler.createHostScheduler.js";
import Scheduler_createPausableScheduler from "./Scheduler/__internal__/Scheduler.createPausableScheduler.js";
import Scheduler_createVirtualTimeScheduler from "./Scheduler/__internal__/Scheduler.createVirtualTimeScheduler.js";
import {
  DisposableLike,
  PauseableSchedulerLike,
  SchedulerLike,
  VirtualTimeSchedulerLike,
} from "./types.js";

export interface SchedulerModule {
  createHostScheduler(options?: {
    readonly maxYieldInterval?: number;
  }): SchedulerLike & DisposableLike;

  createVirtualTimeScheduler(options?: {
    readonly maxMicroTaskTicks?: number | undefined;
  }): VirtualTimeSchedulerLike;

  createPausableScheduler(
    hostScheduler: SchedulerLike,
  ): PauseableSchedulerLike & DisposableLike;
}

export type Signature = SchedulerModule;

export const createHostScheduler: Signature["createHostScheduler"] =
  Scheduler_createHostScheduler;
export const createVirtualTimeScheduler: Signature["createVirtualTimeScheduler"] =
  Scheduler_createVirtualTimeScheduler;
export const createPausableScheduler: Signature["createPausableScheduler"] =
  Scheduler_createPausableScheduler;
