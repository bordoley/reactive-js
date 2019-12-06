import { createSerialDisposable, disposed, DisposableLike, SerialDisposableLike, createDisposable } from "@reactive-js/disposable";
import {
  SchedulerLike,
  SchedulerContinuationLike,
} from "@reactive-js/scheduler";
import {
  createPrioritySchedulerResource,
  createSchedulerWithPriority as createSchedulerWithPriorityImpl,
  PrioritySchedulerResourceLike,
} from "@reactive-js/schedulers";

const performance = window.performance;
const Date = window.Date;
const setTimeout = window.setTimeout;
const clearTimeout = window.clearTimeout;

const yieldInterval = 5;
const maxYieldInterval = 300;

const now =
  typeof performance === "object" && typeof performance.now === "function"
    ? () => performance.now()
    : () => Date.now();

let startTime = 0;
let inScheduledContinuation = false;
let currentDisposable: DisposableLike | undefined = undefined;

const shouldYield =
  navigator !== undefined &&
  (navigator as any).scheduling !== undefined &&
  (navigator as any).scheduling.isInputPending !== undefined
    ? () => {
        const currentTime = now();
        const deadline = startTime + yieldInterval;
        const maxDeadline = startTime + maxYieldInterval;
        const inputPending = (navigator as any).scheduling.isInputPending();

        return (
          ((currentDisposable || disposed).isDisposed) ||
          (currentTime >= deadline && inputPending) ||
          currentTime >= maxDeadline
        );
      }
    : () =>
        ((currentDisposable || disposed).isDisposed) ||
        now() >= startTime + yieldInterval;

let channel: MessageChannel | undefined = undefined;

const scheduleImmediate = (
  continuation: () => void,
): DisposableLike => {
  const disposable = createDisposable();
  channel = channel || new MessageChannel();

  channel.port1.onmessage = () => {
    if (!disposable.isDisposed) {
      continuation();
      disposable.dispose();
    }
  };
  channel.port2.postMessage(null);
  return disposable;
};

const scheduleDelayed = (
  continuation: () => void,
  delay = 0,
): DisposableLike => {
  const timeout = setTimeout(continuation, delay);
  const disposable = createDisposable();
  disposable.add(() => clearTimeout(timeout));
  return disposable;
}

const scheduleNative = (
  continuation: () => void,
  delay = 0,
): DisposableLike =>
  // setTimeout has a floor of 4ms so for lesser delays
  // just schedule immediately.
  delay >= 4
    ? scheduleDelayed(continuation, delay)
    : scheduleImmediate(continuation);

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

export const createSchedulerWithPriority = (
  priority: number,
): SchedulerLike => {
  priorityScheduler =
    priorityScheduler || createPrioritySchedulerResource(schedulerHost);

  return createSchedulerWithPriorityImpl(priorityScheduler, priority);
};
