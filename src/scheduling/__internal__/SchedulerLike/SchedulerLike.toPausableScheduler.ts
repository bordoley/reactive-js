import { Function1, compose } from "../../../functions";
import { PauseableSchedulerLike, SchedulerLike } from "../../../scheduling";
import { pause } from "../../../util/PauseableLike";
import { create as createQueueScheduler } from "../QueueSchedulerLike";

export const toPausableScheduler: Function1<
  SchedulerLike,
  PauseableSchedulerLike
> = /*@__PURE__*/ compose(createQueueScheduler, pause);
