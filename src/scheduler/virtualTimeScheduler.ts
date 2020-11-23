import { AbstractDisposable, addDisposable, dispose } from "../disposable";
import { pipe } from "../functions";
import { none, isSome } from "../option";
import { createPriorityQueue, QueueLike } from "../queues";
import {
  SchedulerContinuationLike,
  VirtualTimeSchedulerLike,
  SchedulerLike,
} from "../scheduler";
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

  if (!scheduler.isDisposed) {
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
  implements SchedulerLike {
  current: SchedulerContinuationLike = none as any;
  hasCurrent = false;
  inContinuation = false;
  microTaskTicks = 0;
  now = 0;
  private taskIDCount = 0;
  readonly taskQueue: QueueLike<VirtualTask> = createPriorityQueue(comparator);

  constructor(private readonly maxMicroTaskTicks: number) {
    super();
  }

  get shouldYield() {
    if (this.inContinuation) {
      this.microTaskTicks++;
    }

    return this.inContinuation && this.microTaskTicks >= this.maxMicroTaskTicks;
  }

  run() {
    while (!this.isDisposed && move(this)) {
      this.inContinuation = true;
      run(this.current);
      this.inContinuation = false;
    }

    pipe(this, dispose());
  }

  schedule(continuation: SchedulerContinuationLike, { delay } = { delay: 0 }) {
    delay = Math.max(0, delay);

    addDisposable(this, continuation);

    if (!continuation.isDisposed) {
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
