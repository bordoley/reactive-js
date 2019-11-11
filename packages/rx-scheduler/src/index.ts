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
  unstable_scheduleCallback
} from "scheduler";

import { SchedulerContinuation, SchedulerLike } from "@rx-min/rx-core";
import {
  Disposable,
  SerialDisposable,
  DisposableLike,
  SerialDisposableLike
} from "@rx-min/rx-disposables";

class RxScheduler implements SchedulerLike {
  private readonly priorityLevel: number;

  constructor(priorityLevel: number) {
    this.priorityLevel = priorityLevel;
  }

  get now() {
    return unstable_now();
  }

  private scheduleCallback(
    disposable: SerialDisposableLike,
    callback: FrameCallbackType,
    delay: number | void
  ) {
    const callbackNode = unstable_scheduleCallback(
      this.priorityLevel,
      callback,
      delay !== undefined ? { delay } : undefined
    );

    const innerDisposable = Disposable.create(() =>
      unstable_cancelCallback(callbackNode)
    );
    disposable.setInnerDisposable(innerDisposable);
  }

  private createFrameCallback(
    disposable: SerialDisposableLike,
    shouldYield: () => boolean,
    continuation: SchedulerContinuation
  ): FrameCallbackType {
    const continuationCallback: FrameCallbackType = () => {
      if (!disposable.isDisposed) {
        const result = continuation(shouldYield);
        if (result === continuation) {
          return continuationCallback;
        } else if (result instanceof Function) {
          return this.createFrameCallback(disposable, shouldYield, result);
        } else if (result !== undefined) {
          const [resultContinuation, delay] = result;
          const callback =
            resultContinuation === continuation
              ? continuationCallback
              : this.createFrameCallback(disposable, shouldYield, continuation);
          this.scheduleCallback(disposable, callback, delay);
        }
      }
    };
    return continuationCallback;
  }

  public schedule(
    continuation: SchedulerContinuation,
    delay: number | void
  ): DisposableLike {
    const disposable = SerialDisposable.create();

    const shouldYield = () => {
      const isDisposed = disposable.isDisposed;
      return isDisposed || unstable_shouldYield();
    };

    this.scheduleCallback(
      disposable,
      this.createFrameCallback(disposable, shouldYield, continuation),
      delay
    );

    return disposable;
  }
}
export const ImmediatePriority = new RxScheduler(unstable_ImmediatePriority);
export const UserBlockingPriority = new RxScheduler(
  unstable_UserBlockingPriority
);
export const NormalPriority = new RxScheduler(unstable_NormalPriority);
export const IdlePriority = new RxScheduler(unstable_IdlePriority);
export const LowPriority = new RxScheduler(unstable_LowPriority);
