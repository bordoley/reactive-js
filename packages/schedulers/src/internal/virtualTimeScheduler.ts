import {
  createDisposable,
  DisposableLike,
  throwIfDisposed,
  disposableMixin,
} from "@reactive-js/disposable";
import {
  SchedulerResourceLike,
  SchedulerContinuationLike,
  SchedulerContinuationResultLike,
} from "@reactive-js/scheduler";
import { schedulerMixin } from "./schedulerMixin";
import { createPriorityQueue, PriorityQueueLike } from "./priorityQueue";

/** @noInheritDoc */
export interface VirtualTimeSchedulerResourceLike
  extends SchedulerResourceLike,
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

class VirtualTimeSchedulerResourceImpl
  implements VirtualTimeSchedulerResourceLike {
  private readonly continuationResult = { continuation: this };
  readonly disposable: DisposableLike = createDisposable();
  private microTaskTicks = 0;
  now = 0;
  private runShouldYield?: () => boolean;
  private taskIDCount = 0;
  private readonly taskQueue: PriorityQueueLike<
    VirtualTask
  > = createPriorityQueue(comparator);

  protected shouldYield: (() => boolean) | undefined = () => {
    const runShouldYield = this.runShouldYield;
    this.microTaskTicks++;
    return (
      this.microTaskTicks >= this.maxMicroTaskTicks ||
      (runShouldYield !== undefined && runShouldYield())
    );
  };

  constructor(private readonly maxMicroTaskTicks: number) {}

  get isDisposed() {
    return this.disposable.isDisposed;
  }

  add = disposableMixin.add;

  dispose = disposableMixin.dispose;

  private loop(
    shouldYield: () => boolean,
  ): SchedulerContinuationResultLike | void {
    this.runShouldYield = shouldYield;
    while (this.step()) {
      if (shouldYield()) {
        this.runShouldYield = undefined;
        return this.continuationResult;
      }
    }

    this.runShouldYield = undefined;
    return;
  }

  private loopFast() {
    // eslint-disable-next-line no-empty
    while (this.step()) {}
  }

  next(): IteratorResult<void> {
    throwIfDisposed(this);

    const hasMore = this.step();
    return hasMore ? iteratorYield : iteratorDone;
  }

  remove = disposableMixin.remove;

  return(): IteratorResult<void> {
    this.dispose();
    return iteratorDone;
  }

  run(shouldYield?: () => boolean): SchedulerContinuationResultLike | void {
    throwIfDisposed(this);

    if (
      this.maxMicroTaskTicks === Number.MAX_SAFE_INTEGER &&
      shouldYield === undefined
    ) {
      this.shouldYield = undefined;
    }

    let result: SchedulerContinuationResultLike | void;
    if (shouldYield !== undefined) {
      result = this.loop(shouldYield);
    } else {
      result = this.loopFast();
    }

    if (result !== undefined) {
      return result;
    } else {
      this.dispose();
      return;
    }
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

  private step(): boolean {
    const task = this.taskQueue.pop();

    if (task !== undefined) {
      const { dueTime, callback, disposable } = task;

      this.now = dueTime;
      this.microTaskTicks = 0;

      if (!disposable.isDisposed) {
        callback();
        disposable.dispose();
      }
    }

    return this.taskQueue.count > 0;
  }

  schedule = schedulerMixin.schedule;

  throw(e?: any): IteratorResult<void> {
    this.dispose;
    if (e !== undefined) {
      throw e;
    }
    return iteratorDone;
  }
}

export const createVirtualTimeSchedulerResource = (
  maxMicroTaskTicks: number = Number.MAX_SAFE_INTEGER,
): VirtualTimeSchedulerResourceLike =>
  new VirtualTimeSchedulerResourceImpl(maxMicroTaskTicks);
