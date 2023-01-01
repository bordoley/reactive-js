import { SchedulerLike_inContinuation } from "../../../scheduling";

const SchedulerLike__isInContinuation = (scheduler: {
  readonly [SchedulerLike_inContinuation]: boolean;
}): boolean => scheduler[SchedulerLike_inContinuation];

export default SchedulerLike__isInContinuation;
