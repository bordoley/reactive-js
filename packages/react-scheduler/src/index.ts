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
import {
  createSchedulerWithPriority,
  PrioritySchedulerLike,
} from "@reactive-js/schedulers";
import { createDisposable, DisposableLike } from "@reactive-js/disposable";

const shouldYield = unstable_shouldYield;

const scheduleCallback = (
  callback: () => void,
  priority: number,
  delay: number,
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
  priority: number,
): (() => void) => {
  const callback = () => {
    continuation.run(shouldYield);

    if (!continuation.isDisposed) {
      const disposable = scheduleCallback(
        callback,
        priority,
        continuation.delay,
      );
      continuation.add(disposable);
    }
  };

  return callback;
};

const priorityScheduler: PrioritySchedulerLike = {
  get now(): number {
    return unstable_now();
  },

  schedule(
    continuation: SchedulerContinuationLike,
    priority = unstable_NormalPriority,
  ): void {
    const callback = createCallback(continuation, priority);
    const disposable = scheduleCallback(callback, priority, continuation.delay);
    continuation.add(disposable);
  },
};

/** Scheduler that schedules work on React's internal priority scheduler with idle priority. */
export const idlePriority: SchedulerLike = createSchedulerWithPriority(
  priorityScheduler,
  unstable_IdlePriority,
);

/** Scheduler that schedules work on React's internal priority scheduler with immediate priority. */
export const immediatePriority: SchedulerLike = createSchedulerWithPriority(
  priorityScheduler,
  unstable_ImmediatePriority,
);

/** Scheduler that schedules work on React's internal priority scheduler with normal priority. */
export const normalPriority: SchedulerLike = priorityScheduler;

/** Scheduler that schedules work on React's internal priority scheduler with low priority. */
export const lowPriority: SchedulerLike = createSchedulerWithPriority(
  priorityScheduler,
  unstable_LowPriority,
);

/** Scheduler that schedules work on React's internal priority scheduler with user blocking priority. */
export const userBlockingPriority: SchedulerLike = createSchedulerWithPriority(
  priorityScheduler,
  unstable_UserBlockingPriority,
);
