import { Function1, compose } from "../../../functions";
import { PauseableSchedulerLike, SchedulerLike } from "../../../scheduling";
import Pauseable$pause from "../../../util/__internal__/Pauseable/Pauseable.pause";
import { create as createQueueScheduler } from "../QueueScheduler";

const Scheduler$toPausableScheduler: Function1<
  SchedulerLike,
  PauseableSchedulerLike
> = /*@__PURE__*/ compose(createQueueScheduler, Pauseable$pause);

export default Scheduler$toPausableScheduler;
