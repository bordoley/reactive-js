import {
  AbstractSerialDisposable,
  DisposableLike,
  disposed,
  dispose,
  add,
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
import { schedule } from "./schedule.ts";

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

  scheduler.current = task as any;

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
      const { continuation, dueTime } = task;
      const now = host.now;
      const delay = dueTime - now;

      if (delay > 0) {
        priorityScheduler.dueTime = dueTime;
        schedule(host, this, { delay });
        return;
      }

      move(priorityScheduler);

      priorityScheduler.inContinuation = true;
      continuation.run(this.priorityScheduler);
      priorityScheduler.inContinuation = false;

      isDisposed = this.isDisposed;
      // Yield if were not disposed. The next iteration of the loop
      // will yield if the next task is delayed.
      if (!isDisposed && host.shouldYield()) {
        schedule(host, this);
        return;
      }
    }

    dispose(this);
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

  schedule(scheduler.host, continuation, { delay });
};

class PriorityScheduler extends AbstractSerialDisposable
  implements PrioritySchedulerLike, PausableSchedulerLike {
  current: ScheduledTask = none as any;
  readonly delayed: QueueLike<ScheduledTask> = createPriorityQueue(
    delayedComparator,
  );
  dueTime = 0;
  inContinuation = false;
  isPaused = false;
  readonly queue: QueueLike<ScheduledTask> = createPriorityQueue(comparator);
  taskIDCounter = 0;

  constructor(readonly host: SchedulerLike) {
    super();
    add(this, () => {
      this.queue.clear();
      this.delayed.clear();
    });
  }

  get now(): number {
    return this.host.now;
  }

  pause() {
    this.isPaused = true;
    this.inner = disposed;
  }

  resume() {
    const head = peek(this);

    this.isPaused = false;

    if (this.inner.isDisposed && isSome(head)) {
      scheduleContinuation(this, head);
    }
  }

  schedule(
    continuation: SchedulerContinuationLike,
    options?: {
      delay: number;
    },
  ): void;
  schedule(
    continuation: SchedulerContinuationLike,
    options: {
      priority: number;
      delay?: number;
    },
  ): void;
  schedule(
    continuation: SchedulerContinuationLike,
    options: {
      priority?: number;
      delay?: number;
    } = {},
  ) {
    let { delay, priority } = options;
    delay = Math.max(0, delay ?? 0);
    priority = isSome(priority)
      ? priority
      : this.inContinuation
      ? this.current.priority
      : Number.MAX_SAFE_INTEGER;

    add(this, continuation);

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

      if (head === task && !continuationActive && !this.isPaused) {
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
      this.isDisposed ||
      this.isPaused ||
      nextTaskIsHigherPriority ||
      this.host.shouldYield()
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

export const toPausableScheduler = (
  hostScheduler: SchedulerLike,
): DisposableLike & PausableSchedulerLike => {
  const scheduler = new PriorityScheduler(hostScheduler);
  scheduler.pause();
  return scheduler;
};
