import {
  createSerialDisposable,
  DisposableLike,
  SerialDisposableLike,
} from "@reactive-js/disposable";
import {
  SchedulerContinuationLike,
  SchedulerLike,
} from "@reactive-js/scheduler";

export interface SchedulerHost extends SchedulerLike {
  readonly shouldYield: (() => boolean) | undefined;

  scheduleCallback(callback: () => void, delay?: number): DisposableLike;
}

function createCallback(
  this: SchedulerHost,
  continuation: SchedulerContinuationLike,
  disposable: SerialDisposableLike,
): () => void {
  const callback = () => {
    if (!disposable.isDisposed) {
      const result = continuation.run(this.shouldYield) || undefined;

      if (result !== undefined) {
        const { delay = 0 } = result;
        const nextCallback =
          result === continuation
            ? callback
            : createCallback.call(this, result, disposable);

        disposable.inner = this.scheduleCallback(nextCallback, delay);
      } else {
        disposable.dispose();
      }
    }
  };
  return callback;
}

export const schedulerMixin = {
  schedule(
    this: SchedulerHost,
    continuation: SchedulerContinuationLike,
  ): DisposableLike {
    const disposable = createSerialDisposable();
    const callback = createCallback.call(this, continuation, disposable);
    disposable.inner = this.scheduleCallback(callback, continuation.delay);
    return disposable;
  },
};
