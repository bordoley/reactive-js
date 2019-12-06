import {
  createDisposable,
  DisposableLike,
  DisposableOrTeardown,
  throwIfDisposed,
} from "@reactive-js/disposable";
import { SchedulerContinuationLike } from "@reactive-js/scheduler";
import { VirtualTimeSchedulerResourceLike } from "./virtualTimeScheduler";

class PerfTestingSchedulerImpl implements VirtualTimeSchedulerResourceLike {
  get isDisposed() {
    return this.disposable.isDisposed;
  }
  readonly inScheduledContinuation = true;
  readonly now = 0;
  private readonly disposable: DisposableLike;
  private readonly queue: SchedulerContinuationLike[] = [];

  constructor() {
    this.disposable = createDisposable();
    this.disposable.add(() => {
      this.queue.length = 0;
    });
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
      next(PerfTestingSchedulerImpl.shouldYield);
    }

    this.disposable.dispose();
  }

  schedule(
    continuation: SchedulerContinuationLike,
    _?: number,
  ): DisposableLike {
    this.queue.push(continuation);
    const disposable = createDisposable();
    this.add(disposable);
    disposable.add(() => this.remove(disposable));
    return disposable;
  }

  static shouldYield = () => false;
}

export const createPerfTestingScheduler = (): VirtualTimeSchedulerResourceLike =>
  new PerfTestingSchedulerImpl();
