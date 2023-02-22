import { SchedulerLike_shouldYield } from "../../../scheduling.js";

const Scheduler_shouldYield = (scheduler: {
  [SchedulerLike_shouldYield]: boolean;
}): boolean => scheduler[SchedulerLike_shouldYield];

export default Scheduler_shouldYield;
