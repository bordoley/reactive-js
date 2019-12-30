import {
  createDisposable,
  createSerialDisposable,
  DisposableLike,
  disposableMixin,
  SerialDisposableLike,
} from "@reactive-js/disposable";
import {
  SchedulerLike,
  SchedulerContinuationLike,
  SchedulerResourceLike,
} from "@reactive-js/scheduler";

/** @noInheritDoc */
export abstract class AbstractScheduler implements SchedulerLike {
  protected abstract get shouldYield(): (() => boolean) | undefined;

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
        const result = continuation.run(this.shouldYield) || undefined;

        if (result !== undefined) {
          const { continuation: nextContinuation, delay = 0 } = result;
          const nextCallback =
            nextContinuation === continuation
              ? callback
              : this.createCallback(nextContinuation, disposable);

          disposable.inner = this.scheduleCallback(nextCallback, delay);
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
    disposable.inner = this.scheduleCallback(callback, delay);
    return disposable;
  }
}

export abstract class AbstractSchedulerResource extends AbstractScheduler
  implements SchedulerResourceLike {
  readonly disposable = createDisposable();

  /** @ignore */
  get isDisposed() {
    return this.disposable.isDisposed;
  }

  /** @ignore */
  add = disposableMixin.add;

  /** @ignore */
  dispose = disposableMixin.dispose;

  /** @ignore */
  remove = disposableMixin.remove;
}
