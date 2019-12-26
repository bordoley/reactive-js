import { DisposableLike, createDisposable } from "@reactive-js/disposable";
import { SchedulerLike } from "@reactive-js/scheduler";
import {
  createPrioritySchedulerResource,
  createSchedulerWithPriority as createSchedulerWithPriorityImpl,
  PrioritySchedulerResourceLike,
  AbstractScheduler,
} from "@reactive-js/schedulers";

const performance = window.performance;
const Date = window.Date;
const setTimeout = window.setTimeout;
const clearTimeout = window.clearTimeout;

const now =
  typeof performance === "object" && typeof performance.now === "function"
    ? () => performance.now()
    : () => Date.now();

const yieldInterval = 5;
const maxYieldInterval = 300;

const shouldCallbackYield =
  navigator !== undefined &&
  (navigator as any).scheduling !== undefined &&
  (navigator as any).scheduling.isInputPending !== undefined
    ? (startTime: number) => {
        const currentTime = now();
        const deadline = startTime + yieldInterval;
        const maxDeadline = startTime + maxYieldInterval;
        const inputPending = (navigator as any).scheduling.isInputPending();

        return (
          (currentTime >= deadline && inputPending) ||
          currentTime >= maxDeadline
        );
      }
    : (startTime: number) => now() >= startTime + yieldInterval;

let channel: MessageChannel | undefined = undefined;

const scheduleImmediate = (callback: () => void): DisposableLike => {
  const disposable = createDisposable();
  channel = channel || new MessageChannel();

  channel.port1.onmessage = () => {
    if (!disposable.isDisposed) {
      callback();
      disposable.dispose();
    }
  };
  channel.port2.postMessage(null);
  return disposable;
};

const callCallbackAndDispose = (
  callback: () => void,
  disposable: DisposableLike,
) => {
  callback();
  disposable.dispose();
};

const scheduleDelayed = (callback: () => void, delay = 0): DisposableLike => {
  const disposable = createDisposable(() => clearTimeout(timeout));
  const timeout = setTimeout(
    callCallbackAndDispose,
    delay,
    callback,
    disposable,
  );
  return disposable;
};

class WebScheduler extends AbstractScheduler {
  protected shouldCallbackYield = shouldCallbackYield;

  scheduleCallback(callback: () => void, delay = 0): DisposableLike {
    // setTimeout has a floor of 4ms so for lesser delays
    // just schedule immediately.
    return delay >= 4
      ? scheduleDelayed(callback, delay)
      : scheduleImmediate(callback);
  }

  get now(): number {
    return now();
  }
}

let schedulerHost: SchedulerLike | undefined = undefined;
let priorityScheduler: PrioritySchedulerResourceLike | undefined = undefined;

export const createSchedulerWithPriority = (
  priority: number,
): SchedulerLike => {
  schedulerHost = schedulerHost || new WebScheduler();
  priorityScheduler =
    priorityScheduler || createPrioritySchedulerResource(schedulerHost);

  return createSchedulerWithPriorityImpl(priorityScheduler, priority);
};
