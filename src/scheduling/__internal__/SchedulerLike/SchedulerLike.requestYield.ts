import { SchedulerLike_requestYield } from "../../../scheduling";

const requestYield = (scheduler: {
  [SchedulerLike_requestYield](): void;
}): void => scheduler[SchedulerLike_requestYield]();

export default requestYield;
