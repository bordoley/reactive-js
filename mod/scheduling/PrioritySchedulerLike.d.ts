import { Function1 } from "../functions.mjs";
import { PrioritySchedulerLike, SchedulerLike } from "../scheduling.mjs";
/**
 * Converts a PrioritySchedulerLike to a SchedulerLike that schedules work with the given priority.
 *
 * @param priorityScheduler The underlying scheduler upon which to scheduler work.
 * @param priority The priority to schedule work at.
 */
declare const toScheduler: (priority: number) => Function1<PrioritySchedulerLike, SchedulerLike>;
export { toScheduler };
