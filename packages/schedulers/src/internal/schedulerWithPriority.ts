import { DisposableLike } from "@reactive-js/disposable";
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

  schedule(
    continuation: SchedulerContinuationLike,
    delay?: number | undefined,
  ): DisposableLike {
    return this.priorityScheduler.schedule(continuation, this.priority, delay);
  }
}

export const createSchedulerWithPriority = (
  priorityScheduler: PrioritySchedulerLike,
  priority: number,
): SchedulerLike => new SchedulerWithPriorityImpl(priorityScheduler, priority);
