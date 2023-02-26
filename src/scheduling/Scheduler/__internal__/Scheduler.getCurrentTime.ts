import { SchedulerLike, SchedulerLike_now } from "../../../scheduling.js";

const Scheduler_getCurrentTime = (scheduler: SchedulerLike): number =>
  scheduler[SchedulerLike_now];

export default Scheduler_getCurrentTime;
