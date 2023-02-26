import {
  SchedulerLike,
  SchedulerLike_shouldYield,
} from "../../../scheduling.js";

const Scheduler_shouldYield = (scheduler: SchedulerLike): boolean =>
  scheduler[SchedulerLike_shouldYield];

export default Scheduler_shouldYield;
