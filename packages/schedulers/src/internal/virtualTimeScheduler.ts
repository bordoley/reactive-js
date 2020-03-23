import {
  SchedulerContinuationLike,
  VirtualTimeSchedulerLike,
} from "@reactive-js/scheduler";
import { createPriorityQueue, PriorityQueueLike } from "./priorityQueue";
import { add, createDisposable, dispose } from "@reactive-js/disposable";

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
  readonly current = undefined;
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

  get isDisposed() {
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

        continuation.run(this.shouldYield);

        if (!continuation.isDisposed) {
          const { delay } = continuation;

          // This is to maintain consistency with the other
          // scheduler implementation which always explicitly reschedule
          // using the schedule function.
          task.id = this.taskIDCount++;
          task.dueTime = dueTime + delay;

          taskQueue.push(task);
        }
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
        if (shouldYield()) {
          this.runShouldYield = undefined;
          return this;
        }
      }

      this.runShouldYield = undefined;
    } else {
      // eslint-disable-next-line no-empty
      while (this.move()) {}
    }

    this.dispose();
    return;
  }

  schedule(continuation: SchedulerContinuationLike): void {
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
