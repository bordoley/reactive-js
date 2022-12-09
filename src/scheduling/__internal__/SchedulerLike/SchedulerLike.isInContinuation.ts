import { SchedulerLike_inContinuation } from "../../../scheduling";

export const isInContinuation = (scheduler: {
  readonly [SchedulerLike_inContinuation]: boolean;
}): boolean => scheduler[SchedulerLike_inContinuation];
