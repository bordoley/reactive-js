import { createDisposable, DisposableLike } from "@reactive-js/disposable";
import { SchedulerLike } from "@reactive-js/scheduler";
import {
  createPrioritySchedulerResource,
  createSchedulerWithPriority as createSchedulerWithPriorityImpl,
  HostSchedulerContinuation,
  HostSchedulerLike,
} from "@reactive-js/schedulers";


const performance = window.performance;
const Date = window.Date;
const setTimeout = window.setTimeout;
const clearTimeout = window.clearTimeout;

const yieldInterval = 5;
const maxYieldInterval = 300;

class WebSchedulerHost implements HostSchedulerLike {
  private readonly channel = new MessageChannel();

  private scheduleImmediate(continuation: () => void, disposable: DisposableLike) {
    this.channel.port1.onmessage = () => {
      if (!disposable.isDisposed) {
        continuation();
      }
    }
    this.channel.port2.postMessage(null);
  }

  private startTime: number = 0;
  private readonly _now = (typeof performance === 'object' && typeof performance.now === 'function')
    ? () => performance.now()
    : () => Date.now();

  private readonly _shouldYield = (navigator !== undefined &&
    (navigator as any).scheduling !== undefined &&
    (navigator as any).scheduling.isInputPending !== undefined)
    ? () => {
      const now = this.now;
      const deadline = this.startTime + yieldInterval;
      const maxDeadline = this.startTime + maxYieldInterval;
      const inputPending = (navigator as any).scheduling.isInputPending();

      return (now >= deadline && inputPending) || now >= maxDeadline;
    }
    : () => this.now >= this.startTime + yieldInterval;

  get now(): number {
    return this._now();
  }

  get shouldYield(): boolean {
    return this._shouldYield();
  }

  schedule(
    continuation: HostSchedulerContinuation,
    delay: number = 0,
  ): DisposableLike {
    const scheduledContinuation = () => {
      this.startTime = this.now;

      let result: HostSchedulerContinuation | undefined = continuation;
      while (result !== undefined) {
        result = continuation();
      }
    };

    const disposable = createDisposable();
    // setTimeout has a floor of 4ms so for lesser delays
    // just schedule immediately.
    if (delay > 4 ) {
      const timeout = setTimeout(scheduledContinuation, delay);
      disposable.add(() => clearTimeout(timeout));
    } else {
      this.scheduleImmediate(scheduledContinuation, disposable);
    }
    return disposable;
  }
}

const schedulerHost = new WebSchedulerHost();
const priorityScheduler = createPrioritySchedulerResource(schedulerHost);

export const createSchedulerWithPriority = (priority: number): SchedulerLike =>
  createSchedulerWithPriorityImpl(priorityScheduler, priority);
