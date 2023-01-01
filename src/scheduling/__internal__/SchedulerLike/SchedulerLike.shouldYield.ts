import { SchedulerLike_shouldYield } from "../../../scheduling";

const SchedulerLike__shouldYield = (scheduler: {
  [SchedulerLike_shouldYield]: boolean;
}): boolean => scheduler[SchedulerLike_shouldYield];

export default SchedulerLike__shouldYield;
