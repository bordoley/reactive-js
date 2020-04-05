import { DisposableLike, createDisposable } from "@reactive-js/disposable";
import { schedule, SchedulerLike } from "@reactive-js/scheduler";

let timeout = 1;
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

const scheduleDelayed = (
  scheduler: NodeScheduler,
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

const scheduleImmediate = (
  scheduler: NodeScheduler,
  callback: () => void,
): DisposableLike => {
  const disposable = createDisposable(() => clearImmediate(immediate));
  const immediate = setImmediate(
    callCallbackAndDispose,
    scheduler,
    callback,
    disposable,
  );
  return disposable;
};

class NodeScheduler implements SchedulerLike {
  readonly schedule = schedule;

  protected readonly shouldYield = () => {
    return this.now > this.startTime + timeout;
  };

  startTime = this.now;

  get now(): number {
    const hr = process.hrtime();
    return hr[0] * 1000 + hr[1] / 1e6;
  }

  scheduleCallback(callback: () => void, delay: number): DisposableLike {
    return delay > 0
      ? scheduleDelayed(this, callback, delay)
      : scheduleImmediate(this, callback);
  }
}

let hostScheduler: SchedulerLike | undefined = undefined;

export const getHostScheduler = (): SchedulerLike => {
  hostScheduler = hostScheduler || new NodeScheduler();
  return hostScheduler;
};
