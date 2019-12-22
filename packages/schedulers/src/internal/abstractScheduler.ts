import {
  createDisposable,
  createSerialDisposable,
  disposed,
  DisposableLike,
  DisposableOrTeardown,
  SerialDisposableLike,
} from "@reactive-js/disposable";
import {
  SchedulerLike,
  SchedulerContinuationLike,
  SchedulerResourceLike,
} from "@reactive-js/scheduler";

/** @noInheritDoc */
export abstract class AbstractScheduler implements SchedulerLike {
  private currentDisposable: DisposableLike = disposed;
  private startTime = 0;
  private shouldYield = () =>
    this.currentDisposable.isDisposed ||
    this.shouldCallbackYield(this.startTime);

  protected abstract shouldCallbackYield(startTime: number): boolean;

  protected abstract scheduleCallback(
    callback: () => void,
    delay?: number,
  ): DisposableLike;

  abstract readonly now: number;

  private createCallback(
    continuation: SchedulerContinuationLike,
    disposable: SerialDisposableLike,
  ): () => void {
    const callback = () => {
      if (!disposable.isDisposed) {
        this.startTime = this.now;
        this.currentDisposable = disposable;
        const result = continuation(this.shouldYield) || undefined;
        this.currentDisposable = disposed;

        if (result !== undefined) {
          const { continuation: nextContinuation, delay = 0 } = result;
          const nextCallback =
            nextContinuation === continuation
              ? callback
              : this.createCallback(nextContinuation, disposable);

          disposable.disposable = this.scheduleCallback(nextCallback, delay);
        } else {
          disposable.dispose();
        }
      }
    };
    return callback;
  }

  /** @ignore */
  schedule(continuation: SchedulerContinuationLike, delay = 0): DisposableLike {
    const disposable = createSerialDisposable();
    const callback = this.createCallback(continuation, disposable);
    disposable.disposable = this.scheduleCallback(callback, delay);
    return disposable;
  }
}

export abstract class AbstractSchedulerResource extends AbstractScheduler
  implements SchedulerResourceLike {
  private readonly disposable = createDisposable();

  /** @ignore */
  get isDisposed() {
    return this.disposable.isDisposed;
  }

  /** @ignore */
  add(
    disposable: DisposableOrTeardown,
    ...disposables: DisposableOrTeardown[]
  ) {
    this.disposable.add(disposable, ...disposables);
    return this;
  }

  /** @ignore */
  dispose() {
    this.disposable.dispose();
  }

  /** @ignore */
  remove(
    disposable: DisposableOrTeardown,
    ...disposables: DisposableOrTeardown[]
  ) {
    this.disposable.remove(disposable, ...disposables);
    return this;
  }
}
