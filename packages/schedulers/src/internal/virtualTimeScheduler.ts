import { createDisposable, DisposableLike } from "@reactive-js/disposable";
import { AbstractEnumerator, EnumeratorLike } from "@reactive-js/enumerable";
import {
  SchedulerLike,
  SchedulerContinuationLike,
} from "@reactive-js/scheduler";
import { createPriorityQueue, PriorityQueueLike } from "./priorityQueue";

/**
 * A scheduler that uses a virtual clock to simulate time. Useful for testing.
 *
 * Note: VirtualTimeSchedulerLike implements the same EnumeratorLike protocol
 * defined in the @reactive-js/rx package.
 * @noInheritDoc
 */
export interface VirtualTimeSchedulerLike
  extends DisposableLike,
    EnumeratorLike<void, void>,
    SchedulerLike,
    SchedulerContinuationLike {}

interface VirtualTask {
  continuation: SchedulerContinuationLike;
  readonly disposable: DisposableLike;
  dueTime: number;
  id: number;
}

const comparator = (a: VirtualTask, b: VirtualTask) => {
  let diff = 0;
  diff = diff !== 0 ? diff : a.dueTime - b.dueTime;
  diff = diff !== 0 ? diff : a.id - b.id;
  return diff;
};

class VirtualTimeSchedulerImpl extends AbstractEnumerator<void, void>
  implements VirtualTimeSchedulerLike {
  readonly current = undefined;
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
        const { dueTime, continuation, disposable } = task;

        this.now = dueTime;
        this.microTaskTicks = 0;

        if (!disposable.isDisposed) {
          const result = continuation.run(this.shouldYield) || undefined;
          if (result !== undefined) {
            const { delay = 0 } = result;

            // This is to maintain consistency with the other
            // scheduler implementation which always explicitly reschedule
            // using the schedule function.
            task.id = this.taskIDCount++;
            task.continuation = result;
            task.dueTime = dueTime + delay;

            taskQueue.push(task);
          } else {
            disposable.dispose();
          }
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

  schedule(continuation: SchedulerContinuationLike): DisposableLike {
    const disposable = createDisposable();
    const work: VirtualTask = {
      id: this.taskIDCount++,
      dueTime: this.now + (continuation.delay ?? 0),
      continuation,
      disposable,
    };
    this.taskQueue.push(work);

    this.add(disposable);
    return disposable;
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
