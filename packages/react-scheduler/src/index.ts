import {
  FrameCallbackType,
  unstable_cancelCallback,
  unstable_NormalPriority,
  unstable_now,
  unstable_scheduleCallback,
  unstable_shouldYield,
} from "scheduler";

import { SchedulerContinuation, SchedulerLike } from "@reactive-js/scheduler";

import {
  create as createDisposable,
  DisposableLike,
} from "@reactive-js/disposable";

import {
  create as createSerialDisposable,
  SerialDisposableLike,
} from "@reactive-js/serial-disposable";

class ReactSchedulerImpl implements SchedulerLike {
  public get inScheduledContinuation(): boolean {
    return this._inScheduledContinuation;
  }

  get now() {
    return unstable_now();
  }
  private _inScheduledContinuation = false;

  schedule(
    continuation: SchedulerContinuation,
    delay: number = 0,
    priority: number = unstable_NormalPriority,
  ): DisposableLike {
    const disposable = createSerialDisposable();

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
      return;
    };
    return continuationCallback;
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

    const innerDisposable = createDisposable();
    innerDisposable.add(() => unstable_cancelCallback(callbackNode));

    disposable.disposable = innerDisposable;
  }
}

export const scheduler: SchedulerLike = new ReactSchedulerImpl();
