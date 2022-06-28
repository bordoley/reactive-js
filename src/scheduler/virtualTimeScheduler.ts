import { add, dispose, isDisposed } from "../disposable";
import { AbstractEnumerator, hasCurrent, reset } from "../enumerator";
import { pipe } from "../functions";
import { isSome, none } from "../option";
import {
  SchedulerContinuationLike,
  SchedulerImplementationLike,
  VirtualTimeSchedulerLike,
} from "../scheduler";
import { QueueLike, createPriorityQueue } from "./queue";
import { now, runContinuation } from "./scheduler";

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

class VirtualTimeSchedulerImpl
  extends AbstractEnumerator<void>
  implements SchedulerImplementationLike, VirtualTimeSchedulerLike
{
  inContinuation = false;
  private microTaskTicks = 0;
  now = 0;
  private taskIDCount = 0;
  private yieldRequested = false;

  private readonly taskQueue: QueueLike<VirtualTask> =
    createPriorityQueue(comparator);

  constructor(
    private readonly maxMicroTaskTicks: number = Number.MAX_SAFE_INTEGER,
  ) {
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

  move(): boolean {
    const taskQueue = this.taskQueue;

    reset(this);

    if (!isDisposed(this)) {
      const task = taskQueue.pop();

      if (isSome(task)) {
        const { dueTime, continuation } = task;

        this.microTaskTicks = 0;
        this.now = dueTime;
        this.current = none;

        pipe(this, runContinuation(continuation));
      } else {
        pipe(this, dispose());
      }
    }

    return hasCurrent(this);
  }

  requestYield(): void {
    this.yieldRequested = true;
  }

  schedule(
    continuation: SchedulerContinuationLike,
    options: { readonly delay?: number } = {},
  ) {
    const { delay = Math.max(options.delay ?? 0, 0) } = options;

    pipe(this, add(continuation, true));

    if (!isDisposed(continuation)) {
      this.taskQueue.push({
        id: this.taskIDCount++,
        dueTime: now(this) + delay,
        continuation,
      });
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
