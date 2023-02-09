import { Function1 } from "../functions.js";
import { PrioritySchedulerLike, SchedulerLike } from "../scheduling.js";
/**
 * Converts a PrioritySchedulerLike to a SchedulerLike that schedules work with the given priority.
 *
 * @param priorityScheduler The underlying scheduler upon which to scheduler work.
 * @param priority The priority to schedule work at.
 */
declare const toScheduler: (priority: number) => Function1<PrioritySchedulerLike, SchedulerLike>;
/** @ignore */
declare const PriorityScheduler: {
    toScheduler: (priority: number) => Function1<PrioritySchedulerLike, SchedulerLike>;
};
export { PriorityScheduler as default, toScheduler };
