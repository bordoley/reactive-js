import { DisposableLike, createDisposable } from "../../../core/dist/ts/disposable.ts";
import { Option } from "../../../core/dist/ts/option.ts";
import { AbstractHostScheduler, SchedulerLike } from "../../../core/dist/ts/scheduler.ts";

let timeout = 1;
export const setSchedulerTimeout = (newTimeout: number) => {
  timeout = newTimeout;
};

const callCallbackAndDispose = (
  callback: (shouldYield: Option<() => boolean>) => void,
  disposable: DisposableLike,
) => {
  startTime = schedulerImpl.now;
  callback(shouldYield);
  disposable.dispose();
};

const shouldYield = () => {
  return schedulerImpl.now > startTime + timeout;
};

class DenoScheduler extends AbstractHostScheduler {
  get now(): number {
    return performance.now();
  }

  scheduleDelayed(
    callback: (shouldYield: Option<() => boolean>) => void,
    delay: number,
  ): DisposableLike {
    const disposable = createDisposable(() => clearTimeout(timeout));
    const timeout = (setTimeout as any)(
      callCallbackAndDispose,
      delay,
      callback,
      disposable,
    );
    return disposable;
  }

  scheduleImmediate(
    callback: (shouldYield: Option<() => boolean>) => void,
  ): DisposableLike {
    return this.scheduleDelayed(callback, 0);
  }
}

const schedulerImpl = new DenoScheduler();
let startTime = schedulerImpl.now;


// FIXME: When compiling we should generate a wrapper in the mjs module
// around the cjs module to avoid two global schedulers.
export const scheduler: SchedulerLike = schedulerImpl;
