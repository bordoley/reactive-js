import {
  createDisposable,
  createSerialDisposable,
  DisposableLike,
  disposableMixin,
  SerialDisposableLike,
} from "@reactive-js/disposable";
import {
  SchedulerLike,
  SchedulerContinuationLike,
} from "@reactive-js/scheduler";
import { createPriorityQueue, PriorityQueueLike } from "./priorityQueue";

export interface PrioritySchedulerLike {
  readonly now: number;

  schedule(
    continuation: SchedulerContinuationLike,
    priority: number,
    delay?: number,
  ): DisposableLike;
}

/** @noInheritDoc */
export interface PrioritySchedulerResourceLike
  extends PrioritySchedulerLike,
    DisposableLike {}

interface ScheduledTaskLike {
  readonly continuation: SchedulerContinuationLike;
  readonly disposable: DisposableLike;
  readonly dueTime: number;
  readonly priority: number;
  readonly startTime: number;
  readonly taskID: number;
}

const comparator = (a: ScheduledTaskLike, b: ScheduledTaskLike) => {
  let diff = 0;
  diff = diff !== 0 ? diff : a.dueTime - b.dueTime;
  diff = diff !== 0 ? diff : a.priority - b.priority;
  diff = diff !== 0 ? diff : a.startTime - b.startTime;
  diff = diff !== 0 ? diff : a.taskID - b.taskID;
  return diff;
};

class PrioritySchedulerResourceImpl
  implements PrioritySchedulerResourceLike, SchedulerContinuationLike {
  readonly disposable: SerialDisposableLike = createSerialDisposable().add(() =>
    this.queue.clear(),
  );
  private readonly queue: PriorityQueueLike<
    ScheduledTaskLike
  > = createPriorityQueue(comparator);

  readonly add = disposableMixin.add;
  private currentTask: ScheduledTaskLike | undefined = undefined;
  private currentShouldYield: (() => boolean) | undefined = undefined;
  readonly dispose = disposableMixin.dispose;
  readonly remove = disposableMixin.remove;
  private shouldYield = () => {
    const currentTaskIsDisposed =
      this.currentTask !== undefined && this.currentTask.disposable.isDisposed;

    const nextTask = this.queue.peek();
    const now = this.now;
    const nextTaskIsHigherPriority =
      this.currentTask !== undefined &&
      nextTask !== undefined &&
      this.currentTask !== nextTask &&
      nextTask.dueTime <= now &&
      nextTask.priority < this.currentTask.priority;

    const hostRequestedYield =
      this.currentShouldYield !== undefined && this.currentShouldYield();

    return (
      currentTaskIsDisposed || nextTaskIsHigherPriority || hostRequestedYield
    );
  };
  private taskIDCounter = 0;

  constructor(private readonly hostScheduler: SchedulerLike) {}

  get isDisposed(): boolean {
    return this.disposable.isDisposed;
  }

  get now(): number {
    return this.hostScheduler.now;
  }

  run(shouldYield?: () => boolean) {
    for (
      let currentTask = this.queue.peek();
      currentTask !== undefined;
      currentTask = this.queue.peek()
    ) {
      const delay = currentTask.dueTime - this.now;
      if (delay > 0) {
        return { continuation: this, delay };
      }

      this.queue.pop();

      if (!currentTask.disposable.isDisposed) {
        this.currentTask = currentTask;
        this.currentShouldYield = shouldYield;

        const result =
          currentTask.continuation.run(this.shouldYield) || undefined;

        this.currentShouldYield = undefined;
        this.currentTask = undefined;

        if (result !== undefined) {
          const { continuation: nextContinuation, delay = 0 } = result;
          const now = this.now;
          const continuedTask = {
            taskID: this.taskIDCounter++,
            continuation: nextContinuation,
            disposable: currentTask.disposable,
            priority: currentTask.priority,
            startTime: now,
            dueTime: now + delay,
          };
          this.queue.push(continuedTask);
        } else {
          currentTask.disposable.dispose();
        }
      }

      const nextTask = this.queue.peek();
      if (nextTask !== undefined) {
        const now = this.now;
        const nextTaskDelay = Math.max(nextTask.dueTime - now, 0);

        if (nextTaskDelay > 0 || (shouldYield !== undefined && shouldYield())) {
          return {
            continuation: this,
            delay: nextTaskDelay,
          };
        }
      }
    }
    return;
  }

  schedule(
    continuation: SchedulerContinuationLike,
    priority: number,
    delay = 0,
  ): DisposableLike {
    const startTime = this.now;
    const dueTime = startTime + delay;

    const task = {
      taskID: this.taskIDCounter++,
      continuation,
      disposable: createDisposable(),
      priority,
      startTime,
      dueTime,
    };

    this.queue.push(task);
    this.scheduleDrainQueue(task);

    this.add(task.disposable);
    return task.disposable;
  }

  private scheduleDrainQueue(task: ScheduledTaskLike) {
    const head = this.queue.peek();
    if (head === task && this.disposable.inner.isDisposed) {
      const delay = Math.max(task.dueTime - this.now, 0);

      this.disposable.inner = this.hostScheduler.schedule(this, delay);
    }
  }
}

export const createPrioritySchedulerResource = (
  hostScheduler: SchedulerLike,
): PrioritySchedulerResourceLike =>
  new PrioritySchedulerResourceImpl(hostScheduler);
