import {
  AbstractVirtualTimeSchedulerResource,
  VirtualTimeSchedulerResourceLike,
} from "./virtualTimeScheduler";
import {
  DisposableLike,
  createDisposable,
} from "@reactive-js/disposable";

// Intentionally defined as a module function for perf reasons.
const shouldYieldFalse = () => false;
const shouldYieldTrue = () => true;

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

  protected step(): boolean {
    const next = this.queue.shift();
    if (next !== undefined) {
      next();
    }
    return this.queue.length > 0;
  }

  next(): IteratorResult<void> {
    this.shouldYield = shouldYieldTrue;
    return super.next();
  }

  run() {
    this.shouldYield = shouldYieldFalse;
    super.run();
  }
}

export const createSynchronousSchedulerResource = (): VirtualTimeSchedulerResourceLike =>
  new SynchronousSchedulerResource();
