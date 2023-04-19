import { Function1 } from "../../../functions.js";
import { PrioritySchedulerLike, SchedulerLike } from "../../../scheduling.js";
import { DisposableLike } from "../../../util.js";
declare const PriorityScheduler_toScheduler: (priority: number) => Function1<PrioritySchedulerLike, SchedulerLike & DisposableLike>;
export default PriorityScheduler_toScheduler;
