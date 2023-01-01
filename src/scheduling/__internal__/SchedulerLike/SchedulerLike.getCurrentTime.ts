import { SchedulerLike_now } from "../../../scheduling";

const SchedulerLike__getCurrentTime = (scheduler: {
  readonly [SchedulerLike_now]: number;
}): number => scheduler[SchedulerLike_now];

export default SchedulerLike__getCurrentTime;
