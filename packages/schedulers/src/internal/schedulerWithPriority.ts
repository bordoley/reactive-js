import { DisposableLike } from "@reactive-js/disposable";
import {
  SchedulerContinuationLike,
  SchedulerLike,
} from "@reactive-js/scheduler";
import { PrioritySchedulerLike } from "./priorityScheduler";

class SchedulerWithPriorityImpl implements SchedulerLike {
  private readonly priority: number;
  private readonly priorityScheduler: PrioritySchedulerLike;
  constructor(priorityScheduler: PrioritySchedulerLike, priority: number) {
    this.priorityScheduler = priorityScheduler;
    this.priority = priority;
  }

  public get inScheduledContinuation(): boolean {
    return this.priorityScheduler.inScheduledContinuation;
  }

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
