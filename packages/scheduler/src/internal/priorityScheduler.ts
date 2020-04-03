import {
  add,
  createDisposable,
  dispose,
  DisposableLike,
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

interface ScheduledTaskLike {
  readonly continuation: SchedulerContinuationLike;
  dueTime: number;
  readonly priority: number;
  taskID: number;
}

class PrioritySchedulerContinuation implements SchedulerContinuationLike {
  readonly add = add;
  readonly disposable: DisposableLike = createDisposable();
  readonly dispose = dispose;

  running = false;
  dueTime: number;

  constructor(
    private readonly scheduler: PrioritySchedulerResourceImpl,
    public delay: number,
  ) {
    this.dueTime = scheduler.now + delay;
  }

  get isDisposed() {
    return this.disposable.isDisposed;
  }

  run(hostShouldYield?: () => boolean) {
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

    this.running = true;

    for (
      let task = scheduler.peek(), isDisposed = this.isDisposed;
      task !== undefined && !isDisposed;
      task = scheduler.peek()
    ) {
      const now = scheduler.now;
      const delay = task.dueTime - now;

      if (delay > 0) {
        this.running = false;
        this.delay = delay;
        this.dueTime = now + delay;
        return;
      }

      scheduler.move();

      const continuation = task.continuation;
      continuation.run(shouldYield);

      if (!continuation.isDisposed) {
        const { delay } = continuation;

        // Reuse the existing task and avoid generating garbage.
        task.taskID = scheduler.taskIDCounter++;
        task.dueTime = scheduler.now + delay;

        scheduler.reschedule(task);
      }

      isDisposed = this.isDisposed;
      // Yield if were not disposed. The next iteration of the loop
      // will yield if the next task is delayed.
      if (!isDisposed && shouldYield()) {
        this.running = false;
        this.delay = 0;
        this.dueTime = scheduler.now;
        return;
      }
    }

    this.running = false;
    this.dispose();
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

  schedule(continuation: SchedulerContinuationLike, priority: number) {
    this.add(continuation);

    if (!this.isDisposed) {
      const now = this.now;
      const { delay } = continuation;
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
        priorityContinuation !== undefined &&
        (priorityContinuation.running ||
          priorityContinuation.dueTime <= dueTime);

      if (head === task && !continuationActive) {
        const continuation = new PrioritySchedulerContinuation(this, delay).add(
          () => {
            this.continuation = undefined;
          },
        );
        this.disposable.inner = continuation;
        this.continuation = continuation;
        this.hostScheduler.schedule(continuation);
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
