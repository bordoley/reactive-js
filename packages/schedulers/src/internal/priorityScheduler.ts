import {
  add,
  createDisposable,
  dispose,
  DisposableLike,
  createSerialDisposable,
  SerialDisposableLike,
} from "@reactive-js/disposable";
import {
  SchedulerLike,
  SchedulerContinuationLike,
} from "@reactive-js/scheduler";
import { createPriorityQueue, PriorityQueueLike } from "./priorityQueue";
import { EnumeratorLike } from "@reactive-js/enumerable";

/**
 * A scheduler which schedules work according to it's priority.
 *
 * @noInheritDoc
 */
export interface PrioritySchedulerLike {
  /** The scheduler's current time in ms. */
  readonly now: number;

  /**
   * Schedules a continuation to be executed on the scheduler.
   *
   * @param continuation The SchedulerContinuation to be executed.
   * @param priority An optional priority that is used when prioritizing which work
   * to execute next. The definition of the priority value along with it's default
   * value is implementation specific.
   *
   * @returns A `DisposableLike` that can be disposed to cancel the scheduled work.
   */
  schedule(continuation: SchedulerContinuationLike, priority: number): void;
}

/**
 * A priority scheduler which is also an unmanaged resource.
 *
 * @noInheritDoc
 * */
export interface PrioritySchedulerResourceLike
  extends PrioritySchedulerLike,
    DisposableLike {}

interface ScheduledTaskLike {
  readonly continuation: SchedulerContinuationLike;
  dueTime: number;
  readonly priority: number;
  startTime: number;
  taskID: number;
}

const comparator = (a: ScheduledTaskLike, b: ScheduledTaskLike) => {
  let diff = 0;
  diff = diff !== 0 ? diff : a.dueTime - b.dueTime;
  diff = diff !== 0 ? diff : a.priority - b.priority;
  diff = diff !== 0 ? diff : a.startTime - b.startTime;
  diff = diff !== 0 ? diff : a.taskID - b.taskID;
  return diff;
};

class PrioritySchedulerContinuation implements SchedulerContinuationLike {
  readonly add = add;
  readonly disposable: DisposableLike = createDisposable();
  readonly dispose = dispose;

  constructor(
    private readonly scheduler: PrioritySchedulerResourceImpl,
    public delay: number,
  ) {}

  get isDisposed() {
    return this.disposable.isDisposed;
  }

  run(hostShouldYield?: () => boolean) {
    const scheduler = this.scheduler;
    const shouldYield = () => {
      const current = scheduler.current;
      const next = scheduler.peek();

      const nextTaskIsHigherPriority =
        scheduler.current !== undefined &&
        next !== undefined &&
        current !== next &&
        next.dueTime <= scheduler.now &&
        next.priority > current.priority;

      const hostRequestedYield =
        hostShouldYield !== undefined && hostShouldYield();

      return nextTaskIsHigherPriority || hostRequestedYield;
    };

    for (
      let task = scheduler.peek(), isDisposed = this.isDisposed;
      task !== undefined && !isDisposed;
      task = scheduler.peek()
    ) {
      const delay = task.dueTime - scheduler.now;

      if (delay > 0) {
        this.delay = delay;
        return;
      }

      scheduler.move();

      const continuation = task.continuation;
      continuation.run(shouldYield);

      if (!continuation.isDisposed) {
        const { delay } = continuation;
        const now = scheduler.now;

        // Reuse the existing task and avoid generating garbage.
        task.taskID = scheduler.taskIDCounter++;
        task.startTime = now;
        task.dueTime = now + delay;

        scheduler.reschedule(task);
      }

      isDisposed = this.isDisposed;
      // Yield if were not disposed. The next iteration of the loop
      // will yield if the next task is delayed.
      if (!isDisposed && shouldYield()) {
        return;
      }
    }

    this.dispose();
  }
}

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

  current: any = undefined;
  hasCurrent = false;
  taskIDCounter = 0;

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
    const queue = this.queue;
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
      const startTime = this.now;
      const dueTime = startTime + (continuation.delay ?? 0);

      const task = {
        taskID: this.taskIDCounter++,
        continuation,
        priority,
        startTime,
        dueTime,
      };

      this.queue.push(task);
      const head = this.peek();

      if (head === task) {
        const delay = Math.max(task.dueTime - this.now, 0);
        const continuation = new PrioritySchedulerContinuation(this, delay);
        this.disposable.inner = continuation;
        this.hostScheduler.schedule(continuation);
      }
    }
  }

  reschedule(task: ScheduledTaskLike) {
    // Internal api for rescheduling tasks. No need to re-add the task continuation
    // to this.
    if (!this.isDisposed) {
      this.queue.push(task);
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
