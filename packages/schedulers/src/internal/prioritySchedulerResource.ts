import {
  createSerialDisposable,
  DisposableLike,
  DisposableOrTeardown,
  SerialDisposableLike,
  throwIfDisposed,
} from "@reactive-js/disposable";

import {
  SchedulerContinuation,
  SchedulerLike,
  SchedulerResourceLike,
} from "@reactive-js/scheduler";

import {
  createSchedulerWithPriority,
  PrioritySchedulerLike,
} from "./priorityScheduler";

import { createPriorityQueue, PriorityQueueLike } from "./priorityQueue";

/** @noInheritDoc */
export interface PrioritySchedulerResourceLike
  extends PrioritySchedulerLike,
    DisposableLike {}

export interface PrioritySchedulerHostLike {
  readonly now: number;
  readonly shouldYield: boolean;

  schedule(continuation: () => void, delay?: number): DisposableLike;
}

type ScheduledTask = {
  continuation: () => void;
  dueTime: number;
  priority: number;
  startTime: number;
  taskID: number;
};

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
    return this.hostConfig.now;
  }

  get shouldYield(): boolean {
    const now = this.now;
    const firstTask = this.queue.peek();
    return (
      (firstTask !== this.currentTask &&
        this.currentTask !== undefined &&
        firstTask !== undefined &&
        firstTask.startTime <= now) || // &&
      // firstTask.expirationTime < currentTask.expirationTime
      this.hostConfig.shouldYield
    );
  }
  private currentTask: ScheduledTask | undefined;

  private readonly disposable: SerialDisposableLike;

  private readonly hostConfig: PrioritySchedulerHostLike;
  private readonly queue: PriorityQueueLike<
    ScheduledTask
  > = createPriorityQueue(comparator);
  private taskIDCounter = 0;

  constructor(hostConfig: PrioritySchedulerHostLike) {
    this.disposable = createSerialDisposable();
    this.disposable.add(() => this.queue.clear());
    this.hostConfig = hostConfig;
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

  schedule(continuation: () => void, priority: number, delay: number = 0) {
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

  private drainQueue = async () => {
    while (this.queue.count > 0) {
      const task = this.queue.peek() as ScheduledTask;
      if (task.dueTime <= this.now) {
        this.queue.pop();

        this.currentTask = task;
        task.continuation();
        this.currentTask = undefined;

        // Not sure this is really necessary, but let's yield back
        // to the JS microtask queue between continuation executions
        // to avoid hogging too much cpu.
        await Promise.resolve();
      } else {
        this.scheduleDrainQueue(task);
        return;
      }
    }
  };

  private scheduleDrainQueue(task: ScheduledTask) {
    const head = this.queue.peek();
    if (head === task) {
      const delay = Math.max(task.dueTime - this.now, 0);
      this.disposable.disposable = this.hostConfig.schedule(
        this.drainQueue,
        delay,
      );
    }
  }
}

export const createPrioritySchedulerResource = (
  hostConfig: PrioritySchedulerHostLike,
): PrioritySchedulerResourceLike =>
  new PrioritySchedulerResourceImpl(hostConfig);

class SchedulerResourceWithPriorityImpl implements SchedulerResourceLike {
  get inScheduledContinuation(): boolean {
    return this.scheduler.inScheduledContinuation;
  }

  get isDisposed(): boolean {
    return this.disposable.isDisposed;
  }
  get now(): number {
    return this.scheduler.now;
  }

  private readonly disposable: DisposableLike;
  private readonly scheduler: SchedulerLike;

  constructor(scheduler: SchedulerLike, disposable: DisposableLike) {
    this.scheduler = scheduler;
    this.disposable = disposable;
  }

  add(
    disposable: DisposableOrTeardown,
    ...disposables: DisposableOrTeardown[]
  ): void {
    this.disposable.add(disposable, ...disposables);
  }
  dispose(): void {
    this.disposable.dispose();
  }
  remove(
    disposable: DisposableOrTeardown,
    ...disposables: DisposableOrTeardown[]
  ): void {
    this.disposable.remove(disposable, ...disposables);
  }
  schedule(
    continuation: SchedulerContinuation,
    delay?: number,
  ): DisposableLike {
    throwIfDisposed(this);
    return this.scheduler.schedule(continuation, delay);
  }
}

export const createSchedulerResourceWithPriority = (
  prioritySchedulerResourceFactory: () => PrioritySchedulerResourceLike,
  priority: number,
): SchedulerResourceLike => {
  const prioritySchedulerResource = prioritySchedulerResourceFactory();
  const scheduler = createSchedulerWithPriority(
    prioritySchedulerResource,
    priority,
  );

  return new SchedulerResourceWithPriorityImpl(
    scheduler,
    prioritySchedulerResource,
  );
};
