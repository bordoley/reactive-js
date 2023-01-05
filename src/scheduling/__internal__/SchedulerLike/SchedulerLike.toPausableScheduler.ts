import { Function1, compose } from "../../../functions";
import { PauseableSchedulerLike, SchedulerLike } from "../../../scheduling";
import PauseableLike__pause from "../../../util/__internal__/PauseableLike/PauseableLike.pause";
import { create as createQueueScheduler } from "../QueueSchedulerLike";

const SchedulerLike__toPausableScheduler: Function1<
  SchedulerLike,
  PauseableSchedulerLike
> = /*@__PURE__*/ compose(createQueueScheduler, PauseableLike__pause);

export default SchedulerLike__toPausableScheduler;
