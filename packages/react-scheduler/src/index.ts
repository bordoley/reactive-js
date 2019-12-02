import {
  unstable_IdlePriority,
  unstable_ImmediatePriority,
  unstable_LowPriority,
  unstable_NormalPriority,
  unstable_now,
  unstable_scheduleCallback,
  unstable_shouldYield,
  unstable_UserBlockingPriority,
} from "scheduler";

import { SchedulerLike } from "@reactive-js/scheduler";

import {
  createSchedulerWithPriority,
} from "@reactive-js/schedulers";

const priorityScheduler = {
  get now(): number {
    return unstable_now();
  },

  get shouldYield(): boolean {
    return unstable_shouldYield();
  },

  schedule(continuation: () => void, priority: number, delay: number = 0): void {
    unstable_scheduleCallback(
      priority,
      continuation,
      delay > 0 ? { delay } : undefined,
    );
  },
}

export const idlePriority: SchedulerLike = createSchedulerWithPriority(
  priorityScheduler,
  unstable_IdlePriority,
);

export const immediatePriority: SchedulerLike =  createSchedulerWithPriority(
  priorityScheduler,
  unstable_ImmediatePriority,
);

export const normalPriority: SchedulerLike =  createSchedulerWithPriority(
  priorityScheduler,
  unstable_NormalPriority,
);

export const lowPriority: SchedulerLike =  createSchedulerWithPriority(
  priorityScheduler,
  unstable_LowPriority,
);

export const userBlockingPriority: SchedulerLike =  createSchedulerWithPriority(
  priorityScheduler,
  unstable_UserBlockingPriority,
);