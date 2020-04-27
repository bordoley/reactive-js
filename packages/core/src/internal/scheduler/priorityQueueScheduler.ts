import { createPriorityQueue, QueueLike } from "../../collections";
import {
  AbstractSerialDisposable,
  DisposableLike,
  disposed,
} from "../../disposable";
import { none, Option, isSome, isNone } from "../../option";
import {
  SchedulerLike,
  SchedulerContinuationLike,
  PrioritySchedulerLike,
  PausableSchedulerLike,
} from "./interfaces";
import { AbstractSchedulerContinuation } from "./abstractSchedulerContinuation";
import { alwaysFalse } from "../../functions";

type ScheduledTask = {
  readonly continuation: SchedulerContinuationLike;
  dueTime: number;
  readonly priority: number;
  taskID: number;
};

const move = (scheduler: PriorityQueueScheduler): boolean => {
  // First fast forward through any disposed tasks.
  peek(scheduler);

  const task = scheduler.queue.pop();
  const hasCurrent = isSome(task);

  scheduler.current = task;

  return hasCurrent;
};

const peek = (scheduler: PriorityQueueScheduler): Option<ScheduledTask> => {
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

    return (
      this.isDisposed || nextTaskIsHigherPriority || this.hostShouldYield()
    );
  };

  constructor(private readonly scheduler: PriorityQueueScheduler) {
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
        scheduler.dueTime = dueTime;
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

const scheduleContinuation = (
  scheduler: PriorityQueueScheduler,
  task: ScheduledTask,
) => {
  const continuation = new PrioritySchedulerContinuation(scheduler);
  scheduler.inner = continuation;

  const dueTime = task.dueTime;
  scheduler.dueTime = dueTime;

  const delay = dueTime - scheduler.now;

  scheduler.hostScheduler.schedule(continuation, delay);
};

const scheduleWithPriority = (
  scheduler: PriorityQueueScheduler,
  continuation: SchedulerContinuationLike,
  priority: number,
  delay = 0,
) => {
  delay = Math.max(0, delay);
  scheduler.add(continuation);

  if (!continuation.isDisposed) {
    const now = scheduler.now;
    const dueTime = now + delay;

    const task = {
      taskID: scheduler.taskIDCounter++,
      continuation,
      priority,
      dueTime,
    };

    const { delayed, queue } = scheduler;
    const targetQueue = dueTime > now ? delayed : queue;
    targetQueue.push(task);

    const head = peek(scheduler);

    const continuationActive =
      !scheduler.inner.isDisposed && scheduler.dueTime <= dueTime;

    if (head === task && !continuationActive) {
      scheduleContinuation(scheduler, head);
    }
  }
};

abstract class PriorityQueueScheduler extends AbstractSerialDisposable {
  inContinuation = false;

  readonly delayed: QueueLike<ScheduledTask> = createPriorityQueue(
    delayedComparator,
  );
  readonly queue: QueueLike<ScheduledTask> = createPriorityQueue(comparator);

  current: any = none;
  taskIDCounter = 0;
  dueTime = 0;

  constructor(readonly hostScheduler: SchedulerLike) {
    super();
    this.add(() => {
      this.queue.clear();
      this.delayed.clear();
    });
  }

  get now(): number {
    return this.hostScheduler.now;
  }
}

class PrioritySchedulerImpl extends PriorityQueueScheduler
  implements PrioritySchedulerLike {
  schedule(
    continuation: SchedulerContinuationLike,
    priority: number,
    delay = 0,
  ) {
    scheduleWithPriority(this, continuation, priority, delay);
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
  new PrioritySchedulerImpl(hostScheduler);

class PausableSchedulerImpl extends PriorityQueueScheduler
  implements PausableSchedulerLike {
  private isPaused = true;

  pause() {
    this.isPaused = true;
    this.inner = disposed;
  }

  resume() {
    this.isPaused = false;
    const head = peek(this);

    if (this.inner.isDisposed && isSome(head)) {
      scheduleContinuation(this, head);
    }
  }

  schedule(continuation: SchedulerContinuationLike, delay = 0) {
    scheduleWithPriority(this, continuation, 0, delay);
    if (this.isPaused) {
      this.inner = disposed;
    }
  }
}

export const toPausableScheduler = (
  hostScheduler: SchedulerLike,
): DisposableLike & PausableSchedulerLike =>
  new PausableSchedulerImpl(hostScheduler);
