import {
  create as createDisposable,
  DisposableLike,
  DisposableOrTeardown,
  throwIfDisposed,
} from "@reactive-js/disposable";

import {
  SchedulerContinuation,
  SchedulerResourceLike,
} from "@reactive-js/scheduler";

/** @noInheritDoc */
export interface PerfTestingSchedulerLike extends SchedulerResourceLike {
  run(): void;
}

class PerfTestingSchedulerImpl implements PerfTestingSchedulerLike {
  get isDisposed() {
    return this.disposable.isDisposed;
  }
  readonly inScheduledContinuation = true;
  readonly now = 0;
  private readonly disposable: DisposableLike;
  private readonly queue: SchedulerContinuation[] = [];

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
    continuation: SchedulerContinuation,
    delay?: number,
  ): DisposableLike {
    this.queue.push(continuation);
    return createDisposable();
  }

  static shouldYield = () => false;
}

export const create = (): PerfTestingSchedulerLike =>
  new PerfTestingSchedulerImpl();
