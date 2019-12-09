import { AbstractSchedulerResource } from "./abstractScheduler";
import { VirtualTimeSchedulerResourceLike } from "./virtualTimeScheduler";
import {
  DisposableLike,
  throwIfDisposed,
  createDisposable,
} from "@reactive-js/disposable";

// Intentionally defined as a module function for perf reasons.
const shouldYield = () => false;

// @ts-ignore override shouldYield for perf
class SynchronousSchedulerResource extends AbstractSchedulerResource
  implements VirtualTimeSchedulerResourceLike {
  readonly now = 0;

  private readonly queue: (() => void)[] = [];

  // @ts-ignore override shouldYield for perf
  private shouldYield = shouldYield;

  protected shouldCallbackYield(_: number): boolean {
    return false;
  }

  protected scheduleCallback(callback: () => void, _ = 0): DisposableLike {
    this.queue.push(callback);
    return createDisposable();
  }

  run() {
    throwIfDisposed(this);

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
