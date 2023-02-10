/// <reference types="./PriorityScheduler.d.ts" />
import PriorityScheduler_toScheduler from './PriorityScheduler/__internal__/PriorityScheduler.toScheduler.mjs';

/**
 * Converts a PrioritySchedulerLike to a SchedulerLike that schedules work with the given priority.
 *
 * @param priorityScheduler The underlying scheduler upon which to scheduler work.
 * @param priority The priority to schedule work at.
 */
const toScheduler = PriorityScheduler_toScheduler;
/** @ignore */
const PriorityScheduler = {
    toScheduler,
};

export { PriorityScheduler as default, toScheduler };
