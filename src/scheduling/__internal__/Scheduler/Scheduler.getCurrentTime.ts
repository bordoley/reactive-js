import { SchedulerLike_now } from "../../../scheduling";

const Scheduler$getCurrentTime = (scheduler: {
  readonly [SchedulerLike_now]: number;
}): number => scheduler[SchedulerLike_now];

export default Scheduler$getCurrentTime;
