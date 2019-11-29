import {
  FrameCallbackType,
  unstable_cancelCallback,
  unstable_IdlePriority,
  unstable_ImmediatePriority,
  unstable_LowPriority,
  unstable_NormalPriority,
  unstable_now,
  unstable_scheduleCallback,
  unstable_shouldYield,
  unstable_UserBlockingPriority,
} from "scheduler";

import { SchedulerContinuation, SchedulerLike } from "@reactive-js/scheduler";

import {
  createDisposable,
  createSerialDisposable,
  DisposableLike,
  SerialDisposableLike,
} from "@reactive-js/disposable";

class ReactSchedulerImpl implements SchedulerLike {
  public get inScheduledContinuation(): boolean {
    return this._inScheduledContinuation;
  }

  get now() {
    return unstable_now();
  }

  private _inScheduledContinuation = false;
  private readonly priority: number;

  constructor(priority: number) {
    this.priority = priority;
  }

  schedule(
    continuation: SchedulerContinuation,
    delay: number = 0,
  ): DisposableLike {
    const disposable = createSerialDisposable();
    const shouldYield = () => {
      const isDisposed = disposable.isDisposed;
      return isDisposed || unstable_shouldYield();
    };

    this.scheduleCallback(
      disposable,
      this.createFrameCallback(
        disposable,
        shouldYield,
        continuation,
        this.priority,
      ),
      delay,
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

      const { continuation: resultContinuation, delay = 0 } = result;

      const callback =
        resultContinuation === continuation
          ? continuationCallback
          : this.createFrameCallback(
              disposable,
              shouldYield,
              continuation,
              priority,
            );

      // FIXME: React's scheduler doesn't seem to deal well with abusive sources
      // that aggressive continue via a returned called, so just explicitly reschedule
      // work for now.
      // if (callback === continuationCallback && delay === 0) {
      //  return callback;
      // }

      this.scheduleCallback(disposable, callback, delay);
      return;
    };
    return continuationCallback;
  }

  private scheduleCallback(
    disposable: SerialDisposableLike,
    callback: FrameCallbackType,
    delay: number,
  ) {
    const callbackNode = unstable_scheduleCallback(
      this.priority,
      callback,
      delay > 0 ? { delay } : undefined,
    );

    const innerDisposable = createDisposable();
    innerDisposable.add(() => unstable_cancelCallback(callbackNode));

    disposable.disposable = innerDisposable;
  }
}

export const idlePriority: SchedulerLike = new ReactSchedulerImpl(
  unstable_IdlePriority,
);
export const immediatePriority: SchedulerLike = new ReactSchedulerImpl(
  unstable_ImmediatePriority,
);
export const normalPriority: SchedulerLike = new ReactSchedulerImpl(
  unstable_NormalPriority,
);
export const lowPriority: SchedulerLike = new ReactSchedulerImpl(
  unstable_LowPriority,
);
export const userBlockingPriority: SchedulerLike = new ReactSchedulerImpl(
  unstable_UserBlockingPriority,
);
