import { SchedulerLike_shouldYield } from "../../../scheduling";

const Scheduler_shouldYield = (scheduler: {
  [SchedulerLike_shouldYield]: boolean;
}): boolean => scheduler[SchedulerLike_shouldYield];

export default Scheduler_shouldYield;
