import { SchedulerLike_requestYield } from "../../../scheduling.js";

const Scheduler_requestYield = (scheduler: {
  [SchedulerLike_requestYield](): void;
}): void => scheduler[SchedulerLike_requestYield]();

export default Scheduler_requestYield;
