/* eslint-disable @typescript-eslint/camelcase */
import {
  addDisposable,
  createDisposable,
  dispose,
} from "@reactive-js/core/lib/disposable";
import { pipe, defer } from "@reactive-js/core/lib/functions";
import { none } from "@reactive-js/core/lib/option";
import {
  SchedulerLike,
  SchedulerContinuationLike,
  toSchedulerWithPriority,
  continue$,
} from "@reactive-js/core/lib/scheduler";
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

const priorityScheduler = {
  inContinuation: false,

  get now(): number {
    return unstable_now();
  },

  get shouldYield(): boolean {
    return unstable_shouldYield();
  },

  schedule(
    continuation: SchedulerContinuationLike,
    {
      priority,
      delay = 0,
    }: {
      priority: number;
      delay?: number;
    },
  ) {
    const callback = () => {
      dispose(callbackNodeDisposable);

      priorityScheduler.inContinuation = true;
      continue$(continuation);
      priorityScheduler.inContinuation = false;
    };

    const callbackNode = unstable_scheduleCallback(
      priority,
      callback,
      delay > 0 ? { delay } : none,
    );

    const callbackNodeDisposable = createDisposable(
      defer(callbackNode, unstable_cancelCallback),
    );

    addDisposable(continuation, callbackNodeDisposable);
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
