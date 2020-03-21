import {
  SchedulerContinuationLike,
  SchedulerLike,
} from "@reactive-js/scheduler";
import { PrioritySchedulerLike } from "./priorityScheduler";

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
 * Creates a scheduler instance that schedules work on the provided priority
 * scheduler with the given priority.
 *
 * @param priorityScheduler The underlying scheduler upon which to scheduler work.
 * @param priority The priority to schedule work at.
 */
export const createSchedulerWithPriority = (
  priorityScheduler: PrioritySchedulerLike,
  priority: number,
): SchedulerLike => new SchedulerWithPriorityImpl(priorityScheduler, priority);
