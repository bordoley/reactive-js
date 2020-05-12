import {
  DisposableLike,
  createDisposable,
  dispose,
  add,
} from "../../disposable";
import { Factory, SideEffect, Operator, bind } from "../../functions";
import { SchedulerLike, SchedulerContinuationLike } from "./interfaces";

const supportsPerformanceNow =
  typeof performance === "object" && typeof performance.now === "function";

const supportsProcessHRTime =
  typeof process === "object" && typeof process.hrtime === "function";

const supportsMessageChannel = typeof MessageChannel === "function";

const supportsSetImmediate = typeof setImmediate === "function";

const now: Factory<number> = supportsPerformanceNow
  ? () => performance.now()
  : supportsProcessHRTime
  ? () => {
      const hr = process.hrtime();
      return hr[0] * 1000 + hr[1] / 1e6;
    }
  : () => Date.now();

const scheduleImmediateWithSetImmediate = (cb: SideEffect) => {
  const timeout = setImmediate(() => {
    cb();
    dispose(disposable);
  });
  const disposable = createDisposable(bind(clearImmediate, timeout));
  return disposable;
};

const scheduleImmediateWithMessageChannel = (channel: MessageChannel) => (
  cb: SideEffect,
) => {
  const disposable = createDisposable();

  channel.port1.onmessage = () => {
    if (!disposable.isDisposed) {
      cb();
      dispose(disposable);
    }
  };
  channel.port2.postMessage(null);
  return disposable;
};

const scheduleDelayed = (cb: SideEffect, delay: number) => {
  const timeout = setTimeout(() => {
    cb();
    dispose(disposable);
  }, delay);
  const disposable = createDisposable(bind(clearTimeout, timeout));
  return disposable;
};

const scheduleImmediateWithSetTimeout = (cb: SideEffect) =>
  scheduleDelayed(cb, 0);

const scheduleImmediate: Operator<
  SideEffect,
  DisposableLike
> = supportsSetImmediate
  ? scheduleImmediateWithSetImmediate
  : supportsMessageChannel
  ? scheduleImmediateWithMessageChannel(new MessageChannel())
  : scheduleImmediateWithSetTimeout;

const createCallback = (
  scheduler: HostScheduler,
  continuation: SchedulerContinuationLike,
): SideEffect => () => {
  if (!continuation.isDisposed) {
    scheduler.inContinuation = true;
    scheduler.startTime = scheduler.now;
    continuation.run(scheduler);
    scheduler.inContinuation = false;
  }
};

class HostScheduler implements SchedulerLike {
  inContinuation = false;
  startTime = this.now;

  constructor(private readonly yieldInterval: number) {}

  get now(): number {
    return now();
  }

  schedule(
    continuation: SchedulerContinuationLike,
    { delay } = { delay: 0 },
  ): void {
    if (!continuation.isDisposed) {
      const callback = createCallback(this, continuation);
      const callbackSubscription =
        delay > 0
          ? scheduleDelayed(callback, delay)
          : scheduleImmediate(callback);
      add(continuation, callbackSubscription);
    }
  }

  shouldYield() {
    return this.now > this.startTime + this.yieldInterval;
  }
}

export const createHostScheduler = (
  config: {
    yieldInterval: number;
  } = {
    yieldInterval: 5,
  },
) => new HostScheduler(config.yieldInterval);
