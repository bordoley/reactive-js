import {
  createDisposable,
  DisposableLike,
  disposableMixin,
} from "@reactive-js/disposable";
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
    SchedulerLike,
    SchedulerContinuationLike {
  /** The current value of the enumerator. Always undefined. */
  readonly current: undefined;

  /** Whether the enumerator has a current value. */
  readonly hasCurrent: boolean;

  /** Advances the enumerator to the next element. */
  moveNext(): boolean;
}

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

class VirtualTimeSchedulerImpl implements VirtualTimeSchedulerLike {
  readonly add = disposableMixin.add;
  readonly current = undefined;
  readonly disposable: DisposableLike = createDisposable();
  readonly dispose = disposableMixin.dispose;
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

  moveNext() {
    this.hasCurrent = false;
    const task = this.taskQueue.pop();

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
          (task.id = this.taskIDCount++), (task.continuation = result);
          (task.dueTime = dueTime + delay), this.taskQueue.push(task);
        } else {
          disposable.dispose();
        }
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
      while (this.moveNext()) {
        if (shouldYield()) {
          this.runShouldYield = undefined;
          return this;
        }
      }

      this.runShouldYield = undefined;
    } else {
      // eslint-disable-next-line no-empty
      while (this.moveNext()) {}
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
