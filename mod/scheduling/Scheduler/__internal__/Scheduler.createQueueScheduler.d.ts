import { PrioritySchedulerTaskLike } from "../../../__internal__/scheduling.js";
import { QueueLike } from "../../../__internal__/util.js";
import { Function2 } from "../../../functions.js";
import { PauseableSchedulerLike, PrioritySchedulerLike, SchedulerLike } from "../../../scheduling.js";
import { DisposableLike } from "../../../util.js";
declare const Scheduler_createQueueScheduler: Function2<SchedulerLike, () => QueueLike<PrioritySchedulerTaskLike>, PauseableSchedulerLike & PrioritySchedulerLike & DisposableLike>;
export default Scheduler_createQueueScheduler;
