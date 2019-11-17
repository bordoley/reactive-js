import {
  FrameCallbackType,
  unstable_ImmediatePriority,
  unstable_UserBlockingPriority,
  unstable_NormalPriority,
  unstable_IdlePriority,
  unstable_LowPriority,
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

    const innerDisposable = Disposable.create(() =>
      unstable_cancelCallback(callbackNode),
    );
    disposable.innerDisposable = innerDisposable;
  }

  private createFrameCallback(
    disposable: SerialDisposableLike,
    shouldYield: () => boolean,
    continuation: SchedulerContinuation,
    priority: number
  ): FrameCallbackType {
    const continuationCallback: FrameCallbackType = () => {
      if (!disposable.isDisposed) {
        const result = continuation(shouldYield);
        if (result !== undefined) {
          const [resultContinuation, delay, resultPriority] = result;

          const newPriority = resultPriority || priority;

          const callback =
            resultContinuation === continuation && newPriority === priority 
              ? continuationCallback
              : this.createFrameCallback(disposable, shouldYield, continuation, priority);
          
          if (callback === continuationCallback && delay === 0) {
            return callback;
          } else {
            this.scheduleCallback(disposable, callback, delay, newPriority);
          }
        }
      }
    };
    return continuationCallback;
  }

  schedule(
    continuation: SchedulerContinuation,
    delay: number = 0,
    priority: number = 3,
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