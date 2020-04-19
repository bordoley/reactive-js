import { DisposableLike, createDisposable } from "@reactive-js/disposable";
import { Option } from "@reactive-js/option";
import { schedule, SchedulerLike, CallbackSchedulerLike } from "@reactive-js/scheduler";

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

const scheduleDelayed = (
  callback: (shouldYield: Option<() => boolean>) => void,
  delay: number,
): DisposableLike => {
  const disposable = createDisposable(() => clearTimeout(timeout));
  const timeout = setTimeout(
    callCallbackAndDispose,
    delay,
    callback,
    disposable,
  );
  return disposable;
};

const scheduleImmediate = (
  callback: (shouldYield: Option<() => boolean>) => void,
): DisposableLike => {
  const disposable = createDisposable(() => clearImmediate(immediate));
  const immediate = setImmediate(
    callCallbackAndDispose,
    callback,
    disposable,
  );
  return disposable;
};

const shouldYield = () => {
  return schedulerImpl.now > startTime + timeout;
};

const schedulerImpl: CallbackSchedulerLike = {
  inContinuation: false,
  get now(): number {
    const hr = process.hrtime();
    return hr[0] * 1000 + hr[1] / 1e6;
  },
  schedule,
  scheduleCallback(callback: (shouldYield: Option<() => boolean>) => void, delay: number): DisposableLike {
    return delay > 0
      ? scheduleDelayed(callback, delay)
      : scheduleImmediate(callback);
  },
}

let startTime = schedulerImpl.now;

export const scheduler: SchedulerLike = schedulerImpl;