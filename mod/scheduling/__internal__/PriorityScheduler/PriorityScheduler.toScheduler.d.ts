import { Function1 } from "../../../functions.js";
import { PrioritySchedulerLike, SchedulerLike } from "../../../scheduling.js";
declare const PriorityScheduler$toScheduler: (priority: number) => Function1<PrioritySchedulerLike, SchedulerLike>;
export { PriorityScheduler$toScheduler as default };
