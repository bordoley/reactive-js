import { AbstractDisposable, add, dispose, isDisposed } from "../disposable";
import { pipe } from "../functions";
import { isSome, none } from "../option";
import {
  SchedulerContinuationLike,
  SchedulerLike,
  VirtualTimeSchedulerLike,
} from "../scheduler";
import { PriorityQueueLike, createPriorityQueue } from "./priorityQueue";
import { run } from "./schedulerContinuation";

type VirtualTask = {
  readonly continuation: SchedulerContinuationLike;
  dueTime: number;
  id: number;
};

const comparator = (a: VirtualTask, b: VirtualTask) => {
  let diff = 0;
  diff = diff !== 0 ? diff : a.dueTime - b.dueTime;
  diff = diff !== 0 ? diff : a.id - b.id;
  return diff;
};

const move = (scheduler: VirtualTimeSchedulerImpl) => {
  const taskQueue = scheduler.taskQueue;

  scheduler.hasCurrent = false;

  if (!isDisposed(scheduler)) {
    const task = taskQueue.pop();

    if (isSome(task)) {
      const { dueTime, continuation } = task;

      scheduler.current = continuation;
      scheduler.hasCurrent = true;
      scheduler.microTaskTicks = 0;
      scheduler.now = dueTime;
    } else {
      pipe(scheduler, dispose());
    }
  }

  return scheduler.hasCurrent;
};

class VirtualTimeSchedulerImpl
  extends AbstractDisposable
  implements SchedulerLike
{
  current: SchedulerContinuationLike = none as any;
  hasCurrent = false;
  inContinuation = false;
  microTaskTicks = 0;
  now = 0;
  private taskIDCount = 0;
  private yieldRequested = false;

  readonly taskQueue: PriorityQueueLike<VirtualTask> =
    createPriorityQueue(comparator);

  constructor(private readonly maxMicroTaskTicks: number) {
    super();
  }

  get shouldYield() {
    const { inContinuation, yieldRequested } = this;

    if (inContinuation) {
      this.microTaskTicks++;
      this.yieldRequested = false;
    }

    return (
      inContinuation &&
      (yieldRequested || this.microTaskTicks >= this.maxMicroTaskTicks)
    );
  }

  requestYield(): void {
    this.yieldRequested = true;
  }

  run() {
    while (!isDisposed(this) && move(this)) {
      this.inContinuation = true;
      run(this.current);
      this.inContinuation = false;
    }

    pipe(this, dispose());
  }

  schedule(
    continuation: SchedulerContinuationLike,
    options: { readonly delay?: number } = {},
  ) {
    const { delay = Math.max(options.delay ?? 0, 0) } = options;

    pipe(this, add(continuation, true));

    if (!isDisposed(continuation)) {
      const work: VirtualTask = {
        id: this.taskIDCount++,
        dueTime: this.now + delay,
        continuation,
      };
      this.taskQueue.push(work);
    }
  }
}

/**
 * Creates a new virtual time scheduler instance.
 *
 * @param maxMicroTaskTicks The max number of times
 * shouldYield should return false before returning true. Useful
 * for testing cooperative multitasking.
 */
export const createVirtualTimeScheduler = (
  options: { readonly maxMicroTaskTicks?: number } = {},
): VirtualTimeSchedulerLike => {
  const { maxMicroTaskTicks = Number.MAX_SAFE_INTEGER } = options;
  return new VirtualTimeSchedulerImpl(maxMicroTaskTicks);
};
