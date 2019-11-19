import {
  FrameCallbackType,
  unstable_NormalPriority,
  unstable_cancelCallback,
  unstable_now,
  unstable_shouldYield,
  unstable_scheduleCallback,
} from "scheduler";

import { SchedulerContinuation, SchedulerLike } from "@reactive-js/scheduler";

import {
  Disposable,
  SerialDisposable,
  DisposableLike,
  SerialDisposableLike,
} from "@reactive-js/disposables";

class ReactSchedulerImpl implements SchedulerLike {
  private _inScheduledContinuation = false;

  public get inScheduledContinuation(): boolean {
    return this._inScheduledContinuation;
  }

  get now() {
    return unstable_now();
  }

  private scheduleCallback(
    disposable: SerialDisposableLike,
    callback: FrameCallbackType,
    delay: number,
    priority: number,
  ) {
    const callbackNode = unstable_scheduleCallback(
      priority,
      callback,
      delay > 0 ? { delay } : undefined,
    );

    const innerDisposable = Disposable.create();
    innerDisposable.add(() => unstable_cancelCallback(callbackNode));

    disposable.disposable = innerDisposable;
  }

  private createFrameCallback(
    disposable: SerialDisposableLike,
    shouldYield: () => boolean,
    continuation: SchedulerContinuation,
    priority: number,
  ): FrameCallbackType {
    const continuationCallback: FrameCallbackType = () => {
      if (disposable.isDisposed) {
        return;
      }

      this._inScheduledContinuation = true;
      const result = continuation(shouldYield);
      this._inScheduledContinuation = false;

      if (result === undefined) {
        disposable.dispose();
        return;
      }

      const {
        continuation: resultContinuation,
        delay = 0,
        priority: resultPriority = priority,
      } = result;

      const callback =
        resultContinuation === continuation && resultPriority === priority
          ? continuationCallback
          : this.createFrameCallback(
              disposable,
              shouldYield,
              continuation,
              priority,
            );

      if (callback === continuationCallback && delay === 0) {
        return callback;
      }

      this.scheduleCallback(disposable, callback, delay, resultPriority);
    };
    return continuationCallback;
  }

  schedule(
    continuation: SchedulerContinuation,
    delay: number = 0,
    priority: number = unstable_NormalPriority,
  ): DisposableLike {
    const disposable = SerialDisposable.create();

    const shouldYield = () => {
      const isDisposed = disposable.isDisposed;
      return isDisposed || unstable_shouldYield();
    };

    this.scheduleCallback(
      disposable,
      this.createFrameCallback(disposable, shouldYield, continuation, priority),
      delay,
      priority,
    );

    return disposable;
  }
}

export const scheduler: SchedulerLike = new ReactSchedulerImpl();
