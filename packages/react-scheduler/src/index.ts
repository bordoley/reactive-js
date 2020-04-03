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
  toSchedulerWithPriority,
  PrioritySchedulerLike,
} from "@reactive-js/scheduler";
import { createDisposable, DisposableLike } from "@reactive-js/disposable";
import { pipe } from "@reactive-js/pipe";

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

  schedule(continuation: SchedulerContinuationLike, priority): void {
    const callback = createCallback(continuation, priority);
    const disposable = scheduleCallback(callback, priority, continuation.delay);
    continuation.add(disposable);
  },
};

/** Scheduler that schedules work on React's internal priority scheduler with idle priority. */
export const idlePriority: SchedulerLike = pipe(
  priorityScheduler,
  toSchedulerWithPriority(unstable_IdlePriority),
);

/** Scheduler that schedules work on React's internal priority scheduler with immediate priority. */
export const immediatePriority: SchedulerLike = pipe(
  priorityScheduler,
  toSchedulerWithPriority(unstable_ImmediatePriority),
);

/** Scheduler that schedules work on React's internal priority scheduler with normal priority. */
export const normalPriority: SchedulerLike = pipe(
  priorityScheduler,
  toSchedulerWithPriority(unstable_NormalPriority),
);

/** Scheduler that schedules work on React's internal priority scheduler with low priority. */
export const lowPriority: SchedulerLike = pipe(
  priorityScheduler,
  toSchedulerWithPriority(unstable_LowPriority),
);

/** Scheduler that schedules work on React's internal priority scheduler with user blocking priority. */
export const userBlockingPriority: SchedulerLike = pipe(
  priorityScheduler,
  toSchedulerWithPriority(unstable_UserBlockingPriority),
);
