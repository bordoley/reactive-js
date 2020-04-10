import {
  SchedulerContinuationLike,
  VirtualTimeSchedulerLike,
} from "./interfaces";
import { createPriorityQueue, PriorityQueueLike } from "./priorityQueue";
import { AbstractSchedulerContinuation } from "./abstractSchedulerContinuation";

interface VirtualTask {
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

class VirtualTimeSchedulerImpl extends AbstractSchedulerContinuation {
  current: any = undefined;
  hasCurrent = false;
  inContinuation = false;
  private microTaskTicks = 0;
  now = 0;
  private runShouldYield?: () => boolean;
  private shouldYield: (() => boolean) | undefined = () => {
    const runShouldYield = this.runShouldYield;
    this.microTaskTicks++;
    return (
      this.microTaskTicks >= this.maxMicroTaskTicks ||
      (runShouldYield !== undefined && runShouldYield())
    );
  };
  private taskIDCount = 0;
  private readonly taskQueue: PriorityQueueLike<
    VirtualTask
  > = createPriorityQueue(comparator);

  constructor(private readonly maxMicroTaskTicks: number) {
    super();
  }

  move() {
    this.hasCurrent = false;

    if (!this.isDisposed) {
      const taskQueue = this.taskQueue;
      const task = taskQueue.pop();

      if (task !== undefined) {
        this.hasCurrent = true;
        const { dueTime, continuation } = task;

        this.now = dueTime;
        this.microTaskTicks = 0;

        this.current = continuation;
      } else {
        this.dispose();
      }
    }

    return this.hasCurrent;
  }

  produce(shouldYield?: () => boolean): number {
    if (
      this.maxMicroTaskTicks === Number.MAX_SAFE_INTEGER &&
      shouldYield === undefined
    ) {
      this.shouldYield = undefined;
    }

    if (shouldYield !== undefined) {
      this.runShouldYield = shouldYield;
      while (this.move()) {
        const continuation = this.current;

        this.inContinuation = true;
        const delay = continuation.run(this.shouldYield);
        this.inContinuation = false;

        if (!continuation.isDisposed) {
          this.schedule(continuation, delay);
        }

        if (shouldYield()) {
          this.runShouldYield = undefined;
          return 0;
        }
      }

      this.runShouldYield = undefined;
    } else {
      while (this.move()) {
        const continuation = this.current;

        this.inContinuation = true;
        const delay = continuation.run(this.shouldYield);
        this.inContinuation = false;

        if (!continuation.isDisposed) {
          this.schedule(continuation, delay);
        }
      }
    }

    return -1;
  }

  schedule(continuation: SchedulerContinuationLike, delay = 0): void {
    this.add(continuation);

    const work: VirtualTask = {
      id: this.taskIDCount++,
      dueTime: this.now + delay,
      continuation,
    };
    this.taskQueue.push(work);
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
