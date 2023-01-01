import { Function1, compose } from "../../../functions";
import { PauseableSchedulerLike, SchedulerLike } from "../../../scheduling";
import { pause } from "../../../util/PauseableLike";
import { create as createQueueScheduler } from "../QueueSchedulerLike";

const SchedulerLike__toPausableScheduler: Function1<
  SchedulerLike,
  PauseableSchedulerLike
> = /*@__PURE__*/ compose(createQueueScheduler, pause);

export default SchedulerLike__toPausableScheduler;
