import { DisposableLike, createDisposable } from "@reactive-js/disposable";
import { SchedulerLike } from "@reactive-js/scheduler";
import {
  createPrioritySchedulerResource,
  createSchedulerWithPriority as createSchedulerWithPriorityImpl,
  PrioritySchedulerResourceLike,
  schedulerMixin,
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

const callCallbackAndDispose = (
  scheduler: WebScheduler,
  callback: () => void,
  disposable: DisposableLike,
) => {
  scheduler.startTime = scheduler.now;
  callback();
  disposable.dispose();
};

class WebScheduler implements SchedulerLike {
  private channel = new MessageChannel();

  readonly schedule = schedulerMixin.schedule;

  protected readonly shouldYield =
    navigator !== undefined &&
    (navigator as any).scheduling !== undefined &&
    (navigator as any).scheduling.isInputPending !== undefined
      ? () => {
          const currentTime = now();
          const deadline = this.startTime + yieldInterval;
          const maxDeadline = this.startTime + maxYieldInterval;
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

  scheduleCallback(callback: () => void, delay = 0): DisposableLike {
    // setTimeout has a floor of 4ms so for lesser delays
    // just schedule immediately.
    return delay >= 4
      ? this.scheduleDelayed(callback, delay)
      : this.scheduleImmediate(callback);
  }

  private scheduleImmediate(callback: () => void): DisposableLike {
    const disposable = createDisposable();

    this.channel.port1.onmessage = () => {
      if (!disposable.isDisposed) {
        this.startTime = this.now;
        callback();
        disposable.dispose();
      }
    };
    this.channel.port2.postMessage(null);
    return disposable;
  }

  private scheduleDelayed(callback: () => void, delay = 0): DisposableLike {
    const disposable = createDisposable(() => clearTimeout(timeout));
    const timeout = setTimeout(
      callCallbackAndDispose,
      delay,
      this,
      callback,
      disposable,
    );
    return disposable;
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
