import { createPriorityQueue, QueueLike } from "@reactive-js/collections";
import {
  AbstractSerialDisposable,
  DisposableLike,
} from "@reactive-js/disposable";
import { none, Option, isSome, isNone } from "@reactive-js/option";
import {
  SchedulerLike,
  SchedulerContinuationLike,
  PrioritySchedulerLike,
} from "./interfaces";
import { AbstractSchedulerContinuation } from "./abstractSchedulerContinuation";

type ScheduledTask = {
  readonly continuation: SchedulerContinuationLike;
  dueTime: number;
  readonly priority: number;
  taskID: number;
};

const alwaysFalse = () => false;

class PrioritySchedulerContinuation extends AbstractSchedulerContinuation {
  private hostShouldYield = alwaysFalse;

  private readonly shouldYield = () => {
    const scheduler = this.scheduler;
    const current = scheduler.current;
    const next = peek(scheduler);

    const nextTaskIsHigherPriority =
      isSome(current) &&
      isSome(next) &&
      current !== next &&
      next.dueTime <= scheduler.now &&
      next.priority < current.priority;

    return nextTaskIsHigherPriority || this.hostShouldYield();
  };

  constructor(private readonly scheduler: PrioritySchedulerImpl) {
    super();
  }

  produce(hostShouldYield?: () => boolean): number {
    this.hostShouldYield = hostShouldYield ?? alwaysFalse;

    const { scheduler } = this;
    const { delayed, queue } = scheduler;

    for (
      let task = peek(scheduler), isDisposed = this.isDisposed;
      isSome(task) && !isDisposed;
      task = peek(scheduler)
    ) {
      const { continuation, dueTime } = task;
      const now = scheduler.now;
      const delay = dueTime - now;

      if (delay > 0) {
        return delay;
      }

      move(scheduler);

      scheduler.inContinuation = true;
      const nextDelay = continuation.run(this.shouldYield);
      scheduler.inContinuation = false;

      if (!continuation.isDisposed) {
        const now = scheduler.now;

        // Reuse the existing task and avoid generating garbage.
        task.taskID = scheduler.taskIDCounter++;
        task.dueTime = now + nextDelay;

        const targetQueue = task.dueTime > now ? delayed : queue;
        targetQueue.push(task);
      }

      isDisposed = this.isDisposed;
      // Yield if were not disposed. The next iteration of the loop
      // will yield if the next task is delayed.
      if (!isDisposed && this.hostShouldYield()) {
        return 0;
      }
    }

    return -1;
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

const move = (scheduler: PrioritySchedulerImpl): boolean => {
  // First fast forward through any disposed tasks.
  peek(scheduler);

  const task = scheduler.queue.pop();
  const hasCurrent = isSome(task);

  scheduler.current = task;
  scheduler.hasCurrent = hasCurrent;

  return hasCurrent;
};

const peek = (scheduler: PrioritySchedulerImpl): Option<ScheduledTask> => {
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

class PrioritySchedulerImpl extends AbstractSerialDisposable
  implements PrioritySchedulerLike, DisposableLike {
  inContinuation = false;

  readonly queue: QueueLike<ScheduledTask> = createPriorityQueue(comparator);

  readonly delayed: QueueLike<ScheduledTask> = createPriorityQueue(
    delayedComparator,
  );

  current: any = none;
  hasCurrent = false;
  taskIDCounter = 0;
  dueTime = 0;

  constructor(readonly hostScheduler: SchedulerLike) {
    super();
    this.add(() => this.queue.clear());
  }

  get now(): number {
    return this.hostScheduler.now;
  }

  schedule(
    continuation: SchedulerContinuationLike,
    priority: number,
    delay = 0,
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
        this.inContinuation ||
        (!this.inner.isDisposed && this.dueTime <= dueTime);

      if (head === task && !continuationActive) {
        const continuation = new PrioritySchedulerContinuation(this);

        this.dueTime = dueTime;
        this.inner = continuation;
        this.hostScheduler.schedule(continuation, delay);
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
export const createPriorityScheduler = (
  hostScheduler: SchedulerLike,
): DisposableLike & PrioritySchedulerLike =>
  new PrioritySchedulerImpl(hostScheduler);
