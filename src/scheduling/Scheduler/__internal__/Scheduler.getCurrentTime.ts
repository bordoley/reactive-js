import { SchedulerLike_now } from "../../../scheduling";

const Scheduler_getCurrentTime = (scheduler: {
  readonly [SchedulerLike_now]: number;
}): number => scheduler[SchedulerLike_now];

export default Scheduler_getCurrentTime;
