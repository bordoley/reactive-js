/// <reference types="./PriorityScheduler.d.ts" />

import PriorityScheduler_toScheduler from "./PriorityScheduler/__internal__/PriorityScheduler.toScheduler.js";
/**
 * Converts a PrioritySchedulerLike to a SchedulerLike that schedules work with the given priority.
 *
 * @param priorityScheduler The underlying scheduler upon which to scheduler work.
 * @param priority The priority to schedule work at.
 */
export const toScheduler = PriorityScheduler_toScheduler;
/** @ignore */
const PriorityScheduler = {
    toScheduler,
};
export default PriorityScheduler;
