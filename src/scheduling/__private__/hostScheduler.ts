import { getDelay } from "../../__internal__/optionalArgs";
import {
  SchedulerLike_inContinuation,
  runContinuation,
} from "../../__internal__/scheduling";
import {
  init as disposableInit,
  properties as disposableProperties,
  prototype as disposablePrototype,
} from "../../__internal__/util/Disposable";
import { createObjectFactory } from "../../__internal__/util/Object";
import { ContinuationLike } from "../../scheduling/ContinuationLike";
import {
  DisposableLike,
  addIgnoringChildErrors,
  addTo,
  create as createDisposable,
  dispose,
  isDisposed,
  onDisposed,
} from "../../util/DisposableLike";
import { pipe } from "../../util/functions";
import {
  SchedulerLike,
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

const isInputPending = (): boolean =>
  supportsIsInputPending && (navigator as any).scheduling.isInputPending();

const scheduleImmediateWithSetImmediate = (
  scheduler: typeof properties & typeof prototype,
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
  scheduler: typeof properties & typeof prototype,
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
  scheduler: typeof properties & typeof prototype,
  continuation: ContinuationLike,
) => {
  if (supportsSetImmediate) {
    scheduleImmediateWithSetImmediate(scheduler, continuation);
  } else {
    scheduleDelayed(scheduler, continuation, 0);
  }
};

const run = (
  scheduler: typeof properties & typeof prototype,
  continuation: ContinuationLike,
  immmediateOrTimerDisposable: DisposableLike,
) => {
  // clear the immediateOrTimer disposable
  pipe(immmediateOrTimerDisposable, dispose());
  scheduler.startTime = getCurrentTime(scheduler);
  pipe(scheduler, runContinuation(continuation));
};

const properties = {
  ...disposableProperties,
  [SchedulerLike_inContinuation]: false,
  startTime: 0,
  yieldInterval: 0,
  yieldRequested: false,
};

const prototype = {
  ...disposablePrototype,

  get [SchedulerLike_now](): number {
    if (supportsPerformanceNow) {
      return performance.now();
    } else if (supportsProcessHRTime) {
      const hr = process.hrtime();
      return hr[0] * 1000 + hr[1] / 1e6;
    } else {
      return Date.now();
    }
  },

  get [SchedulerLike_shouldYield](): boolean {
    const self = this as unknown as typeof properties & SchedulerLike;

    const inContinuation = isInContinuation(self);
    const { yieldRequested } = self;

    if (inContinuation) {
      self.yieldRequested = false;
    }

    return (
      inContinuation &&
      (yieldRequested ||
        getCurrentTime(self) > self.startTime + self.yieldInterval ||
        isInputPending())
    );
  },

  [SchedulerLike_requestYield](this: typeof properties): void {
    this.yieldRequested = true;
  },

  [SchedulerLike_schedule](
    this: typeof properties & SchedulerLike,
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
  },
};

const createInstance = /*@__PURE__*/ createObjectFactory(prototype, properties);

export const create = (
  options: {
    readonly yieldInterval?: number;
  } = {},
): SchedulerLike => {
  const { yieldInterval = 5 } = options;
  const instance = createInstance();
  disposableInit(instance);
  instance.yieldInterval = yieldInterval;
  instance.startTime = getCurrentTime(instance);
  return instance;
};
