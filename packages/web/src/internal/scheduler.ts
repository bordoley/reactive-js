import { createDisposable, disposed, DisposableLike } from "@reactive-js/disposable";
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
  disposable: DisposableLike,
) => {
  channel = channel || new MessageChannel();

  channel.port1.onmessage = () => {
    if (!disposable.isDisposed) {
      continuation();
    }
  };
  channel.port2.postMessage(null);
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

  // setTimeout has a floor of 4ms so for lesser delays
  // just schedule immediately.
  if (delay >= 4) {
    const timeout = setTimeout(scheduledContinuation, delay);
    disposable.add(() => clearTimeout(timeout));
  } else {
    scheduleImmediate(scheduledContinuation, disposable);
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

export const createSchedulerWithPriority = (
  priority: number,
): SchedulerLike => {
  priorityScheduler =
    priorityScheduler || createPrioritySchedulerResource(schedulerHost);

  return createSchedulerWithPriorityImpl(priorityScheduler, priority);
};
