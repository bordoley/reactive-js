import { DisposableLike, createDisposable } from "@reactive-js/disposable";
import { SchedulerLike } from "@reactive-js/scheduler";
import {
  createPrioritySchedulerResource,
  createSchedulerWithPriority as createSchedulerWithPriorityImpl,
  PrioritySchedulerResourceLike,
  schedulerMixin,
} from "@reactive-js/schedulers";

let timeout = 500;
export const setSchedulerTimeout = (newTimeout: number) => {
  timeout = newTimeout;
};

class NodeScheduler implements SchedulerLike {
  private readonly callCallbackAndDispose = (
    callback: () => void,
    disposable: DisposableLike,
  ) => {
    this.startTime = this.now;
    callback();
    disposable.dispose();
  };

  private startTime = this.now;

  protected readonly shouldYield = () => {
    return this.now > this.startTime + timeout;
  };
  schedule = schedulerMixin.schedule;
  private scheduleImmediate(callback: () => void): DisposableLike {
    const disposable = createDisposable(() => clearImmediate(immediate));
    const immediate = setImmediate(
      this.callCallbackAndDispose,
      callback,
      disposable,
    );
    return disposable;
  }

  private scheduleDelayed(callback: () => void, delay = 0): DisposableLike {
    const disposable = createDisposable(() => clearTimeout(timeout));
    const timeout = setTimeout(
      this.callCallbackAndDispose,
      delay,
      callback,
      disposable,
    );
    return disposable;
  }

  scheduleCallback(callback: () => void, delay = 0): DisposableLike {
    return delay > 0
      ? this.scheduleDelayed(callback, delay)
      : this.scheduleImmediate(callback);
  }

  get now(): number {
    const hr = process.hrtime();
    return hr[0] * 1000 + hr[1] / 1e6;
  }
}

let schedulerHost: SchedulerLike | undefined = undefined;
let priorityScheduler: PrioritySchedulerResourceLike | undefined = undefined;

export const createSchedulerWithPriority = (
  priority: number,
): SchedulerLike => {
  schedulerHost = schedulerHost || new NodeScheduler();
  priorityScheduler =
    priorityScheduler || createPrioritySchedulerResource(schedulerHost);

  return createSchedulerWithPriorityImpl(priorityScheduler, priority);
};
