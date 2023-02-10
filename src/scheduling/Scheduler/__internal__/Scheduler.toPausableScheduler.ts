import { Function1, compose } from "../../../functions";
import { PauseableSchedulerLike, SchedulerLike } from "../../../scheduling";
import Pauseable_pause from "../../../util/Pauseable/__internal__/Pauseable.pause";
import { create as createQueueScheduler } from "../../__internal__/QueueScheduler";

const Scheduler_toPausableScheduler: Function1<
  SchedulerLike,
  PauseableSchedulerLike
> = /*@__PURE__*/ compose(createQueueScheduler, Pauseable_pause);

export default Scheduler_toPausableScheduler;
