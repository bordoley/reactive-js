import { add, dispose } from "../../disposable";
import { alwaysFalse, ignore } from "../../functions";
import { none, isSome } from "../../option";
import { createPriorityQueue, QueueLike } from "../queues";
import { AbstractSchedulerContinuation } from "./abstractSchedulerContinuation";
import {
  SchedulerContinuationLike,
  VirtualTimeSchedulerLike,
  SchedulerLike,
} from "./interfaces";
import { schedule } from "./schedule";

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

// A place holder to make the code generic
const ignoreScheduler: SchedulerLike = {
  inContinuation: true,
  now: 0,
  schedule: ignore,
  shouldYield: alwaysFalse,
};

class VirtualTimeSchedulerImpl extends AbstractSchedulerContinuation {
  current: SchedulerContinuationLike = none as any;
  hasCurrent = false;
  inContinuation = false;
  microTaskTicks = 0;
  now = 0;
  private host: SchedulerLike = ignoreScheduler;
  private taskIDCount = 0;
  readonly taskQueue: QueueLike<VirtualTask> = createPriorityQueue(comparator);

  constructor(private readonly maxMicroTaskTicks: number) {
    super();
  }

  continueUnsafe(scheduler: SchedulerLike) {
    this.host = scheduler;

    while (move(this)) {
      const continuation = this.current;

      this.inContinuation = true;
      continuation.continue(this);
      this.inContinuation = false;

      if (scheduler.shouldYield()) {
        this.host = ignoreScheduler;
        schedule(scheduler, this);
        return;
      }
    }

    this.host = ignoreScheduler;
    dispose(this);
  }

  continue(scheduler = ignoreScheduler) {
    super.continue(scheduler);
  }

  schedule(continuation: SchedulerContinuationLike, { delay } = { delay: 0 }) {
    delay = Math.max(0, delay);

    add(this, continuation);

    if (!continuation.isDisposed) {
      const work: VirtualTask = {
        id: this.taskIDCount++,
        dueTime: this.now + delay,
        continuation,
      };
      this.taskQueue.push(work);
    }
  }

  shouldYield() {
    const host = this.host;
    this.microTaskTicks++;

    return this.microTaskTicks >= this.maxMicroTaskTicks || host.shouldYield();
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
