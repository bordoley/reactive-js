import {
  AbstractSerialDisposable,
  DisposableLike,
  addDisposable,
  addTeardown,
  disposed,
} from "../disposable";
import { pipe } from "../functions";
import { Option, isNone, isSome, none } from "../option";
import { QueueLike, createPriorityQueue } from "../queues";
import {
  PausableSchedulerLike,
  PrioritySchedulerLike,
  SchedulerContinuationLike,
  SchedulerLike,
} from "../scheduler";
import { run, schedule, yield$ } from "./schedulerContinuation";

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

    if (!task.continuation.isDisposed) {
      break;
    }

    queue.pop();
  }

  return task ?? delayed.peek();
};

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
  const dueTime = task.dueTime;
  const delay = Math.max(dueTime - scheduler.now, 0);

  scheduler.dueTime = dueTime;
  scheduler.inner = pipe(
    scheduler.host,
    schedule(scheduler.continuation, { delay }),
  );
};

class PriorityScheduler
  extends AbstractSerialDisposable
  implements PrioritySchedulerLike, PausableSchedulerLike {
  readonly continuation = (host: SchedulerLike) => {
    for (
      let task = peek(this);
      isSome(task) && !this.isDisposed;
      task = peek(this)
    ) {
      const { continuation, dueTime } = task;
      const delay = Math.max(dueTime - this.now, 0);

      if (delay === 0) {
        move(this);

        this.inContinuation = true;
        run(continuation);
        this.inContinuation = false;
      } else {
        this.dueTime = this.now + delay;
      }
      yield$(host, delay);
    }
  };
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
    addTeardown(this, _e => {
      this.queue.clear();
      this.delayed.clear();
    });
  }

  get now(): number {
    return this.host.now;
  }

  get shouldYield() {
    const current = this.current;
    const next = peek(this);

    const nextTaskIsHigherPriority =
      isSome(current) &&
      isSome(next) &&
      current !== next &&
      next.dueTime <= this.now &&
      next.priority < current.priority;

    return (
      this.inContinuation &&
      (this.isDisposed ||
        this.isPaused ||
        nextTaskIsHigherPriority ||
        this.host.shouldYield)
    );
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
      readonly delay?: number;
    },
  ): void;
  schedule(
    continuation: SchedulerContinuationLike,
    options: {
      readonly priority: number;
      readonly delay?: number;
    },
  ): void;
  schedule(
    continuation: SchedulerContinuationLike,
    options: {
      readonly priority?: number;
      readonly delay?: number;
    } = {},
  ) {
    let { delay = 0, priority } = options;
    delay = Math.max(0, delay);
    priority = isSome(priority)
      ? priority
      : this.inContinuation
      ? this.current.priority
      : Number.MAX_SAFE_INTEGER;

    addDisposable(this, continuation);

    if (!continuation.isDisposed) {
      const now = this.now;
      const dueTime = Math.max(now + delay, now);

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
