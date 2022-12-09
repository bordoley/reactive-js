import { SchedulerLike_shouldYield } from "../../../scheduling";

export const shouldYield = (scheduler: {
  [SchedulerLike_shouldYield]: boolean;
}): boolean => scheduler[SchedulerLike_shouldYield];
