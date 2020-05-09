import { Operator } from "../../functions";
import {
  SchedulerContinuationLike,
  SchedulerLike,
  PrioritySchedulerLike,
} from "./interfaces";

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

  schedule(continuation: SchedulerContinuationLike, { delay } = { delay: 0 }) {
    this.priorityScheduler.schedule(continuation, { priority: this.priority, delay });
  }

  shouldYield() {
    return this.priorityScheduler.shouldYield();
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
): Operator<PrioritySchedulerLike, SchedulerLike> => priorityScheduler =>
  new SchedulerWithPriorityImpl(priorityScheduler, priority);
