import {
  DisposableLike,
  createDisposable,
  dispose,
  add,
} from "../../disposable";
import { Factory, SideEffect, Function1, bind } from "../../functions";
import { SchedulerLike, SchedulerContinuationLike } from "./interfaces";

// FIXME: Only declare these to make Deno happy.
export declare class MessageChannel {
  port1: {
    onmessage: any;
  };

  port2: {
    postMessage: any;
  };
}
export declare const process: any;
export declare const setImmediate: any;
export declare const clearImmediate: any;

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

const createScheduledCallback = (
  disposable: DisposableLike,
  cb: SideEffect,
): SideEffect => () => {
  if (!disposable.isDisposed) {
    cb();
    dispose(disposable);
  }
};

const scheduleImmediateWithSetImmediate = (cb: SideEffect) => {
  const disposable = createDisposable();
  const timeout = setImmediate(createScheduledCallback(disposable, cb));
  return add(disposable, bind(clearImmediate, timeout));
};

const scheduleImmediateWithMessageChannel = (channel: MessageChannel) => (
  cb: SideEffect,
) => {
  const disposable = createDisposable();

  channel.port1.onmessage = createScheduledCallback(disposable, cb);
  channel.port2.postMessage(null);

  return disposable;
};

const scheduleDelayed = (cb: SideEffect, delay: number) => {
  const disposable = createDisposable();
  const timeout = setTimeout(createScheduledCallback(disposable, cb), delay);
  return add(disposable, bind(clearTimeout, timeout));
};

const scheduleImmediateWithSetTimeout = (cb: SideEffect) =>
  scheduleDelayed(cb, 0);

const scheduleImmediate: Function1<
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
    continuation.continue(scheduler);
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

  schedule(continuation: SchedulerContinuationLike, { delay } = { delay: 0 }) {
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
): SchedulerLike => new HostScheduler(config.yieldInterval);
