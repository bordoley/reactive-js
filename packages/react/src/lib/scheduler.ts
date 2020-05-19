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
  YieldError,
  runContinuation,
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

const getScheduler = (priority: number) => {
  switch (priority) {
    case unstable_IdlePriority:
      return idlePriority;
    case unstable_ImmediatePriority:
      return immediatePriority;
    case unstable_NormalPriority:
      return normalPriority;
    case unstable_LowPriority:
      return lowPriority;
    case unstable_UserBlockingPriority:
      return userBlockingPriority;
    default:
      throw new Error();
  }
};

const priorityScheduler = {
  inContinuation: false,

  get now(): number {
    return unstable_now();
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
    const scheduler = getScheduler(priority);

    const callback = () => {
      dispose(callbackNodeDisposable);

      priorityScheduler.inContinuation = true;
      runContinuation(scheduler, continuation);
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

  yield({ delay } = { delay: 0 }) {
    if (delay > 0 || unstable_shouldYield()) {
      throw new YieldError(delay);
    }
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
