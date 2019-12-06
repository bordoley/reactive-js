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

import { SchedulerLike, SchedulerContinuationLike } from "@reactive-js/scheduler";

import {
  createSchedulerWithPriority,
  PrioritySchedulerLike,
} from "@reactive-js/schedulers";
import {
  createDisposable,
  disposed,
  DisposableLike,
  SerialDisposableLike,
  createSerialDisposable,
} from "@reactive-js/disposable";

let inScheduledContinuation = false;
const currentDisposable: DisposableLike | undefined = undefined;

const shouldYield = () =>
  (currentDisposable || disposed).isDisposed || unstable_shouldYield();

const scheduleNative = (
  continuation: () => void,
  priority: number, 
  delay = 0,
): DisposableLike => {
  
  const callbackNode = unstable_scheduleCallback(
    priority,
    continuation,
    delay > 0 ? { delay } : undefined,
  );
  const disposable = createDisposable();
  disposable.add(() => unstable_cancelCallback(callbackNode));
  return disposable;
}

const createCallback = (
  continuation: SchedulerContinuationLike,
  disposable: SerialDisposableLike,
  priority: number,
): (() => void) => {
  const callback = () => {
    if (!disposable.isDisposed) {
      inScheduledContinuation = true;
      const result = continuation(shouldYield);
      inScheduledContinuation = false;


      if (result !== undefined) {
        const [nextContinuation, delay = 0] = result;
        const nextCallback = 
          nextContinuation === continuation
            ? callback
            : createCallback(nextContinuation, disposable, priority);

        disposable.disposable = scheduleNative(nextCallback, delay);
      } else {
        disposable.dispose();
      }
    }
  };

  return callback;
}

const priorityScheduler: PrioritySchedulerLike = {
  get inScheduledContinuation(): boolean {
    return inScheduledContinuation;
  },

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

  disposable.disposable = scheduleNative(callback, delay);
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
