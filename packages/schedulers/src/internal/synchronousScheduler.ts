import {
  AbstractVirtualTimeSchedulerResource,
  VirtualTimeSchedulerResourceLike,
} from "./virtualTimeScheduler";
import {
  DisposableLike,
  throwIfDisposed,
  createDisposable,
} from "@reactive-js/disposable";

// Intentionally defined as a module function for perf reasons.
const shouldYieldFalse = () => false;
const shouldYieldTrue = () => true;

const iteratorYield = {
  done: false,
  value: undefined,
};

const iteratorDone = {
  done: true,
  value: undefined,
};

// @ts-ignore override shouldYield for perf
class SynchronousSchedulerResource extends AbstractVirtualTimeSchedulerResource
  implements VirtualTimeSchedulerResourceLike {
  readonly now = 0;

  private readonly queue: (() => void)[] = [];

  // @ts-ignore override shouldYield for perf
  private shouldYield = shouldYieldFalse;

  protected shouldCallbackYield(_: number): boolean {
    return false;
  }

  protected scheduleCallback(callback: () => void, _ = 0): DisposableLike {
    this.queue.push(callback);
    return createDisposable();
  }

  next(): IteratorResult<void> {
    throwIfDisposed(this);

    this.shouldYield = shouldYieldTrue;
    if (this.queue.length > 0) {
      const next = this.queue.shift() as () => void;
      next();
    }

    return this.queue.length > 0 ? iteratorYield : iteratorDone;
  }

  run() {
    throwIfDisposed(this);
    this.shouldYield = shouldYieldFalse;

    for (
      let next = this.queue.shift();
      next !== undefined;
      next = this.queue.shift()
    ) {
      next();
    }

    this.dispose();
  }
}

export const createSynchronousSchedulerResource = (): VirtualTimeSchedulerResourceLike =>
  new SynchronousSchedulerResource();
