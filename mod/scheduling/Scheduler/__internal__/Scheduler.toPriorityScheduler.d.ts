import { Function1 } from "../../../functions.js";
import { PauseableSchedulerLike, PrioritySchedulerLike, SchedulerLike } from "../../../scheduling.js";
declare const Scheduler_toPriorityScheduler: Function1<SchedulerLike, PauseableSchedulerLike & PrioritySchedulerLike>;
export default Scheduler_toPriorityScheduler;
