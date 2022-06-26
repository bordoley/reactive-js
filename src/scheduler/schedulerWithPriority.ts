import { AbstractDisposable, addChild, addToParent } from "../disposable";
import { Function1, pipe } from "../functions";
import {
  PrioritySchedulerLike,
  SchedulerContinuationLike,
  SchedulerLike,
} from "../scheduler";

class SchedulerWithPriorityImpl
  extends AbstractDisposable
  implements SchedulerLike
{
  constructor(
    private readonly priorityScheduler: PrioritySchedulerLike,
    private readonly priority: number,
  ) {
    super();
  }

  get inContinuation() {
    return this.priorityScheduler.inContinuation;
  }

  get now() {
    return this.priorityScheduler.now;
  }

  get shouldYield() {
    return this.priorityScheduler.shouldYield;
  }

  requestYield(): void {
    this.priorityScheduler.requestYield();
  }

  schedule(
    continuation: SchedulerContinuationLike,
    options: { readonly delay?: number } = {},
  ) {
    const { delay = Math.max(options.delay ?? 0, 0) } = options;

    pipe(this, addChild(continuation));

    if (!continuation.isDisposed) {
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
      new SchedulerWithPriorityImpl(priorityScheduler, priority),
      addToParent(priorityScheduler),
    );
