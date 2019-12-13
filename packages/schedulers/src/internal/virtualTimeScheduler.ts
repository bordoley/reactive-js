import {
  createDisposable,
  DisposableLike,
  throwIfDisposed,
} from "@reactive-js/disposable";
import { SchedulerResourceLike } from "@reactive-js/scheduler";
import { createPriorityQueue, PriorityQueueLike } from "./priorityQueue";
import { AbstractSchedulerResource } from "./abstractScheduler";

/** @noInheritDoc */
export interface VirtualTimeSchedulerResourceLike
  extends SchedulerResourceLike,
    Iterator<void> {
  run(): void;
}

const iteratorYield = {
  done: false,
  value: undefined,
};

const iteratorDone = {
  done: true,
  value: undefined,
};

/** @ignore */
export abstract class AbstractVirtualTimeSchedulerResource extends AbstractSchedulerResource {
  protected abstract step(): boolean;

  next(): IteratorResult<void> {
    throwIfDisposed(this);

    const hasMore = this.step();
    return hasMore ? iteratorYield : iteratorDone;
  }

  return(): IteratorResult<void> {
    this.dispose();
    return iteratorDone;
  }

  throw(e?: any): IteratorResult<void> {
    this.dispose;
    if (e !== undefined) {
      throw e;
    }
    return iteratorDone;
  }

  run() {
    throwIfDisposed(this);
    while (this.step()) {}
    this.dispose();
  }
}

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

class VirtualTimeSchedulerResourceImpl extends AbstractVirtualTimeSchedulerResource
  implements VirtualTimeSchedulerResourceLike {
  private _now = 0;
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

  get now(): number {
    return this._now;
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

  protected step(): boolean {
    const task = this.taskQueue.pop();

    if (task !== undefined) {
      const {
        dueTime,
        callback,
        disposable,
      } = task;

      this._now = dueTime;
      this.microTaskTicks = 0;

      if (!disposable.isDisposed) {
        callback();
        disposable.dispose();
      }
    }

    return this.taskQueue.count > 0;
  }
}

export const createVirtualTimeSchedulerResource = (
  maxMicroTaskTicks: number = Number.MAX_SAFE_INTEGER,
): VirtualTimeSchedulerResourceLike =>
  new VirtualTimeSchedulerResourceImpl(maxMicroTaskTicks);
