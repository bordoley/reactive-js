import { createDisposable, disposed, DisposableLike } from "@reactive-js/disposable";
import {
  SchedulerContinuationLike,
  SchedulerLike,
} from "@reactive-js/scheduler";
import {
  createPrioritySchedulerResource,
  createSchedulerWithPriority as createSchedulerWithPriorityImpl,
  PrioritySchedulerResourceLike,
} from "@reactive-js/schedulers";

let timeout = 500;
let startTime = 0;
let inScheduledContinuation = false;
let currentDisposable: DisposableLike | undefined = undefined;

const now = (): number => {
  const hr = process.hrtime();
  return hr[0] * 1000 + hr[1] / 1e6;
};

const shouldYield = (): boolean => {
  const currentDisposableIsDisposed =
    (currentDisposable || disposed).isDisposed;
  const timeoutExpired = now() > startTime + timeout;

  return currentDisposableIsDisposed || timeoutExpired;
};

const schedule = (
  continuation: SchedulerContinuationLike,
  delay = 0,
): DisposableLike => {
  const disposable = createDisposable();

  const scheduledContinuation = () => {
    if (!disposable.isDisposed) {
      startTime = now();
      currentDisposable = disposable;
      inScheduledContinuation = true;
      continuation(shouldYield);
      inScheduledContinuation = false;
      currentDisposable = undefined;
      disposable.dispose();
    }
  };

  if (delay > 0) {
    const timeout = setTimeout(scheduledContinuation, delay);
    disposable.add(() => clearTimeout(timeout));
  } else {
    const immediate = setImmediate(scheduledContinuation);
    disposable.add(() => {
      clearImmediate(immediate);
    });
  }
  return disposable;
};

const schedulerHost: SchedulerLike = {
  get inScheduledContinuation(): boolean {
    return inScheduledContinuation;
  },

  get now(): number {
    return now();
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
