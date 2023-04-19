import { Function1 } from "../../../functions.js";
import { PauseableSchedulerLike, SchedulerLike } from "../../../scheduling.js";
import { DisposableLike } from "../../../util.js";
declare const Scheduler_toPauseableScheduler: Function1<SchedulerLike, PauseableSchedulerLike & DisposableLike>;
export default Scheduler_toPauseableScheduler;
