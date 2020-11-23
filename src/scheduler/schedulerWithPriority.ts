import { Function1 } from "../functions";
import {
  SchedulerContinuationLike,
  SchedulerLike,
  PrioritySchedulerLike,
} from "../scheduler";

class SchedulerWithPriorityImpl implements SchedulerLike {
  constructor(
    private readonly priorityScheduler: PrioritySchedulerLike,
    private readonly priority: number,
  ) {}

  get inContinuation() {
    return this.priorityScheduler.inContinuation;
  }

  get now() {
    return this.priorityScheduler.now;
  }

  get shouldYield() {
    return this.priorityScheduler.shouldYield;
  }

  schedule(
    continuation: SchedulerContinuationLike,
    options: { readonly delay?: number } = {},
  ) {
    const { delay } = options;
    this.priorityScheduler.schedule(continuation, {
      priority: this.priority,
      delay,
    });
  }
}

/**
 * Converts a PrioritySchedulerLike to a SchedulerLike that schedules work with the given priority.
 *
 * @param priorityScheduler The underlying scheduler upon which to scheduler work.
 * @param priority The priority to schedule work at.
 */
export const toSchedulerWithPriority = (
  priority: number,
): Function1<PrioritySchedulerLike, SchedulerLike> => priorityScheduler =>
  new SchedulerWithPriorityImpl(priorityScheduler, priority);
