/// <reference types="./PrioritySchedulerLike.d.ts" />
import PrioritySchedulerLike__toScheduler from './__internal__/PrioritySchedulerLike/PrioritySchedulerLike.toScheduler.mjs';

/**
 * Converts a PrioritySchedulerLike to a SchedulerLike that schedules work with the given priority.
 *
 * @param priorityScheduler The underlying scheduler upon which to scheduler work.
 * @param priority The priority to schedule work at.
 */
const toScheduler = PrioritySchedulerLike__toScheduler;

export { toScheduler };
