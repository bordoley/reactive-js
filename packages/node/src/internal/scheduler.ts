import { DisposableLike, createDisposable } from "@reactive-js/disposable";
import { SchedulerLike } from "@reactive-js/scheduler";
import {
  createPriorityScheduler,
  createSchedulerWithPriority as createSchedulerWithPriorityImpl,
  PrioritySchedulerResourceLike,
  schedulerMixin,
} from "@reactive-js/schedulers";

let timeout = 500;
export const setSchedulerTimeout = (newTimeout: number) => {
  timeout = newTimeout;
};

const callCallbackAndDispose = (
  scheduler: NodeScheduler,
  callback: () => void,
  disposable: DisposableLike,
) => {
  scheduler.startTime = scheduler.now;
  callback();
  disposable.dispose();
};

class NodeScheduler implements SchedulerLike {
  readonly schedule = schedulerMixin.schedule;

  protected readonly shouldYield = () => {
    return this.now > this.startTime + timeout;
  };

  startTime = this.now;

  get now(): number {
    const hr = process.hrtime();
    return hr[0] * 1000 + hr[1] / 1e6;
  }

  scheduleCallback(callback: () => void, delay = 0): DisposableLike {
    return delay > 0
      ? this.scheduleDelayed(callback, delay)
      : this.scheduleImmediate(callback);
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

  private scheduleImmediate(callback: () => void): DisposableLike {
    const disposable = createDisposable(() => clearImmediate(immediate));
    const immediate = setImmediate(
      callCallbackAndDispose,
      callback,
      this,
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
  schedulerHost = schedulerHost || new NodeScheduler();
  priorityScheduler =
    priorityScheduler || createPriorityScheduler(schedulerHost);

  return createSchedulerWithPriorityImpl(priorityScheduler, priority);
};
