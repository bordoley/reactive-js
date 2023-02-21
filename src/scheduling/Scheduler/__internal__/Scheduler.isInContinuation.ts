import { SchedulerLike_inContinuation } from "../../../scheduling.js";

const Scheduler_isInContinuation = (scheduler: {
  readonly [SchedulerLike_inContinuation]: boolean;
}): boolean => scheduler[SchedulerLike_inContinuation];

export default Scheduler_isInContinuation;
