/// <reference types="./PrioritySchedulerLike.d.ts" />
import { toScheduler as toScheduler$1 } from './__internal__/PrioritySchedulerLike/PrioritySchedulerLike.toScheduler.mjs';

/**
 * Converts a PrioritySchedulerLike to a SchedulerLike that schedules work with the given priority.
 *
 * @param priorityScheduler The underlying scheduler upon which to scheduler work.
 * @param priority The priority to schedule work at.
 */
const toScheduler = toScheduler$1;

export { toScheduler };
