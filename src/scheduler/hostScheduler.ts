import {
  AbstractDisposable,
  DisposableLike,
  add,
  addTo,
  createDisposable,
  dispose,
  disposed,
  isDisposed,
  onDisposed,
} from "../disposable";
import { pipe } from "../functions";
import { Option, isSome, none } from "../option";
import { SchedulerContinuationLike, SchedulerLike } from "../scheduler";
import { SchedulerImplementation, runContinuation } from "./scheduler";

const scheduleImmediateWithSetImmediate = (
  scheduler: HostScheduler,
  continuation: SchedulerContinuationLike,
) => {
  const disposable = pipe(
    createDisposable(),
    addTo(continuation),
    onDisposed(() => clearImmediate(immmediate)),
  );
  const immmediate: ReturnType<typeof setImmediate> = setImmediate(
    run,
    scheduler,
    continuation,
    disposable,
  );
};

const scheduleImmediateWithMessageChannel = (
  scheduler: HostScheduler,
  channel: MessageChannel,
  continuation: SchedulerContinuationLike,
) => {
  channel.port1.onmessage = () => run(scheduler, continuation, disposed);
  channel.port2.postMessage(null);
};

const scheduleDelayed = (
  scheduler: HostScheduler,
  continuation: SchedulerContinuationLike,
  delay: number,
) => {
  const disposable = pipe(
    createDisposable(),
    addTo(continuation),
    onDisposed(_ => clearTimeout(timeout)),
  );
  const timeout: ReturnType<typeof setTimeout> = setTimeout(
    run,
    delay,
    scheduler,
    continuation,
    disposable,
  );
};

const scheduleImmediate = (
  scheduler: HostScheduler,
  continuation: SchedulerContinuationLike,
) => {
  const { messageChannel, supportsSetImmediate } = scheduler;

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

const run = (
  scheduler: HostScheduler,
  continuation: SchedulerContinuationLike,
  immmediateOrTimerDisposable: DisposableLike,
) => {
  // clear the immediateOrTimer disposable
  pipe(immmediateOrTimerDisposable, dispose());
  scheduler.startTime = scheduler.now;
  pipe(scheduler, runContinuation(continuation));
};

class HostScheduler
  extends AbstractDisposable
  implements SchedulerLike, SchedulerImplementation
{
  inContinuation = false;
  messageChannel: Option<MessageChannel> = none;
  supportsPerformanceNow = false;
  supportsIsInputPending = false;
  supportsSetImmediate = false;
  supportsProcessHRTime = false;
  startTime = this.now;
  private yieldRequested = false;

  constructor(private readonly yieldInterval: number) {
    super();
  }

  get now(): number {
    const { supportsPerformanceNow, supportsProcessHRTime } = this;
    if (supportsPerformanceNow) {
      return performance.now();
    } else if (supportsProcessHRTime) {
      const hr = process.hrtime();
      return hr[0] * 1000 + hr[1] / 1e6;
    } else {
      return Date.now();
    }
  }

  get shouldYield() {
    const { inContinuation, yieldRequested } = this;

    if (inContinuation) {
      this.yieldRequested = false;
    }

    return (
      inContinuation &&
      (yieldRequested ||
        this.now > this.startTime + this.yieldInterval ||
        this.isInputPending)
    );
  }

  get isInputPending(): boolean {
    return (
      this.supportsIsInputPending &&
      (navigator as any).scheduling.isInputPending()
    );
  }

  requestYield(): void {
    this.yieldRequested = true;
  }

  schedule(
    continuation: SchedulerContinuationLike,
    options: { readonly delay?: number } = {},
  ) {
    const { delay = Math.max(options.delay ?? 0, 0) } = options;

    pipe(this, add(continuation, true));

    const continuationIsDisposed = isDisposed(continuation);
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
  const hostScheduler = new HostScheduler(yieldInterval);

  hostScheduler.supportsPerformanceNow =
    typeof performance === "object" && typeof performance.now === "function";
  hostScheduler.supportsSetImmediate = typeof setImmediate === "function";
  hostScheduler.supportsProcessHRTime =
    typeof process === "object" && typeof process.hrtime === "function";
  hostScheduler.supportsIsInputPending =
    typeof navigator === "object" &&
    (navigator as any).scheduling !== undefined &&
    (navigator as any).scheduling.isInputPending !== undefined;

  if (typeof MessageChannel === "function") {
    const messageChannel = new MessageChannel();
    hostScheduler.messageChannel = messageChannel;

    pipe(
      hostScheduler,
      onDisposed(_ => {
        messageChannel.port1.close();
        messageChannel.port2.close();
      }),
    );
  }

  return hostScheduler;
};
