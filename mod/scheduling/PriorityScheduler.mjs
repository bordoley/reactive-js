/// <reference types="./PriorityScheduler.d.ts" />
import PriorityScheduler$toScheduler from './__internal__/PriorityScheduler/PriorityScheduler.toScheduler.mjs';

/**
 * Converts a PrioritySchedulerLike to a SchedulerLike that schedules work with the given priority.
 *
 * @param priorityScheduler The underlying scheduler upon which to scheduler work.
 * @param priority The priority to schedule work at.
 */
const toScheduler = PriorityScheduler$toScheduler;

export { toScheduler };
