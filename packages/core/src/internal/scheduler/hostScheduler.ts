import { DisposableLike, createDisposable } from "../../disposable";
import { SchedulerLike, SchedulerContinuationLike } from "./interfaces";

const supportsPerformanceNow =
  typeof performance === "object" && typeof performance.now === "function";

const supportsProcessHRTime =
  typeof process === "object" && typeof process.hrtime === "function";

const supportsMessageChannel = typeof MessageChannel === "function";

const supportsSetImmediate = typeof setImmediate === "function";

const now: () => number = supportsPerformanceNow
  ? () => performance.now()
  : supportsProcessHRTime
  ? () => {
      const hr = process.hrtime();
      return hr[0] * 1000 + hr[1] / 1e6;
    }
  : () => Date.now();

const scheduleImmediateWithSetImmediate = (cb: () => void) => {
  const disposable = createDisposable(() => clearImmediate(immediate));
  const immediate = setImmediate(cb);
  return disposable;
};

const scheduleImmediateWithMessageChannel = (channel: MessageChannel) => (
  cb: () => void,
) => {
  const disposable = createDisposable();

  channel.port1.onmessage = () => {
    if (!disposable.isDisposed) {
      cb();
      disposable.dispose();
    }
  };
  channel.port2.postMessage(null);
  return disposable;
};

const scheduleDelayed = (cb: () => void, delay: number) => {
  const disposable = createDisposable(() => clearTimeout(timeout));
  const timeout = setTimeout(() => {
    cb();
    disposable.dispose();
  }, delay);
  return disposable;
};

const scheduleImmediateWithSetTimeout = (cb: () => void) =>
  scheduleDelayed(cb, 0);

const scheduleImmediate: (
  callback: () => void,
) => DisposableLike = supportsSetImmediate
  ? scheduleImmediateWithSetImmediate
  : supportsMessageChannel
  ? scheduleImmediateWithMessageChannel(new MessageChannel())
  : scheduleImmediateWithSetTimeout;

const createCallback = (
  scheduler: HostScheduler,
  continuation: SchedulerContinuationLike,
): (() => void) => () => {
  if (!continuation.isDisposed) {
    scheduler.inContinuation = true;
    scheduler.startTime = scheduler.now;
    const delay = continuation.run(scheduler.shouldYield);
    scheduler.inContinuation = false;

    if (delay >= 0) {
      scheduler.schedule(continuation, delay);
    }
  }
};

class HostScheduler implements SchedulerLike {
  inContinuation = false;
  startTime = this.now;

  readonly shouldYield = () => {
    return this.now > this.startTime + this.yieldInterval;
  };

  constructor(private readonly yieldInterval: number) {}

  get now(): number {
    return now();
  }

  schedule(continuation: SchedulerContinuationLike, delay = 0): void {
    if (!continuation.isDisposed) {
      const callback = createCallback(this, continuation);
      const callbackSubscription =
        delay > 0
          ? scheduleDelayed(callback, delay)
          : scheduleImmediate(callback);
      continuation.add(callbackSubscription);
    }
  }
}

export const createHostScheduler = (
  config: {
    yieldInterval: number;
  } = {
    yieldInterval: 5,
  },
) => new HostScheduler(config.yieldInterval);
