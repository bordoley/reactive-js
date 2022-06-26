import {
  AbstractDisposable,
  DisposableLike,
  add,
  addToDisposeOnChildError,
  createDisposable,
  dispose,
  disposed,
  onDisposed,
} from "../disposable";
import { Factory, alwaysFalse, pipe } from "../functions";
import { Option, isSome, none } from "../option";
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
  const disposable = pipe(
    createDisposable(),
    addToDisposeOnChildError(continuation),
    onDisposed(() => clearImmediate(immmediate)),
  );
  const immmediate: ReturnType<typeof setImmediate> = setImmediate(
    runContinuation,
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
  channel.port1.onmessage = () =>
    runContinuation(scheduler, continuation, disposed);
  channel.port2.postMessage(null);
};

const scheduleDelayed = (
  scheduler: HostScheduler,
  continuation: SchedulerContinuationLike,
  delay: number,
) => {
  const disposable = pipe(
    createDisposable(),
    addToDisposeOnChildError(continuation),
    onDisposed(_ => clearTimeout(timeout)),
  );
  const timeout: ReturnType<typeof setTimeout> = setTimeout(
    runContinuation,
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
  immmediateOrTimerDisposable: DisposableLike,
) => {
  // clear the immediateOrTimer disposable
  pipe(immmediateOrTimerDisposable, dispose());

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
  }

  get now(): number {
    return now();
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
    const { delay = Math.max(options.delay ?? 0, 0) } = options;

    pipe(this, add(continuation));

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
  const hostScheduler = new HostScheduler(yieldInterval);

  const supportsMessageChannel = typeof MessageChannel === "function";

  if (supportsMessageChannel) {
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
