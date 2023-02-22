import { Function1, compose } from "../../../functions.js";
import { PauseableSchedulerLike, SchedulerLike } from "../../../scheduling.js";
import Pauseable_pause from "../../Pauseable/__internal__/Pauseable.pause.js";
import { create as createQueueScheduler } from "../../__internal__/QueueScheduler.js";

const Scheduler_toPausableScheduler: Function1<
  SchedulerLike,
  PauseableSchedulerLike
> = /*@__PURE__*/ compose(createQueueScheduler, Pauseable_pause);

export default Scheduler_toPausableScheduler;
