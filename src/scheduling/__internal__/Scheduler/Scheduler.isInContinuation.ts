import { SchedulerLike_inContinuation } from "../../../scheduling";

const Scheduler$isInContinuation = (scheduler: {
  readonly [SchedulerLike_inContinuation]: boolean;
}): boolean => scheduler[SchedulerLike_inContinuation];

export default Scheduler$isInContinuation;
