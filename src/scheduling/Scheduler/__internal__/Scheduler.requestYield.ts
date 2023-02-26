import {
  SchedulerLike,
  SchedulerLike_requestYield,
} from "../../../scheduling.js";

const Scheduler_requestYield = (scheduler: SchedulerLike): void =>
  scheduler[SchedulerLike_requestYield]();

export default Scheduler_requestYield;
