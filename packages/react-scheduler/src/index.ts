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

import { SchedulerLike } from "@reactive-js/scheduler";

import {
  createSchedulerWithPriority,
  PrioritySchedulerLike,
} from "@reactive-js/schedulers";
import {
  createDisposable,
  disposed,
  DisposableLike,
} from "@reactive-js/disposable";

let inScheduledContinuation = false;
const currentDisposable: DisposableLike | undefined = undefined;

const shouldYield = () =>
  (currentDisposable || disposed).isDisposed || unstable_shouldYield();

const priorityScheduler: PrioritySchedulerLike = {
  get inScheduledContinuation(): boolean {
    return inScheduledContinuation;
  },

  get now(): number {
    return unstable_now();
  },

  schedule(
    continuation: (shouldYield: () => boolean) => void,
    priority: number,
    delay = 0,
  ): DisposableLike {
    const disposable = createDisposable();

    const callback = () => {
      if (!disposable.isDisposed) {
        inScheduledContinuation = true;
        continuation(shouldYield);
        inScheduledContinuation = false;
        disposable.dispose();
      }
    };

    const callbackNode = unstable_scheduleCallback(
      priority,
      callback,
      delay > 0 ? { delay } : undefined,
    );

    disposable.add(() => unstable_cancelCallback(callbackNode));
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
