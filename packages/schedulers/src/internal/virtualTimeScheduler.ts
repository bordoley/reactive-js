import {
  createDisposable,
  DisposableLike,
  disposableMixin,
} from "@reactive-js/disposable";
import {
  SchedulerLike,
  SchedulerContinuationLike,
} from "@reactive-js/scheduler";
import { schedulerMixin } from "./schedulerMixin";
import { createPriorityQueue, PriorityQueueLike } from "./priorityQueue";

/** @noInheritDoc */
export interface VirtualTimeSchedulerResourceLike
  extends DisposableLike, 
    SchedulerLike,
    Iterator<void>,
    SchedulerContinuationLike {}

const iteratorYield = {
  done: false,
  value: undefined,
};

const iteratorDone = {
  done: true,
  value: undefined,
};

interface VirtualTask {
  callback: () => void;
  disposable: DisposableLike;
  dueTime: number;
  id: number;
}

const comparator = (a: VirtualTask, b: VirtualTask) => {
  let diff = 0;
  diff = diff !== 0 ? diff : a.dueTime - b.dueTime;
  diff = diff !== 0 ? diff : a.id - b.id;
  return diff;
};

const step = (scheduler: VirtualTimeSchedulerResourceImpl): boolean => {
  const task = scheduler.taskQueue.pop();

  if (task !== undefined) {
    const { dueTime, callback, disposable } = task;

    scheduler.now = dueTime;
    scheduler.microTaskTicks = 0;

    if (!disposable.isDisposed) {
      callback();
      disposable.dispose();
    }
  }

  return scheduler.taskQueue.count > 0;
};

class VirtualTimeSchedulerResourceImpl
  implements VirtualTimeSchedulerResourceLike {
  readonly add = disposableMixin.add;
  readonly disposable: DisposableLike = createDisposable();
  readonly dispose = disposableMixin.dispose;
  microTaskTicks = 0;
  now = 0;
  private runShouldYield?: () => boolean;
  readonly schedule = schedulerMixin.schedule;
  shouldYield: (() => boolean) | undefined = () => {
    const runShouldYield = this.runShouldYield;
    this.microTaskTicks++;
    return (
      this.microTaskTicks >= this.maxMicroTaskTicks ||
      (runShouldYield !== undefined && runShouldYield())
    );
  };
  private taskIDCount = 0;
  readonly taskQueue: PriorityQueueLike<VirtualTask> = createPriorityQueue(
    comparator,
  );

  constructor(private readonly maxMicroTaskTicks: number) {}

  get isDisposed() {
    return this.disposable.isDisposed;
  }

  next(): IteratorResult<void> {
    const hasMore = !this.isDisposed && step(this);
    return hasMore ? iteratorYield : iteratorDone;
  }

  return(): IteratorResult<void> {
    this.dispose();
    return iteratorDone;
  }

  run(shouldYield?: () => boolean): SchedulerContinuationLike | void {
    if (this.isDisposed) {
      return;
    }

    if (
      this.maxMicroTaskTicks === Number.MAX_SAFE_INTEGER &&
      shouldYield === undefined
    ) {
      this.shouldYield = undefined;
    }

    if (shouldYield !== undefined) {
      this.runShouldYield = shouldYield;
      while (step(this)) {
        if (shouldYield()) {
          this.runShouldYield = undefined;
          return this;
        }
      }

      this.runShouldYield = undefined;
    } else {
      // eslint-disable-next-line no-empty
      while (step(this)) {}
    }

    this.dispose();
    return;
  }

  scheduleCallback(callback: () => void, delay = 0): DisposableLike {
    const disposable = createDisposable();
    const work: VirtualTask = {
      id: this.taskIDCount++,
      dueTime: this.now + delay,
      callback,
      disposable,
    };
    this.taskQueue.push(work);

    this.add(disposable);
    return disposable;
  }

  throw(cause?: unknown): IteratorResult<void> {
    this.dispose({ cause });
    if (cause !== undefined) {
      throw cause;
    }
    return iteratorDone;
  }
}

export const createVirtualTimeSchedulerResource = (
  maxMicroTaskTicks: number = Number.MAX_SAFE_INTEGER,
): VirtualTimeSchedulerResourceLike =>
  new VirtualTimeSchedulerResourceImpl(maxMicroTaskTicks);
