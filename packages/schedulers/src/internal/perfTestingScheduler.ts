import {
  createDisposable,
  disposed,
  DisposableLike,
  DisposableOrTeardown,
  throwIfDisposed,
} from "@reactive-js/disposable";
import { SchedulerContinuationLike } from "@reactive-js/scheduler";
import { VirtualTimeSchedulerResourceLike } from "./virtualTimeScheduler";

const shouldYield = () => false;

class PerfTestingSchedulerImpl implements VirtualTimeSchedulerResourceLike {
  readonly inScheduledContinuation = true;
  readonly now = 0;
  private readonly disposable: DisposableLike = createDisposable();
  private readonly queue: SchedulerContinuationLike[] = [];
  constructor() {
    this.disposable.add(() => {
      this.queue.length = 0;
    });
  }

  get isDisposed() {
    return this.disposable.isDisposed;
  }

  add(
    disposable: DisposableOrTeardown,
    ...disposables: DisposableOrTeardown[]
  ) {
    this.disposable.add(disposable, ...disposables);
  }

  dispose() {
    this.disposable.dispose();
  }

  remove(
    disposable: DisposableOrTeardown,
    ...disposables: DisposableOrTeardown[]
  ) {
    this.disposable.remove(disposable, ...disposables);
  }

  run() {
    throwIfDisposed(this.disposable);

    for (
      let next = this.queue.shift();
      next !== undefined;
      next = this.queue.shift()
    ) {
      const result = next(shouldYield) || undefined;

      if (result !== undefined) {
        const { continuation: nextContinuation } = result;
        this.queue.push(nextContinuation);
      }
    }

    this.disposable.dispose();
  }

  schedule(
    continuation: SchedulerContinuationLike,
    _?: number,
  ): DisposableLike {
    this.queue.push(continuation);
    return disposed;
  }
}

export const createPerfTestingScheduler = (): VirtualTimeSchedulerResourceLike =>
  new PerfTestingSchedulerImpl();
