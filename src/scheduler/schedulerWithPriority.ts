import { Disposable, add, addTo, isDisposed } from "../disposable";
import { Function1, newInstanceWith, pipe } from "../functions";
import {
  PrioritySchedulerLike,
  SchedulerContinuationLike,
  SchedulerLike,
} from "../scheduler";
import { getDelay, inContinuation, now, shouldYield } from "./scheduler";

class SchedulerWithPriorityImpl extends Disposable implements SchedulerLike {
  constructor(
    private readonly priorityScheduler: PrioritySchedulerLike,
    private readonly priority: number,
  ) {
    super();
  }

  get inContinuation() {
    return inContinuation(this.priorityScheduler);
  }

  get now() {
    return now(this.priorityScheduler);
  }

  get shouldYield() {
    return shouldYield(this.priorityScheduler);
  }

  requestYield(): void {
    this.priorityScheduler.requestYield();
  }

  schedule(
    continuation: SchedulerContinuationLike,
    options?: { readonly delay?: number },
  ) {
    const delay = getDelay(options);

    pipe(this, add(continuation, true));

    if (!isDisposed(continuation)) {
      this.priorityScheduler.schedule(continuation, {
        priority: this.priority,
        delay,
      });
    }
  }
}

/**
 * Converts a PrioritySchedulerLike to a SchedulerLike that schedules work with the given priority.
 *
 * @param priorityScheduler The underlying scheduler upon which to scheduler work.
 * @param priority The priority to schedule work at.
 */
export const toSchedulerWithPriority =
  (priority: number): Function1<PrioritySchedulerLike, SchedulerLike> =>
  priorityScheduler =>
    pipe(
      SchedulerWithPriorityImpl,
      newInstanceWith(priorityScheduler, priority),
      addTo(priorityScheduler, true),
    );
