import {
  SchedulerContinuationLike,
  VirtualTimeSchedulerLike,
} from "./interfaces";
import { createPriorityQueue, PriorityQueueLike } from "./priorityQueue";
import { AbstractSchedulerContinuation } from "./abstractSchedulerContinuation";

type VirtualTask = {
  readonly continuation: SchedulerContinuationLike;
  dueTime: number;
  id: number;
}

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

    if (task !== undefined) {
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

class VirtualTimeSchedulerImpl extends AbstractSchedulerContinuation {
  current: SchedulerContinuationLike = undefined as any;
  hasCurrent = false;
  inContinuation = false;
  microTaskTicks = 0;
  now = 0;
  private hostShouldYield?: () => boolean;
  private shouldYield: (() => boolean) | undefined = () => {
    const runShouldYield = this.hostShouldYield;
    this.microTaskTicks++;
    return (
      this.microTaskTicks >= this.maxMicroTaskTicks ||
      (runShouldYield !== undefined && runShouldYield())
    );
  };
  private taskIDCount = 0;
  readonly taskQueue: PriorityQueueLike<VirtualTask> = createPriorityQueue(
    comparator,
  );

  constructor(private readonly maxMicroTaskTicks: number) {
    super();
  }

  produce(hostShouldYield?: () => boolean): number {
    const hostShouldYieldIsDefined = hostShouldYield !== undefined;

    this.hostShouldYield = hostShouldYield;

    if (
      this.maxMicroTaskTicks === Number.MAX_SAFE_INTEGER &&
      !hostShouldYieldIsDefined
    ) {
      this.shouldYield = undefined;
    }

    while (move(this)) {
      const continuation = this.current;

      this.inContinuation = true;
      const delay = continuation.run(this.shouldYield);
      this.inContinuation = false;

      // Check here for perf. avoid an unnecessary function call
      if (!continuation.isDisposed) {
        this.schedule(continuation, delay);
      }

      // Perf hack
      if (hostShouldYieldIsDefined) {
        if ((hostShouldYield as any)()) {
          this.hostShouldYield = undefined;
          return 0;
        }
      }
    }

    this.hostShouldYield = undefined;

    return -1;
  }

  schedule(continuation: SchedulerContinuationLike, delay = 0): void {
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
}

/**
 * Creates a new virtual time scheduler instance.
 * @param maxMicroTaskTicks The max number of times
 * shouldYield should return false before returning true. Useful
 * for testing cooperative multitasking.
 */
export const createVirtualTimeScheduler = (
  maxMicroTaskTicks: number = Number.MAX_SAFE_INTEGER,
): VirtualTimeSchedulerLike => new VirtualTimeSchedulerImpl(maxMicroTaskTicks);
