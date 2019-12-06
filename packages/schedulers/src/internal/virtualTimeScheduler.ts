import {
  createDisposable,
  DisposableLike,
  DisposableOrTeardown,
  throwIfDisposed,
} from "@reactive-js/disposable";

import {
  SchedulerContinuationLike,
  SchedulerLike,
  SchedulerResourceLike,
} from "@reactive-js/scheduler";
import { createPriorityQueue, PriorityQueueLike } from "./priorityQueue";

/** @noInheritDoc */
export interface VirtualTimeSchedulerLike extends SchedulerLike {
  run(): void;
}

/** @noInheritDoc */
export interface VirtualTimeSchedulerResourceLike
  extends SchedulerResourceLike,
    VirtualTimeSchedulerLike {
  run(): void;
}

interface VirtualTask {
  continuation: SchedulerContinuationLike;
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
  get isDisposed(): boolean {
    return this.disposable.isDisposed;
  }

  get inScheduledContinuation(): boolean {
    return this._inScheduledContinuation;
  }

  get now(): number {
    return this._now;
  }

  private readonly shouldYield = (): boolean => {
    this.microTaskTicks++;
    return this.microTaskTicks >= this.maxMicroTaskTicks;
  };

  private _now = 0;
  private readonly disposable = createDisposable();
  private readonly maxMicroTaskTicks: number;
  private microTaskTicks = 0;
  private _inScheduledContinuation = false;

  private taskIDCount = 0;
  private readonly taskQueue: PriorityQueueLike<
    VirtualTask
  > = createPriorityQueue(comparator);

  constructor(maxMicroTaskTicks: number) {
    this.maxMicroTaskTicks = maxMicroTaskTicks;
  }

  add(
    disposable: DisposableOrTeardown,
    ...disposables: DisposableOrTeardown[]
  ): void {
    this.disposable.add(disposable, ...disposables);
  }

  dispose(): void {
    this.disposable.dispose();
  }

  remove(
    disposable: DisposableOrTeardown,
    ...disposables: DisposableOrTeardown[]
  ): void {
    this.disposable.remove(disposable, ...disposables);
  }

  run() {
    throwIfDisposed(this);
    while (this.taskQueue.count > 0) {
      const {
        dueTime,
        continuation,
        disposable,
      } = this.taskQueue.pop() as VirtualTask;
      this._now = dueTime;
      this.microTaskTicks = 0;

      if (!disposable.isDisposed) {
        this._inScheduledContinuation = true;
        const result = continuation(this.shouldYield);
        this._inScheduledContinuation = false;

        if (result !== undefined) {
          const [nextContinuation, delay = 0] = result;
          const continuedTask = {
            continuation: nextContinuation,
            disposable,
            dueTime: this.now + delay,
            id: this.taskIDCount++,
          }
          this.taskQueue.push(continuedTask);
        } else {
          disposable.dispose();
        }
      }
    }
    this.dispose();
  }

  schedule(continuation: SchedulerContinuationLike, delay = 0): DisposableLike {
    throwIfDisposed(this);

    const disposable = createDisposable();
    const work: VirtualTask = {
      id: this.taskIDCount++,
      dueTime: this.now + delay,
      continuation,
      disposable,
    };
    this.taskQueue.push(work);

    this.add(disposable);
    disposable.add(() => this.remove(disposable));
    return disposable;
  }
}

export const createVirtualTimeScheduler = (
  maxMicroTaskTicks: number = Number.MAX_SAFE_INTEGER,
): VirtualTimeSchedulerResourceLike =>
  new VirtualTimeSchedulerResourceImpl(maxMicroTaskTicks);
