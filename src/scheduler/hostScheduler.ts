import { Factory, SideEffect2, alwaysFalse } from "../functions";
import { SchedulerContinuationLike, SchedulerLike } from "../scheduler";
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

const scheduleImmediateWithSetImmediate = (
  scheduler: HostScheduler,
  continuation: SchedulerContinuationLike,
) => setImmediate(runContinuation, scheduler, continuation);

const scheduleImmediateWithMessageChannel =
  (channel: MessageChannel) =>
  (scheduler: HostScheduler, continuation: SchedulerContinuationLike) => {
    channel.port1.onmessage = () => runContinuation(scheduler, continuation);
    channel.port2.postMessage(null);
  };

const scheduleDelayed = (
  scheduler: HostScheduler,
  continuation: SchedulerContinuationLike,
  delay: number,
) => {
  setTimeout(runContinuation, delay, scheduler, continuation);
};

const scheduleImmediateWithSetTimeout = (
  scheduler: HostScheduler,
  continuation: SchedulerContinuationLike,
) => scheduleDelayed(scheduler, continuation, 0);

const scheduleImmediate: SideEffect2<HostScheduler, SchedulerContinuationLike> =
  supportsSetImmediate
    ? scheduleImmediateWithSetImmediate
    : supportsMessageChannel
    ? scheduleImmediateWithMessageChannel(new MessageChannel())
    : scheduleImmediateWithSetTimeout;

const runContinuation = (
  scheduler: HostScheduler,
  continuation: SchedulerContinuationLike,
) => {
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
  private yieldRequested = false;

  constructor(private readonly yieldInterval: number) {}

  get now(): number {
    return now();
  }

  get shouldYield() {
    const { yieldRequested } = this;

    if (this.inContinuation) {
      this.yieldRequested = false;
    }

    return (
      this.inContinuation &&
      (yieldRequested ||
        this.now > this.startTime + this.yieldInterval ||
        inputIsPending())
    );
  }

  requestYield(): void {
    this.yieldRequested = true;
  }

  schedule(
    continuation: SchedulerContinuationLike,
    options: { readonly delay?: number } = {},
  ) {
    const { delay = 0 } = options;
    const continuationIsDisposed = continuation.isDisposed;
    if (!continuationIsDisposed && delay > 0) {
      scheduleDelayed(this, continuation, delay);
    } else if (!continuationIsDisposed) {
      scheduleImmediate(this, continuation);
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
