import { DisposableLike, createDisposable } from "@reactive-js/disposable";
import { SchedulerLike } from "@reactive-js/scheduler";
import { schedulerMixin } from "@reactive-js/schedulers";

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

const callCallbackAndDispose = (
  scheduler: WebScheduler,
  callback: () => void,
  disposable: DisposableLike,
) => {
  scheduler.startTime = scheduler.now;
  callback();
  disposable.dispose();
};

const scheduleImmediate = (
  scheduler: WebScheduler,
  callback: () => void,
): DisposableLike => {
  const disposable = createDisposable();
  const channel = scheduler.channel;

  channel.port1.onmessage = () => {
    if (!disposable.isDisposed) {
      scheduler.startTime = scheduler.now;
      callback();
      disposable.dispose();
    }
  };
  channel.port2.postMessage(null);
  return disposable;
};

const scheduleDelayed = (
  scheduler: WebScheduler,
  callback: () => void,
  delay: number,
): DisposableLike => {
  const disposable = createDisposable(() => clearTimeout(timeout));
  const timeout = setTimeout(
    callCallbackAndDispose,
    delay,
    scheduler,
    callback,
    disposable,
  );
  return disposable;
};

class WebScheduler implements SchedulerLike {
  channel = new MessageChannel();
  readonly schedule = schedulerMixin.schedule;
  readonly shouldYield =
    navigator !== undefined &&
    (navigator as any).scheduling !== undefined &&
    (navigator as any).scheduling.isInputPending !== undefined
      ? () => {
          const currentTime = now();
          const startTime = this.startTime;
          const deadline = startTime + yieldInterval;
          const maxDeadline = startTime + maxYieldInterval;
          const inputPending = (navigator as any).scheduling.isInputPending();

          return (
            (currentTime >= deadline && inputPending) ||
            currentTime >= maxDeadline
          );
        }
      : () => now() >= this.startTime + yieldInterval;

  startTime = this.now;

  get now(): number {
    return now();
  }

  scheduleCallback(callback: () => void, delay: number): DisposableLike {
    // setTimeout has a floor of 4ms so for lesser delays
    // just schedule immediately.
    return delay >= 4
      ? scheduleDelayed(this, callback, delay)
      : scheduleImmediate(this, callback);
  }
}

let hostScheduler: SchedulerLike | undefined = undefined;

export const getHostScheduler = (): SchedulerLike => {
  hostScheduler = hostScheduler || new WebScheduler();
  return hostScheduler
};
