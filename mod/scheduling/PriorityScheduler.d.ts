/**
 * Converts a PrioritySchedulerLike to a SchedulerLike that schedules work with the given priority.
 *
 * @param priorityScheduler The underlying scheduler upon which to scheduler work.
 * @param priority The priority to schedule work at.
 */
export declare const toScheduler: (priority: number) => import("../functions.js").Function1<import("../scheduling.js").PrioritySchedulerLike, import("../scheduling.js").SchedulerLike>;
