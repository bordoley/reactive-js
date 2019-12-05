import {
  createSerialDisposable,
  DisposableLike,
  DisposableOrTeardown,
  SerialDisposableLike,
} from "@reactive-js/disposable";

import { PrioritySchedulerLike } from "./priorityScheduler";

import { createPriorityQueue, PriorityQueueLike } from "./priorityQueue";

/** @noInheritDoc */
export interface PrioritySchedulerResourceLike
  extends PrioritySchedulerLike,
    DisposableLike {}

export interface HostSchedulerContinuationLike {
  (): HostSchedulerContinuationLike | undefined;
}

export interface HostSchedulerLike {
  readonly now: number;
  readonly shouldYield: boolean;

  schedule(
    continuation: HostSchedulerContinuationLike,
    delay?: number,
  ): DisposableLike;
}

interface ScheduledTask {
  continuation: () => void;
  dueTime: number;
  priority: number;
  startTime: number;
  taskID: number;
}

const comparator = (a: ScheduledTask, b: ScheduledTask) => {
  let diff = 0;
  diff = diff !== 0 ? diff : a.dueTime - b.dueTime;
  diff = diff !== 0 ? diff : a.priority - b.priority;
  diff = diff !== 0 ? diff : a.startTime - b.startTime;
  diff = diff !== 0 ? diff : a.taskID - b.taskID;
  return diff;
};

class PrioritySchedulerResourceImpl implements PrioritySchedulerResourceLike {
  get isDisposed(): boolean {
    return this.disposable.isDisposed;
  }

  get now(): number {
    return this.hostScheduler.now;
  }

  get shouldYield(): boolean {
    const now = this.now;
    const nextTask = this.queue.peek();
    return (
      (this.currentTask !== undefined &&
        nextTask !== undefined &&
        this.currentTask !== nextTask &&
        nextTask.startTime <= now &&
        nextTask.priority < this.currentTask.priority) ||
      this.hostScheduler.shouldYield
    );
  }
  private currentTask: ScheduledTask | undefined;

  private readonly disposable: SerialDisposableLike;
  private readonly hostScheduler: HostSchedulerLike;
  private readonly queue: PriorityQueueLike<
    ScheduledTask
  > = createPriorityQueue(comparator);
  private taskIDCounter = 0;

  constructor(hostScheduler: HostSchedulerLike) {
    this.disposable = createSerialDisposable();
    this.disposable.add(() => this.queue.clear());
    this.hostScheduler = hostScheduler;
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

  schedule(continuation: () => void, priority: number, delay = 0) {
    const startTime = this.now;
    const dueTime = startTime + delay;

    const task = {
      taskID: this.taskIDCounter++,
      continuation,
      priority,
      startTime,
      dueTime,
    };

    this.queue.push(task);
    this.scheduleDrainQueue(task);
  }

  private readonly drainQueue: HostSchedulerContinuationLike = () => {
    const task = this.queue.peek();
    if (task !== undefined && task.dueTime <= this.now) {
      this.queue.pop();

      this.currentTask = task;
      task.continuation();
      this.currentTask = undefined;
    }

    const nextTask = this.queue.peek();
    if (nextTask !== undefined) {
      const shouldScheduleNextTask =
        this.hostScheduler.shouldYield || nextTask.dueTime > this.now;

      if (shouldScheduleNextTask) {
        this.scheduleDrainQueue(nextTask);
        return undefined;
      } else {
        return this.drainQueue;
      }
    } else {
      return undefined;
    }
  };

  private scheduleDrainQueue(task: ScheduledTask) {
    const head = this.queue.peek();
    if (head === task) {
      const delay = Math.max(task.dueTime - this.now, 0);
      this.disposable.disposable = this.hostScheduler.schedule(
        this.drainQueue,
        delay,
      );
    }
  }
}

export const createPrioritySchedulerResource = (
  hostScheduler: HostSchedulerLike,
): PrioritySchedulerResourceLike =>
  new PrioritySchedulerResourceImpl(hostScheduler);
