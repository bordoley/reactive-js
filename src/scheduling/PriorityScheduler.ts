import PriorityScheduler_toScheduler from "./__internal__/PriorityScheduler/PriorityScheduler.toScheduler";

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
