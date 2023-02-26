import {
  SchedulerLike,
  SchedulerLike_inContinuation,
} from "../../../scheduling.js";

const Scheduler_isInContinuation = (scheduler: SchedulerLike): boolean =>
  scheduler[SchedulerLike_inContinuation];

export default Scheduler_isInContinuation;
