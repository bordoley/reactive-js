import { SchedulerLike_now } from "../../../scheduling";

export const getCurrentTime = (scheduler: {
  readonly [SchedulerLike_now]: number;
}): number => scheduler[SchedulerLike_now];
