import {
  DisposableLike,
  createDisposable,
  dispose,
  addDisposable,
  addTeardown,
} from "../disposable";
import {
  Factory,
  SideEffect,
  Function1,
  defer,
  pipe,
  alwaysFalse,
} from "../functions";
import { SchedulerLike, SchedulerContinuationLike } from "../scheduler";
import { run } from "./schedulerContinuation";

const supportsPerformanceNow =
  typeof performance === "object" && typeof performance.now === "function";

const supportsProcessHRTime =
  typeof process === "object" && typeof process.hrtime === "function";

const supportsMessageChannel = typeof MessageChannel === "function";

const supportsSetImmediate = typeof setImmediate === "function";

const supportsIsInputPending =
  typeof navigator === "object" &&
  (navigator as any).scheduling !== undefined &&
  (navigator as any).scheduling.isInputPending !== undefined;

const inputIsPending = supportsIsInputPending
  ? () => (navigator as any).scheduling.isInputPending()
  : alwaysFalse;

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
    pipe(disposable, dispose());
    cb();
  }
};

const scheduleImmediateWithSetImmediate = (cb: SideEffect) => {
  const disposable = createDisposable();
  const immediate = setImmediate(createScheduledCallback(disposable, cb));
  addTeardown(disposable, defer(immediate, clearImmediate));
  return disposable;
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
  addTeardown(disposable, defer(timeout, clearTimeout));
  return disposable;
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
    run(continuation);
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

  get shouldYield() {
    return (
      this.inContinuation &&
      (this.now > this.startTime + this.yieldInterval || inputIsPending())
    );
  }

  schedule(
    continuation: SchedulerContinuationLike,
    options: { readonly delay?: number } = {},
  ) {
    const { delay = 0 } = options;
    if (!continuation.isDisposed) {
      const callback = createCallback(this, continuation);
      const callbackSubscription =
        delay > 0
          ? scheduleDelayed(callback, delay)
          : scheduleImmediate(callback);
      addDisposable(continuation, callbackSubscription);
    }
  }
}

export const createHostScheduler = (
  options: {
    readonly yieldInterval?: number;
  } = {},
): SchedulerLike => {
  const { yieldInterval = 5 } = options;
  return new HostScheduler(yieldInterval);
};
