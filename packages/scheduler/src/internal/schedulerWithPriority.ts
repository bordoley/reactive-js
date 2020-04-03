import { OperatorLike } from "@reactive-js/pipe";
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

  get now(): number {
    return this.priorityScheduler.now;
  }

  schedule(continuation: SchedulerContinuationLike): void {
    this.priorityScheduler.schedule(continuation, this.priority);
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
): OperatorLike<PrioritySchedulerLike, SchedulerLike> => priorityScheduler =>
  new SchedulerWithPriorityImpl(priorityScheduler, priority);
