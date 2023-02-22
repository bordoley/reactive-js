import { Function1 } from "../../../functions.js";
import { PrioritySchedulerLike, SchedulerLike } from "../../../scheduling.js";
declare const PriorityScheduler_toScheduler: (priority: number) => Function1<PrioritySchedulerLike, SchedulerLike>;
export default PriorityScheduler_toScheduler;
