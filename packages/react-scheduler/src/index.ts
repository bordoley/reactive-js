/* eslint-disable @typescript-eslint/camelcase */
import {
  unstable_IdlePriority,
  unstable_ImmediatePriority,
  unstable_LowPriority,
  unstable_NormalPriority,
  unstable_cancelCallback,
  unstable_now,
  unstable_scheduleCallback,
  unstable_shouldYield,
  unstable_UserBlockingPriority,
} from "scheduler";
import {
  SchedulerLike,
  SchedulerContinuationLike,
} from "@reactive-js/scheduler";
import { createSchedulerWithPriority } from "@reactive-js/schedulers";
import {
  createDisposable,
  DisposableLike,
  SerialDisposableLike,
  createSerialDisposable,
} from "@reactive-js/disposable";

const shouldYield = unstable_shouldYield;

const scheduleCallback = (
  callback: () => void,
  priority: number,
  delay = 0,
): DisposableLike => {
  const disposable = createDisposable(() =>
    unstable_cancelCallback(callbackNode),
  );

  const scheduledCallback = () => {
    if (!disposable.isDisposed) {
      callback();
      disposable.dispose();
    }
  };

  const callbackNode = unstable_scheduleCallback(
    priority,
    scheduledCallback,
    delay > 0 ? { delay } : undefined,
  );

  return disposable;
};

const createCallback = (
  continuation: SchedulerContinuationLike,
  disposable: SerialDisposableLike,
  priority: number,
): (() => void) => {
  const callback = () => {
    if (!disposable.isDisposed) {
      const result = continuation.run(shouldYield) || undefined;

      if (result !== undefined) {
        const { continuation: nextContinuation, delay = 0 } = result;
        const nextCallback =
          nextContinuation === continuation
            ? callback
            : createCallback(nextContinuation, disposable, priority);

        disposable.disposable = scheduleCallback(nextCallback, priority, delay);
      } else {
        disposable.dispose();
      }
    }
  };

  return callback;
};

const priorityScheduler = {
  get now(): number {
    return unstable_now();
  },

  schedule(
    continuation: SchedulerContinuationLike,
    priority: number,
    delay = 0,
  ): DisposableLike {
    const disposable = createSerialDisposable();
    const callback = createCallback(continuation, disposable, priority);

    disposable.disposable = scheduleCallback(callback, priority, delay);
    return disposable;
  },
};

export const idlePriority: SchedulerLike = createSchedulerWithPriority(
  priorityScheduler,
  unstable_IdlePriority,
);

export const immediatePriority: SchedulerLike = createSchedulerWithPriority(
  priorityScheduler,
  unstable_ImmediatePriority,
);

export const normalPriority: SchedulerLike = createSchedulerWithPriority(
  priorityScheduler,
  unstable_NormalPriority,
);

export const lowPriority: SchedulerLike = createSchedulerWithPriority(
  priorityScheduler,
  unstable_LowPriority,
);

export const userBlockingPriority: SchedulerLike = createSchedulerWithPriority(
  priorityScheduler,
  unstable_UserBlockingPriority,
);
