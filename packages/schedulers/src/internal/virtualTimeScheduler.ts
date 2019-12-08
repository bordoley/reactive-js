import {
  createDisposable,
  DisposableLike,
  DisposableOrTeardown,
  throwIfDisposed,
} from "@reactive-js/disposable";
import { SchedulerLike, SchedulerResourceLike } from "@reactive-js/scheduler";
import { createPriorityQueue, PriorityQueueLike } from "./priorityQueue";
import { AbstractScheduler } from "./abstractScheduler";

/** @noInheritDoc */
export interface VirtualTimeSchedulerLike extends SchedulerLike {
  run(): void;
}

/** @noInheritDoc */
export interface VirtualTimeSchedulerResourceLike
  extends SchedulerResourceLike,
    VirtualTimeSchedulerLike {}

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

class VirtualTimeSchedulerResourceImpl extends AbstractScheduler
  implements VirtualTimeSchedulerResourceLike {
  private _now = 0;
  private readonly disposable = createDisposable();
  private readonly maxMicroTaskTicks: number;
  private microTaskTicks = 0;
  private taskIDCount = 0;
  private readonly taskQueue: PriorityQueueLike<
    VirtualTask
  > = createPriorityQueue(comparator);
  constructor(maxMicroTaskTicks: number) {
    super();
    this.maxMicroTaskTicks = maxMicroTaskTicks;
  }

  get isDisposed(): boolean {
    return this.disposable.isDisposed;
  }

  get now(): number {
    return this._now;
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

  protected shouldCallbackYield(_: number): boolean {
    this.microTaskTicks++;
    return this.microTaskTicks >= this.maxMicroTaskTicks;
  }

  protected scheduleCallback(callback: () => void, delay = 0): DisposableLike {
    const disposable = createDisposable();
    const work: VirtualTask = {
      id: this.taskIDCount++,
      dueTime: this.now + delay,
      callback,
      disposable,
    };
    this.taskQueue.push(work);

    this.add(disposable);
    disposable.add(() => this.remove(disposable));
    return disposable;
  }

  run() {
    throwIfDisposed(this);
    while (this.taskQueue.count > 0) {
      const {
        dueTime,
        callback,
        disposable,
      } = this.taskQueue.pop() as VirtualTask;

      this._now = dueTime;
      this.microTaskTicks = 0;

      if (!disposable.isDisposed) {
        callback();
        disposable.dispose();
      }
    }
    this.dispose();
  }
}

export const createVirtualTimeScheduler = (
  maxMicroTaskTicks: number = Number.MAX_SAFE_INTEGER,
): VirtualTimeSchedulerResourceLike =>
  new VirtualTimeSchedulerResourceImpl(maxMicroTaskTicks);
