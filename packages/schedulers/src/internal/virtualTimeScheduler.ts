import {
  createDisposable,
  DisposableLike,
  throwIfDisposed,
} from "@reactive-js/disposable";
import {
  SchedulerResourceLike,
  SchedulerContinuationLike,
  SchedulerContinuationResultLike,
} from "@reactive-js/scheduler";
import { createPriorityQueue, PriorityQueueLike } from "./priorityQueue";
import { AbstractSchedulerResource } from "./abstractScheduler";

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

/** @ignore */
export abstract class AbstractVirtualTimeSchedulerResource extends AbstractSchedulerResource {
  private readonly continuationResult = { continuation: this };
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

  loop(shouldYield: () => boolean): SchedulerContinuationResultLike | void {
    while (this.step()) {
      if (shouldYield()) {
        return this.continuationResult;
      }
    }
    return;
  }

  loopFast() {
    // eslint-disable-next-line no-empty
    while (this.step()) {}
  }

  run(shouldYield?: () => boolean): SchedulerContinuationResultLike | void {
    throwIfDisposed(this);

    let result;
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

class VirtualTimeSchedulerResourceImpl
  extends AbstractVirtualTimeSchedulerResource
  implements VirtualTimeSchedulerResourceLike {
  now = 0;
  private microTaskTicks = 0;
  private taskIDCount = 0;
  private readonly taskQueue: PriorityQueueLike<
    VirtualTask
  > = createPriorityQueue(comparator);

  constructor(private readonly maxMicroTaskTicks: number) {
    super();
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
    return disposable;
  }

  protected step(): boolean {
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
}

export const createVirtualTimeSchedulerResource = (
  maxMicroTaskTicks: number = Number.MAX_SAFE_INTEGER,
): VirtualTimeSchedulerResourceLike =>
  new VirtualTimeSchedulerResourceImpl(maxMicroTaskTicks);
