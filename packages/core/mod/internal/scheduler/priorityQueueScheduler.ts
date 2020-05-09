import {
  AbstractSerialDisposable,
  DisposableLike,
  disposed,
  AbstractDisposable,
} from "../../disposable.ts";
import { none, Option, isSome, isNone } from "../../option.ts";
import { createPriorityQueue, QueueLike } from "../queues.ts";
import { AbstractSchedulerContinuation } from "./abstractSchedulerContinuation.ts";
import {
  SchedulerLike,
  SchedulerContinuationLike,
  PrioritySchedulerLike,
  PausableSchedulerLike,
} from "./interfaces.ts";
import { toSchedulerWithPriority } from "./schedulerWithPriority.ts";

type ScheduledTask = {
  readonly continuation: SchedulerContinuationLike;
  dueTime: number;
  readonly priority: number;
  taskID: number;
};

const move = (scheduler: PriorityScheduler): boolean => {
  // First fast forward through any disposed tasks.
  peek(scheduler);

  const task = scheduler.queue.pop();
  const hasCurrent = isSome(task);

  scheduler.current = task;

  return hasCurrent;
};

const peek = (scheduler: PriorityScheduler): Option<ScheduledTask> => {
  const { delayed, queue } = scheduler;
  const now = scheduler.now;

  while (true) {
    const task = delayed.peek();

    if (isNone(task)) {
      break;
    }

    const taskIsDispose = task.continuation.isDisposed;
    if (task.dueTime > now && !taskIsDispose) {
      break;
    }

    delayed.pop();

    if (!taskIsDispose) {
      queue.push(task);
    }
  }

  let task: Option<ScheduledTask> = none;
  while (true) {
    task = queue.peek();

    if (isNone(task)) {
      break;
    }

    const taskIsDispose = task.continuation.isDisposed;
    if (!taskIsDispose) {
      break;
    }

    queue.pop();
  }

  return task ?? delayed.peek();
};

class PrioritySchedulerContinuation extends AbstractSchedulerContinuation {
  constructor(private readonly priorityScheduler: PriorityScheduler) {
    super();
  }

  produce(host: SchedulerLike) {
    const priorityScheduler = this.priorityScheduler;

    for (
      let task = peek(priorityScheduler), isDisposed = this.isDisposed;
      isSome(task) && !isDisposed;
      task = peek(priorityScheduler)
    ) {
      const { continuation, dueTime, priority } = task;
      const now = host.now;
      const delay = dueTime - now;

      if (delay > 0) {
        priorityScheduler.dueTime = dueTime;
        host.schedule(this, { delay });
        return;
      }

      move(priorityScheduler);

      const scheduler = toSchedulerWithPriority(priority)(priorityScheduler);

      priorityScheduler.inContinuation = true;
      continuation.run(scheduler);
      priorityScheduler.inContinuation = false;

      isDisposed = this.isDisposed;
      // Yield if were not disposed. The next iteration of the loop
      // will yield if the next task is delayed.
      if (!isDisposed && host.shouldYield()) {
        host.schedule(this);
        return;
      }
    }

    this.dispose();
  }
}

const comparator = (a: ScheduledTask, b: ScheduledTask) => {
  let diff = 0;
  diff = diff !== 0 ? diff : a.priority - b.priority;
  diff = diff !== 0 ? diff : a.taskID - b.taskID;
  return diff;
};

const delayedComparator = (a: ScheduledTask, b: ScheduledTask) => {
  let diff = 0;
  diff = diff !== 0 ? diff : a.dueTime - b.dueTime;
  diff = diff !== 0 ? diff : a.taskID - b.taskID;
  return diff;
};

const scheduleContinuation = (
  scheduler: PriorityScheduler,
  task: ScheduledTask,
) => {
  const continuation = new PrioritySchedulerContinuation(scheduler);
  scheduler.inner = continuation;

  const dueTime = task.dueTime;
  scheduler.dueTime = dueTime;

  const delay = dueTime - scheduler.now;

  scheduler.host.schedule(continuation, { delay });
};

class PriorityScheduler extends AbstractSerialDisposable implements PrioritySchedulerLike {
  current: any = none;
  readonly delayed: QueueLike<ScheduledTask> = createPriorityQueue(
    delayedComparator,
  );
  dueTime = 0;
  inContinuation = false;
  readonly queue: QueueLike<ScheduledTask> = createPriorityQueue(comparator);
  taskIDCounter = 0;

  constructor(readonly host: SchedulerLike) {
    super();
    this.add(() => {
      this.queue.clear();
      this.delayed.clear();
    });
  }

  get now(): number {
    return this.host.now;
  }

  schedule(
    continuation: SchedulerContinuationLike,
    { priority, delay = 0 }: {
      priority: number,
      delay?: number,
    },
  ) {
    this.add(continuation);

    if (!continuation.isDisposed) {
      const now = this.now;
      const dueTime = now + delay;

      const task = {
        taskID: this.taskIDCounter++,
        continuation,
        priority,
        dueTime,
      };

      const { delayed, queue } = this;
      const targetQueue = dueTime > now ? delayed : queue;
      targetQueue.push(task);

      const head = peek(this);

      const continuationActive =
        !this.inner.isDisposed && this.dueTime <= dueTime;

      if (head === task && !continuationActive) {
        scheduleContinuation(this, head);
      }
    }
  }

  shouldYield() {
    const current = this.current;
    const next = peek(this);

    const nextTaskIsHigherPriority =
      isSome(current) &&
      isSome(next) &&
      current !== next &&
      next.dueTime <= this.now &&
      next.priority < current.priority;

    return (
      this.isDisposed || nextTaskIsHigherPriority || this.host.shouldYield()
    );
  }
}

/**
 * Creates a new priority scheduler which schedules work using the provided
 * host scheduler.
 *
 * @param hostScheduler The underlying platform scheduler used by the priority
 * scheduler to schedule work.
 */
export const toPriorityScheduler = (
  hostScheduler: SchedulerLike,
): DisposableLike & PrioritySchedulerLike =>
  new PriorityScheduler(hostScheduler);

class PausableSchedulerImpl extends AbstractDisposable implements PausableSchedulerLike {
  private isPaused = true;

  constructor(private readonly priorityScheduler: PriorityScheduler) {
    super();
    
    this.add(priorityScheduler);
    priorityScheduler.add(this);
  }

  get inContinuation() {
    return this.priorityScheduler.inContinuation;
  }

  get now() {
    return this.priorityScheduler.now;
  }

  pause() {
    this.isPaused = true;
    this.priorityScheduler.inner = disposed;
  }

  resume() {
    const priorityScheduler = this.priorityScheduler;
    const head = peek(priorityScheduler);

    this.isPaused = false;
    
    if (priorityScheduler.inner.isDisposed && isSome(head)) {
      scheduleContinuation(priorityScheduler, head);
    }
  }

  schedule(continuation: SchedulerContinuationLike, { delay } = { delay: 0 }) {
    const priorityScheduler = this.priorityScheduler;

    priorityScheduler.schedule(continuation, { priority: 0, delay });
    if (this.isPaused) {
      priorityScheduler.inner = disposed;
    }
  }

  shouldYield(): boolean {
    return this.priorityScheduler.shouldYield();
  }
}

export const toPausableScheduler = (
  hostScheduler: SchedulerLike,
): DisposableLike & PausableSchedulerLike =>
  new PausableSchedulerImpl(new PriorityScheduler(hostScheduler));
