import { DisposableLike, createDisposable } from "@reactive-js/disposable";
import { SchedulerLike } from "@reactive-js/scheduler";
import {
  createPrioritySchedulerResource,
  createSchedulerWithPriority as createSchedulerWithPriorityImpl,
  PrioritySchedulerResourceLike,
  AbstractScheduler,
} from "@reactive-js/schedulers";

let timeout = 500;
export const setSchedulerTimeout = (newTimeout: number) => {
  timeout = newTimeout;
};

const callCallbackAndDispose = (
  callback: () => void,
  disposable: DisposableLike,
) => {
  callback();
  disposable.dispose();
};

const scheduleImmediate = (callback: () => void): DisposableLike => {
  const disposable = createDisposable();
  const immediate = setImmediate(callCallbackAndDispose, callback, disposable);
  disposable.add(() => clearImmediate(immediate));
  return disposable;
};

const scheduleDelayed = (callback: () => void, delay = 0): DisposableLike => {
  const disposable = createDisposable();
  const timeout = setTimeout(
    callCallbackAndDispose,
    delay,
    callback,
    disposable,
  );
  disposable.add(() => clearTimeout(timeout));
  return disposable;
};

class NodeScheduler extends AbstractScheduler {
  protected shouldCallbackYield(startTime: number): boolean {
    return this.now > startTime + timeout;
  }

  scheduleCallback(callback: () => void, delay = 0): DisposableLike {
    // setTimeout has a floor of 4ms so for lesser delays
    // just schedule immediately.
    return delay >= 4
      ? scheduleDelayed(callback, delay)
      : scheduleImmediate(callback);
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
