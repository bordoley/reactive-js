import {
  AbstractDisposable,
  addDisposable,
  addTeardown,
  DisposableLike,
} from "../disposable";
import { Factory, alwaysFalse } from "../functions";
import { Option, none, isSome } from "../option";
import { SchedulerContinuationLike, SchedulerLike } from "../scheduler";
import { run } from "./schedulerContinuation";

const supportsPerformanceNow =
  typeof performance === "object" && typeof performance.now === "function";

const supportsProcessHRTime =
  typeof process === "object" && typeof process.hrtime === "function";

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
) => {
  const immmediate = setImmediate(runContinuation, scheduler, continuation);
  addTeardown(scheduler, () => clearImmediate(immmediate));
};

const scheduleImmediateWithMessageChannel = (
  scheduler: HostScheduler,
  channel: MessageChannel,
  continuation: SchedulerContinuationLike,
) => {
  channel.port1.onmessage = () => runContinuation(scheduler, continuation);
  channel.port2.postMessage(null);
};

const scheduleDelayed = (
  scheduler: HostScheduler,
  continuation: SchedulerContinuationLike,
  delay: number,
) => {
  const timeout = setTimeout(runContinuation, delay, scheduler, continuation);
  addTeardown(scheduler, () => clearTimeout(timeout));
};

const scheduleImmediate = (
  scheduler: HostScheduler,
  continuation: SchedulerContinuationLike,
) => {
  const { messageChannel } = scheduler;

  if (supportsSetImmediate) {
    scheduleImmediateWithSetImmediate(scheduler, continuation);
  } else if (isSome(messageChannel)) {
    scheduleImmediateWithMessageChannel(
      scheduler,
      messageChannel,
      continuation,
    );
  } else {
    scheduleDelayed(scheduler, continuation, 0);
  }
};

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

class HostScheduler extends AbstractDisposable implements SchedulerLike {
  inContinuation = false;
  messageChannel: Option<MessageChannel> = none;
  startTime = this.now;
  private yieldRequested = false;

  constructor(private readonly yieldInterval: number) {
    super();

    const supportsMessageChannel = typeof MessageChannel === "function";

    if (supportsMessageChannel) {
      const messageChannel = new MessageChannel();
      this.messageChannel = messageChannel;

      addTeardown(this, () => {
        messageChannel.port1.close();
        messageChannel.port2.close();
      });
    }
  }

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
    addDisposable(this, continuation);

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
): SchedulerLike & DisposableLike => {
  const { yieldInterval = 5 } = options;
  return new HostScheduler(yieldInterval);
};
