import { SchedulerLike_requestYield } from "../../../scheduling";

const SchedulerLike__requestYield = (scheduler: {
  [SchedulerLike_requestYield](): void;
}): void => scheduler[SchedulerLike_requestYield]();

export default SchedulerLike__requestYield;
