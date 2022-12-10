import { SchedulerLike_shouldYield } from "../../../scheduling";

const shouldYield = (scheduler: {
  [SchedulerLike_shouldYield]: boolean;
}): boolean => scheduler[SchedulerLike_shouldYield];

export default shouldYield;
