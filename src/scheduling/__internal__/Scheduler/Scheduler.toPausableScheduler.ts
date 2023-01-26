import { Function1, compose } from "../../../functions";
import { PauseableSchedulerLike, SchedulerLike } from "../../../scheduling";
import Pauseable_pause from "../../../util/__internal__/Pauseable/Pauseable.pause";
import { create as createQueueScheduler } from "../QueueScheduler";

const Scheduler_toPausableScheduler: Function1<
  SchedulerLike,
  PauseableSchedulerLike
> = /*@__PURE__*/ compose(createQueueScheduler, Pauseable_pause);

export default Scheduler_toPausableScheduler;
