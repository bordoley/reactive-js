import { Function1 } from "../../../functions.mjs";
import { PrioritySchedulerLike, SchedulerLike } from "../../../scheduling.mjs";
declare const toScheduler: (priority: number) => Function1<PrioritySchedulerLike, SchedulerLike>;
export { toScheduler };
