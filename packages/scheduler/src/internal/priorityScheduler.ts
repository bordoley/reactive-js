import {
  add,
  dispose,
  createSerialDisposable,
  SerialDisposableLike,
} from "@reactive-js/disposable";
import { EnumeratorLike } from "@reactive-js/enumerable";
import {
  SchedulerLike,
  SchedulerContinuationLike,
  PrioritySchedulerResourceLike,
} from "./interfaces";
import { createPriorityQueue, PriorityQueueLike } from "./priorityQueue";
import { AbstractSchedulerContinuation } from "./abstractSchedulerContinuation";

interface ScheduledTaskLike {
  readonly continuation: SchedulerContinuationLike;
  dueTime: number;
  readonly priority: number;
  taskID: number;
}

class PrioritySchedulerContinuation extends AbstractSchedulerContinuation {
  constructor(
    private readonly scheduler: PrioritySchedulerResourceImpl,
    public dueTime: number,
  ) {
    super();
  }

  produce(hostShouldYield?: () => boolean): number {
    const scheduler = this.scheduler;
    const shouldYield = () => {
      const current = scheduler.current;
      const next = scheduler.peek();

      const nextTaskIsHigherPriority =
        current !== undefined &&
        next !== undefined &&
        current !== next &&
        next.dueTime <= scheduler.now &&
        next.priority < current.priority;

      const hostRequestedYield =
        hostShouldYield !== undefined && hostShouldYield();

      return nextTaskIsHigherPriority || hostRequestedYield;
    };

    scheduler.inContinuation = true;

    for (
      let task = scheduler.peek(), isDisposed = this.isDisposed;
      task !== undefined && !isDisposed;
      task = scheduler.peek()
    ) {
      const now = scheduler.now;
      const delay = task.dueTime - now;

      if (delay > 0) {
        scheduler.inContinuation = false;
        this.dueTime = now + delay;
        return delay;
      }

      scheduler.move();

      const continuation = task.continuation;
      const nextDelay = continuation.run(shouldYield);

      if (!continuation.isDisposed) {
        // Reuse the existing task and avoid generating garbage.
        task.taskID = scheduler.taskIDCounter++;
        task.dueTime = scheduler.now + nextDelay;

        scheduler.reschedule(task);
      }

      isDisposed = this.isDisposed;
      // Yield if were not disposed. The next iteration of the loop
      // will yield if the next task is delayed.
      if (!isDisposed && shouldYield()) {
        scheduler.inContinuation = false;
        this.dueTime = scheduler.now;
        return 0;
      }
    }

    scheduler.inContinuation = false;
    return -1;
  }
}

const comparator = (a: ScheduledTaskLike, b: ScheduledTaskLike) => {
  let diff = 0;
  diff = diff !== 0 ? diff : a.priority - b.priority;
  diff = diff !== 0 ? diff : a.taskID - b.taskID;
  return diff;
};

const delayedComparator = (a: ScheduledTaskLike, b: ScheduledTaskLike) => {
  let diff = 0;
  diff = diff !== 0 ? diff : a.dueTime - b.dueTime;
  diff = diff !== 0 ? diff : a.taskID - b.taskID;
  return diff;
};

class PrioritySchedulerResourceImpl
  implements
    EnumeratorLike<void, ScheduledTaskLike>,
    PrioritySchedulerResourceLike {
  readonly add = add;
  readonly disposable: SerialDisposableLike = createSerialDisposable().add(() =>
    this.queue.clear(),
  );
  readonly dispose = dispose;
  inContinuation = false;

  private readonly queue: PriorityQueueLike<
    ScheduledTaskLike
  > = createPriorityQueue(comparator);

  private readonly delayed: PriorityQueueLike<
    ScheduledTaskLike
  > = createPriorityQueue(delayedComparator);

  current: any = undefined;
  hasCurrent = false;
  taskIDCounter = 0;

  private continuation: PrioritySchedulerContinuation | undefined = undefined;

  constructor(readonly hostScheduler: SchedulerLike) {}

  get isDisposed() {
    return this.disposable.isDisposed;
  }

  get now(): number {
    return this.hostScheduler.now;
  }

  move(): boolean {
    // First fast forward through any disposed tasks.
    this.peek();

    const task = this.queue.pop();
    const hasCurrent = task !== undefined;

    this.current = task;
    this.hasCurrent = hasCurrent;

    return hasCurrent;
  }

  peek(): ScheduledTaskLike | undefined {
    const { delayed, now, queue } = this;

    // push delayed tasks to the queue
    for (
      let task = delayed.peek();
      task !== undefined && task.dueTime < now;
      task = delayed.peek()
    ) {
      delayed.pop();
      queue.push(task);
    }

    let task: ScheduledTaskLike | undefined = undefined;
    for (
      task = queue.peek();
      task !== undefined && task.continuation.isDisposed;
      task = queue.peek()
    ) {
      queue.pop();
    }

    return task;
  }

  schedule(
    continuation: SchedulerContinuationLike,
    priority: number,
    delay = 0,
  ) {
    this.add(continuation);

    if (!this.isDisposed) {
      const now = this.now;
      const dueTime = now + delay;

      const task = {
        taskID: this.taskIDCounter++,
        continuation,
        priority,
        dueTime,
      };

      if (dueTime > now) {
        this.delayed.push(task);
      } else {
        this.queue.push(task);
      }

      const head = this.peek();

      const priorityContinuation = this.continuation;
      const continuationActive =
        this.inContinuation ||
        (priorityContinuation !== undefined &&
          priorityContinuation.dueTime <= dueTime);

      if (head === task && !continuationActive) {
        const continuation = new PrioritySchedulerContinuation(
          this,
          dueTime,
        ).add(() => {
          this.continuation = undefined;
        });
        this.disposable.inner = continuation;
        this.continuation = continuation;
        this.hostScheduler.schedule(continuation, delay);
      }
    }
  }

  reschedule(task: ScheduledTaskLike) {
    // Internal api for rescheduling tasks. No need to re-add the task continuation
    // to this.
    if (!this.isDisposed) {
      if (task.dueTime > this.now) {
        this.delayed.push(task);
      } else {
        this.queue.push(task);
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
): PrioritySchedulerResourceLike =>
  new PrioritySchedulerResourceImpl(hostScheduler);
