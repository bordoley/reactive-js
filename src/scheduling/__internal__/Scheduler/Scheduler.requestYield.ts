import { SchedulerLike_requestYield } from "../../../scheduling";

const Scheduler$requestYield = (scheduler: {
  [SchedulerLike_requestYield](): void;
}): void => scheduler[SchedulerLike_requestYield]();

export default Scheduler$requestYield;
