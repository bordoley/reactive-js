import { createDisposable, DisposableLike } from "@reactive-js/disposable";
import { SchedulerLike } from "@reactive-js/scheduler";
import {
  createPrioritySchedulerResource,
  createSchedulerWithPriority as createSchedulerWithPriorityImpl,
  HostSchedulerContinuationLike,
  HostSchedulerLike,
  PrioritySchedulerResourceLike,
} from "@reactive-js/schedulers";

let timeout = 500;
let startTime = 0;

const now = (): number => {
  const hr = process.hrtime();
  return hr[0] * 1000 + hr[1] / 1e6;
};

const shouldYield = (): boolean => now() > startTime + timeout;

const schedule = (
  continuation: HostSchedulerContinuationLike,
  delay = 0,
): DisposableLike => {
  const scheduledContinuation = async () => {
    startTime = now();

    let result: HostSchedulerContinuationLike | undefined = continuation;
    while (result !== undefined) {
      result = result();

      // Not sure this is really necessary, but let's yield back
      // to the JS microtask queue between continuation executions
      // to avoid hogging too much cpu.
      await Promise.resolve();
    }
  };

  const disposable = createDisposable();
  if (delay > 0) {
    const timeout = setTimeout(scheduledContinuation, delay);
    disposable.add(() => clearTimeout(timeout));
  } else {
    const immediate = setImmediate(scheduledContinuation);
    disposable.add(() => clearImmediate(immediate));
  }
  return disposable;
};

const schedulerHost: HostSchedulerLike = {
  get now(): number {
    return now();
  },
  get shouldYield(): boolean {
    return shouldYield();
  },
  schedule,
};

let priorityScheduler: PrioritySchedulerResourceLike | undefined = undefined;

export const setSchedulerTimeout = (newTimeout: number) => {
  timeout = newTimeout;
};

export const createSchedulerWithPriority = (
  priority: number,
): SchedulerLike => {
  priorityScheduler =
    priorityScheduler || createPrioritySchedulerResource(schedulerHost);
  return createSchedulerWithPriorityImpl(priorityScheduler, priority);
};
