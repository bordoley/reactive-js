import { SchedulerLike_requestYield } from "../../../scheduling";

export const requestYield = (scheduler: {
  [SchedulerLike_requestYield](): void;
}): void => scheduler[SchedulerLike_requestYield]();
