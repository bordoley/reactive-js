import { add, createDisposable, dispose } from "@reactive-js/disposable";
import {
  SchedulerContinuationLike,
  VirtualTimeSchedulerLike,
} from "./interfaces";
import { createPriorityQueue, PriorityQueueLike } from "./priorityQueue";

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

class VirtualTimeSchedulerImpl implements VirtualTimeSchedulerLike {
  readonly add = add;
  current: any = undefined;
  readonly delay = 0;
  readonly disposable = createDisposable();
  readonly dispose = dispose;

  hasCurrent = false;
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

  constructor(private readonly maxMicroTaskTicks: number) {}

  get isDisposed(): boolean {
    return this.disposable.isDisposed;
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

  run(shouldYield?: () => boolean): SchedulerContinuationLike | void {
    if (this.isDisposed) {
      return;
    }

    if (
      this.maxMicroTaskTicks === Number.MAX_SAFE_INTEGER &&
      shouldYield === undefined
    ) {
      this.shouldYield = undefined;
    }

    if (shouldYield !== undefined) {
      this.runShouldYield = shouldYield;
      while (this.move()) {
        const continuation = this.current
        continuation.run(this.shouldYield);

        if (!continuation.isDisposed) {
          this.schedule(continuation);
        }

        if (shouldYield()) {
          this.runShouldYield = undefined;
          return this;
        }
      }

      this.runShouldYield = undefined;
    } else {
      // eslint-disable-next-line no-empty
      while (this.move()) {
        const continuation = this.current
        continuation.run(this.shouldYield);

        if (!continuation.isDisposed) {
          this.schedule(continuation);
        }
      }
    }

    this.dispose();
    return;
  }

  schedule(continuation: SchedulerContinuationLike): void {
    this.add(continuation);

    const work: VirtualTask = {
      id: this.taskIDCount++,
      dueTime: this.now + continuation.delay,
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
