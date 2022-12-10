import { SchedulerLike_inContinuation } from "../../../scheduling";

const isInContinuation = (scheduler: {
  readonly [SchedulerLike_inContinuation]: boolean;
}): boolean => scheduler[SchedulerLike_inContinuation];

export default isInContinuation;
