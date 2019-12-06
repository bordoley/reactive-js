import {
  createDisposable,
  createSerialDisposable,
  DisposableLike,
  DisposableOrTeardown,
  SerialDisposableLike,
} from "@reactive-js/disposable";
import { PrioritySchedulerLike } from "./priorityScheduler";
import { createPriorityQueue, PriorityQueueLike } from "./priorityQueue";
import {
  SchedulerLike,
  SchedulerContinuationLike,
} from "@reactive-js/scheduler";

export interface PrioritySchedulerLike {
  readonly inScheduledContinuation: boolean;

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

class PrioritySchedulerResourceImpl implements PrioritySchedulerResourceLike {
  get inScheduledContinuation(): boolean {
    return this.currentTask !== undefined;
  }

  get isDisposed(): boolean {
    return this.disposable.isDisposed;
  }

  get now(): number {
    return this.hostScheduler.now;
  }

  private readonly disposable: SerialDisposableLike;
  private readonly hostScheduler: SchedulerLike;
  private readonly queue: PriorityQueueLike<
    ScheduledTaskLike
  > = createPriorityQueue(comparator);

  private taskIDCounter = 0;

  constructor(hostScheduler: SchedulerLike) {
    this.disposable = createSerialDisposable();
    this.hostScheduler = hostScheduler;

    this.disposable.add(() => this.queue.clear());
  }

  add(
    disposable: DisposableOrTeardown,
    ...disposables: DisposableOrTeardown[]
  ) {
    this.disposable.add(disposable, ...disposables);
  }

  dispose() {
    this.disposable.dispose();
  }

  remove(
    disposable: DisposableOrTeardown,
    ...disposables: DisposableOrTeardown[]
  ) {
    this.disposable.remove(disposable, ...disposables);
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

    const head = this.queue.peek();
    if (head === task && this.disposable.disposable.isDisposed) {
      this.scheduleDrainQueue(task);
    }

    this.add(task.disposable);
    task.disposable.add(() => this.remove(task.disposable));
    return task.disposable;
  }

  private currentTask: ScheduledTaskLike | undefined = undefined;
  private currentShouldYield: (() => boolean) | undefined = undefined;

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

  private readonly drainQueue: SchedulerContinuationLike = (
    shouldYield: () => boolean,
  ): void => {
    for (
      let currentTask = this.queue.peek();
      currentTask !== undefined;
      currentTask = this.queue.peek()
    ) {
      if (currentTask.dueTime > this.now) {
        this.scheduleDrainQueue(currentTask);
        return;
      }

      this.queue.pop();

      if (!currentTask.disposable.isDisposed) {
        this.currentTask = currentTask;
        this.currentShouldYield = shouldYield;
        currentTask.continuation(this.shouldYield);
        currentTask.disposable.dispose();
        this.currentShouldYield = undefined;
        this.currentTask = undefined;
      }

      const nextTask = this.queue.peek();
      if (nextTask !== undefined && shouldYield()) {
        this.scheduleDrainQueue(nextTask);
        return;
      }
    }
  };

  private scheduleDrainQueue(task: ScheduledTaskLike) {
    const delay = Math.max(task.dueTime - this.now, 0);

    this.disposable.disposable = this.hostScheduler.schedule(
      this.drainQueue,
      delay,
    );
  }
}

export const createPrioritySchedulerResource = (
  hostScheduler: SchedulerLike,
): PrioritySchedulerResourceLike =>
  new PrioritySchedulerResourceImpl(hostScheduler);
