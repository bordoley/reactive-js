import { AbstractDisposable, addDisposable, dispose } from "../../disposable.ts";
import { none, isSome } from "../../option.ts";
import { createPriorityQueue, QueueLike } from "../queues.ts";
import {
  SchedulerContinuationLike,
  VirtualTimeSchedulerLike,
  SchedulerLike,
} from "./interfaces.ts";
import { continue$ } from "./schedulerContinuation.ts";

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
      dispose(scheduler);
    }
  }

  return scheduler.hasCurrent;
};

class VirtualTimeSchedulerImpl extends AbstractDisposable
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
    this.microTaskTicks++;
    return this.microTaskTicks >= this.maxMicroTaskTicks;
  }

  run() {
    while (!this.isDisposed && move(this)) {
      this.inContinuation = true;
      continue$(this.current);
      this.inContinuation = false;
    }

    dispose(this);
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
  { maxMicroTaskTicks } = { maxMicroTaskTicks: Number.MAX_SAFE_INTEGER },
): VirtualTimeSchedulerLike => new VirtualTimeSchedulerImpl(maxMicroTaskTicks);
