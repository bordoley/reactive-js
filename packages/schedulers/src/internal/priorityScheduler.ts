import {
  add,
  createDisposable,
  dispose,
  DisposableLike,
} from "@reactive-js/disposable";
import {
  SchedulerLike,
  SchedulerContinuationLike,
} from "@reactive-js/scheduler";
import { createPriorityQueue, PriorityQueueLike } from "./priorityQueue";

/**
 * A scheduler which schedules work according to it's priority.
 *
 * @noInheritDoc
 */
export interface PrioritySchedulerLike extends SchedulerLike {
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
  schedule(continuation: SchedulerContinuationLike, priority?: number): void;
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
  readonly dueTime: number;
  readonly priority: number;
  readonly startTime: number;
  readonly taskID: number;
}

const comparator = (a: ScheduledTaskLike, b: ScheduledTaskLike) => {
  let diff = 0;
  diff = diff !== 0 ? diff : a.dueTime - b.dueTime;
  diff = diff !== 0 ? diff : a.priority - b.priority;
  diff = diff !== 0 ? diff : a.startTime - b.startTime;
  diff = diff !== 0 ? diff : a.taskID - b.taskID;
  return diff;
};

const scheduleDrainQueue = (
  scheduler: PrioritySchedulerResourceImpl,
  task: ScheduledTaskLike,
) => {
  const head = scheduler.queue.peek();

  if (head === task && scheduler.isDisposed) {
    scheduler.delay = Math.max(task.dueTime - scheduler.now, 0);
    scheduler.hostScheduler.schedule(scheduler);
  }
};

class PrioritySchedulerResourceImpl
  implements PrioritySchedulerResourceLike, SchedulerContinuationLike {

  readonly add = add;
  readonly disposable: DisposableLike = createDisposable().add(() => {
    this.isDisposed = true;
    this.queue.clear();
  });
  readonly dispose = dispose;
  readonly queue: PriorityQueueLike<ScheduledTaskLike> = createPriorityQueue(
    comparator,
  );

  isDisposed = false;

  private currentTask: ScheduledTaskLike | undefined = undefined;
  private currentShouldYield: (() => boolean) | undefined = undefined;
  delay = 0;
  
  private shouldYield = () => {
    const currentTask = this.currentTask;
    const currentTaskIsDisposed =
      currentTask !== undefined && currentTask.continuation.isDisposed;

    const nextTask = this.queue.peek();
    const now = this.now;

    const nextTaskIsHigherPriority =
      currentTask !== undefined &&
      nextTask !== undefined &&
      currentTask !== nextTask &&
      nextTask.dueTime <= now &&
      nextTask.priority < currentTask.priority;

    const currentShouldYield = this.currentShouldYield;
    const hostRequestedYield =
      currentShouldYield !== undefined && currentShouldYield();

    return (
      currentTaskIsDisposed || nextTaskIsHigherPriority || hostRequestedYield
    );
  };
  private taskIDCounter = 0;

  constructor(readonly hostScheduler: SchedulerLike) {}

  get now(): number {
    return this.hostScheduler.now;
  }

  run(shouldYield?: () => boolean) {
    const queue = this.queue;
    for (
      let currentTask = queue.peek();
      currentTask !== undefined;
      currentTask = queue.peek()
    ) {
      const delay = currentTask.dueTime - this.now;
      if (delay > 0) {
        this.delay = delay;
        return this;
      }

      queue.pop();

      const continuation = currentTask.continuation;

      if (!continuation.isDisposed) {
        this.currentTask = currentTask;
        this.currentShouldYield = shouldYield;

        continuation.run(this.shouldYield);

        this.currentShouldYield = undefined;
        this.currentTask = undefined;

        if (!continuation.isDisposed) {
          const { delay } = continuation;
          const now = this.now;
          const continuedTask = {
            taskID: this.taskIDCounter++,
            continuation,
            priority: currentTask.priority,
            startTime: now,
            dueTime: now + delay,
          };
          queue.push(continuedTask);
        }
      }

      const nextTask = queue.peek();
      if (nextTask !== undefined) {
        const now = this.now;
        const nextTaskDelay = Math.max(nextTask.dueTime - now, 0);

        if (nextTaskDelay > 0 || (shouldYield !== undefined && shouldYield())) {
          this.delay = nextTaskDelay;
          return this;
        }
      }
    }
    return;
  }

  schedule(continuation: SchedulerContinuationLike, priority = 0) {
    const startTime = this.now;
    const dueTime = startTime + (continuation.delay ?? 0);

    const task = {
      taskID: this.taskIDCounter++,
      continuation,
      disposable: createDisposable(),
      priority,
      startTime,
      dueTime,
    };

    this.queue.push(task);
    scheduleDrainQueue(this, task);

    this.add(task.disposable);
    return task.disposable;
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
