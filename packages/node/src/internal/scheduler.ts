import { createDisposable, disposed, DisposableLike, SerialDisposableLike, createSerialDisposable } from "@reactive-js/disposable";
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

const scheduleImmediate = (
  continuation: () => void,
): DisposableLike => {
  const immediate = setImmediate(continuation);
  const disposable = createDisposable();
  disposable.add(() => clearImmediate(immediate));
  return disposable;
};

const scheduleDelayed = (
  callback: () => void,
  delay = 0,
): DisposableLike => {
  const timeout = setTimeout(callback, delay);
  const timeoutDisposable = createDisposable();
  timeoutDisposable.add(() => clearTimeout(timeout));
  return timeoutDisposable;
}

const scheduleNative = (
  callback: () => void,
  delay = 0,
): DisposableLike =>
  delay >= 0
    ? scheduleDelayed(callback, delay)
    : scheduleImmediate(callback);

const createCallback = (
  continuation: SchedulerContinuationLike,
  disposable: SerialDisposableLike,
): (() => void) => {
  const callback = () => {
    if (!disposable.isDisposed) {
      startTime = now();
      currentDisposable = disposable;
      inScheduledContinuation = true;
      const result = continuation(shouldYield);
      inScheduledContinuation = false;
      currentDisposable = undefined;

      if (result !== undefined) {
        const [nextContinuation, delay = 0] = result;
        const nextCallback = 
          nextContinuation === continuation
            ? callback
            : createCallback(nextContinuation, disposable);

        disposable.disposable = scheduleNative(nextCallback, delay);
      } else {
        disposable.dispose();
      }
    }
  };
  return callback;
}

const schedule = (
  continuation: SchedulerContinuationLike,
  delay = 0,
): DisposableLike => {
  const disposable = createSerialDisposable();
  const callback = createCallback(continuation, disposable);

  disposable.disposable = scheduleNative(callback, delay);
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
