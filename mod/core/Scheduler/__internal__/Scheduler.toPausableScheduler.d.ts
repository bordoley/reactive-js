import { DisposableLike, PauseableSchedulerLike, SchedulerLike } from "../../../core.js";
import { Function1 } from "../../../functions.js";
declare const Scheduler_toPauseableScheduler: Function1<SchedulerLike, PauseableSchedulerLike & DisposableLike>;
export default Scheduler_toPauseableScheduler;
