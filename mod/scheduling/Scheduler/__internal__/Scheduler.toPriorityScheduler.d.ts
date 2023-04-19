import { Function1 } from "../../../functions.js";
import { PrioritySchedulerLike, SchedulerLike } from "../../../scheduling.js";
import { DisposableLike } from "../../../util.js";
declare const Scheduler_toPriorityScheduler: Function1<SchedulerLike, PrioritySchedulerLike & DisposableLike>;
export default Scheduler_toPriorityScheduler;
