import { alwaysFalse } from "../../functions";
import { none, isSome } from "../../option";
import { createPriorityQueue, QueueLike } from "../queues";
import { AbstractSchedulerContinuation } from "./abstractSchedulerContinuation";
import {
  SchedulerContinuationLike,
  VirtualTimeSchedulerLike,
  SchedulerLike,
} from "./interfaces";

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
      scheduler.dispose();
    }
  }

  return scheduler.hasCurrent;
};

// A place holder to make the code generic
const ignoreScheduler = {
  inContinuation: true,
  now: 0,
  schedule(
    _scheduler: SchedulerContinuationLike,
    _options?: { delay: number },
  ) {},
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

  produce(scheduler: SchedulerLike) {
    this.host = scheduler;

    while (move(this)) {
      const continuation = this.current;

      this.inContinuation = true;
      continuation.run(this);
      this.inContinuation = false;

      if (scheduler.shouldYield()) {
        this.host = ignoreScheduler;
        scheduler.schedule(this);
        return;
      }
    }

    this.host = ignoreScheduler;
    this.dispose();
  }

  run(scheduler = ignoreScheduler) {
    super.run(scheduler);
  }

  schedule(continuation: SchedulerContinuationLike, { delay } = { delay: 0 }) {
    this.add(continuation);

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
