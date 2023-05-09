import { Function1 } from "../../functions.js";
import { DisposableLike, PauseableSchedulerLike, SchedulerLike } from "../../types.js";
declare const Scheduler_toPauseableScheduler: Function1<SchedulerLike, PauseableSchedulerLike & DisposableLike>;
export default Scheduler_toPauseableScheduler;
