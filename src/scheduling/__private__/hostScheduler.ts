import { getDelay } from "../../__internal__/optionalArgs";
import {
  DisposableMixin,
  DisposableMixin_disposables,
  mixinDisposable,
} from "../../__internal__/util/disposables";
import { createDisposable } from "../../util";
import {
  DisposableLike,
  DisposableLike_error,
  DisposableLike_isDisposed,
  DisposableOrTeardown,
  addIgnoringChildErrors,
  addTo,
  dispose,
  isDisposed,
  onDisposed,
} from "../../util/DisposableLike";
import { none } from "../../util/Option";
import { instanceFactory, pipe } from "../../util/functions";
import { ContinuationLike } from "../ContinuationLike";
import { runContinuation } from "../SchedulerImplementationLike";
import {
  SchedulerLike,
  SchedulerLike_inContinuation,
  SchedulerLike_now,
  SchedulerLike_requestYield,
  SchedulerLike_schedule,
  SchedulerLike_shouldYield,
  getCurrentTime,
  isInContinuation,
} from "../SchedulerLike";

const supportsPerformanceNow = /*@__PURE__*/ (() =>
  typeof performance === "object" && typeof performance.now === "function")();

const supportsSetImmediate = /*@__PURE__*/ (() =>
  typeof setImmediate === "function")();

const supportsProcessHRTime = /*@__PURE__*/ (() =>
  typeof process === "object" && typeof process.hrtime === "function")();

const supportsIsInputPending = /*@__PURE__*/ (() =>
  typeof navigator === "object" &&
  (navigator as any).scheduling !== undefined &&
  (navigator as any).scheduling.isInputPending !== undefined)();

const scheduleImmediateWithSetImmediate = (
  scheduler: HostSchedulerLike,
  continuation: ContinuationLike,
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

const scheduleDelayed = (
  scheduler: HostSchedulerLike,
  continuation: ContinuationLike,
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
  scheduler: HostSchedulerLike,
  continuation: ContinuationLike,
) => {
  if (supportsSetImmediate) {
    scheduleImmediateWithSetImmediate(scheduler, continuation);
  } else {
    scheduleDelayed(scheduler, continuation, 0);
  }
};

const run = (
  scheduler: HostSchedulerLike,
  continuation: ContinuationLike,
  immmediateOrTimerDisposable: DisposableLike,
) => {
  // clear the immediateOrTimer disposable
  pipe(immmediateOrTimerDisposable, dispose());
  scheduler.startTime = getCurrentTime(scheduler);
  pipe(scheduler, runContinuation(continuation));
};

interface HostSchedulerLike extends DisposableLike {
  startTime: number;
  [SchedulerLike_inContinuation]: boolean;
  [SchedulerLike_now]: number;
}

const hostSchedulerFactory = /*@__PURE__*/ (() => {
  class HostScheduler implements DisposableMixin {
    [DisposableLike_error] = none;
    [DisposableLike_isDisposed] = false;
    readonly [DisposableMixin_disposables] = new Set<DisposableOrTeardown>();

    [SchedulerLike_inContinuation] = false;
    startTime = getCurrentTime(this);

    private yieldRequested = false;

    constructor(private readonly yieldInterval: number) {}

    get [SchedulerLike_now](): number {
      if (supportsPerformanceNow) {
        return performance.now();
      } else if (supportsProcessHRTime) {
        const hr = process.hrtime();
        return hr[0] * 1000 + hr[1] / 1e6;
      } else {
        return Date.now();
      }
    }

    get [SchedulerLike_shouldYield](): boolean {
      const inContinuation = isInContinuation(this);
      const { yieldRequested } = this;

      if (inContinuation) {
        this.yieldRequested = false;
      }

      return (
        inContinuation &&
        (yieldRequested ||
          getCurrentTime(this) > this.startTime + this.yieldInterval ||
          this.isInputPending)
      );
    }

    get isInputPending(): boolean {
      return (
        supportsIsInputPending && (navigator as any).scheduling.isInputPending()
      );
    }

    [SchedulerLike_requestYield](): void {
      this.yieldRequested = true;
    }

    [SchedulerLike_schedule](
      this: HostSchedulerLike,
      continuation: ContinuationLike,
      options?: { readonly delay?: number },
    ) {
      const delay = getDelay(options);

      pipe(this, addIgnoringChildErrors(continuation));

      const continuationIsDisposed = isDisposed(continuation);
      if (!continuationIsDisposed && delay > 0) {
        scheduleDelayed(this, continuation, delay);
      } else if (!continuationIsDisposed) {
        scheduleImmediate(this, continuation);
      }
    }
  }

  return pipe(
    HostScheduler,
    mixinDisposable<HostScheduler, number>(),
    instanceFactory<SchedulerLike, number>(),
  );
})();

export const createHostScheduler = (
  options: {
    readonly yieldInterval?: number;
  } = {},
): SchedulerLike => {
  const { yieldInterval = 5 } = options;
  const hostScheduler = hostSchedulerFactory(yieldInterval);
  return hostScheduler;
};
