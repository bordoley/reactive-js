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

import {
  connect,
  ObservableLike,
  SchedulerContinuation,
  SchedulerLike,
} from "@rx-min/rx-core";
import {
  Disposable,
  SerialDisposable,
  DisposableLike,
  SerialDisposableLike,
} from "@rx-min/rx-disposables";

class RxReactScheduler implements SchedulerLike {
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
    delay: number | void,
  ) {
    const callbackNode = unstable_scheduleCallback(
      this.priorityLevel,
      callback,
      delay !== undefined ? { delay } : undefined,
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

  schedule(
    continuation: SchedulerContinuation,
    delay: number | void,
  ): DisposableLike {
    const disposable = SerialDisposable.create();

    const shouldYield = () => {
      const isDisposed = disposable.isDisposed;
      return isDisposed || unstable_shouldYield();
    };

    this.scheduleCallback(
      disposable,
      this.createFrameCallback(disposable, shouldYield, continuation),
      delay,
    );

    return disposable;
  }
}

export const immediatePriority: SchedulerLike = new RxReactScheduler(
  unstable_ImmediatePriority,
);
export const userBlockingPriority: SchedulerLike = new RxReactScheduler(
  unstable_UserBlockingPriority,
);
export const normalPriority: SchedulerLike = new RxReactScheduler(
  unstable_NormalPriority,
);
export const idlePriority: SchedulerLike = new RxReactScheduler(
  unstable_IdlePriority,
);
export const lowPriority: SchedulerLike = new RxReactScheduler(
  unstable_LowPriority,
);

export const connectImmediatePriority = <T>(observable: ObservableLike<T>) =>
  connect(observable, immediatePriority);
export const connectUserBlockingPriority = <T>(observable: ObservableLike<T>) =>
  connect(observable, userBlockingPriority);
export const connectNormalPriority = <T>(observable: ObservableLike<T>) =>
  connect(observable, normalPriority);
export const connectIdlePriority = <T>(observable: ObservableLike<T>) =>
  connect(observable, idlePriority);
export const connectLowPriority = <T>(observable: ObservableLike<T>) =>
  connect(observable, lowPriority);
