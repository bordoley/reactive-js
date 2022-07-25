import { getDelay } from "../__internal__/optionalArgs";
import { runContinuation } from "../__internal__/scheduling";
import {
  properties as disposableProperties,
  prototype as disposablePrototype,
} from "../__internal__/util/Disposable";
import {
  Object_init,
  createObjectFactory,
  init,
} from "../__internal__/util/Object";
import {
  Function1,
  Function2,
  SideEffect,
  newInstanceWith,
  pipe,
  raise,
} from "../functions";
import {
  ContinuationLike,
  ContinuationLike_run,
  SchedulerLike,
  SchedulerLike_inContinuation,
  SchedulerLike_now,
  SchedulerLike_requestYield,
  SchedulerLike_schedule,
  SchedulerLike_shouldYield,
} from "../scheduling";
import { DisposableLike, Error, Option } from "../util";
import {
  addIgnoringChildErrors,
  addTo,
  create as createDisposable,
  dispose,
  isDisposed,
  onDisposed,
} from "../util/DisposableLike";
import { isNone, isSome, none } from "../util/Option";

export const isInContinuation = (scheduler: {
  readonly [SchedulerLike_inContinuation]: boolean;
}): boolean => scheduler[SchedulerLike_inContinuation];

export const getCurrentTime = (scheduler: {
  readonly [SchedulerLike_now]: number;
}): number => scheduler[SchedulerLike_now];

export const requestYield = (scheduler: {
  [SchedulerLike_requestYield](): void;
}): void => scheduler[SchedulerLike_requestYield]();

export const shouldYield = (scheduler: {
  [SchedulerLike_shouldYield]: boolean;
}): boolean => scheduler[SchedulerLike_shouldYield];

const isYieldError = (e: unknown): e is YieldError => e instanceof YieldError;

class YieldError {
  constructor(readonly delay: number) {}
}

let currentScheduler: Option<SchedulerLike> = none;

const createContinuation: Function2<
  SchedulerLike,
  SideEffect,
  ContinuationLike
> = /*@__PURE__*/ (() => {
  const properties: typeof disposableProperties & {
    scheduler: SchedulerLike;
    f: SideEffect;
  } = {
    ...disposableProperties,
    scheduler: none as unknown as SchedulerLike,
    f: () => {},
  };

  const prototype = {
    ...disposablePrototype,
    [ContinuationLike_run](this: typeof properties & ContinuationLike) {
      if (!isDisposed(this)) {
        let error: Option<Error> = none;
        let yieldError: Option<YieldError> = none;

        const { scheduler } = this;
        const oldCurrentScheduler = currentScheduler;
        currentScheduler = scheduler;
        try {
          this.f();
        } catch (cause) {
          if (isYieldError(cause)) {
            yieldError = cause;
          } else {
            error = { cause };
          }
        }
        currentScheduler = oldCurrentScheduler;

        if (isSome(yieldError)) {
          pipe(scheduler, schedule(this, yieldError));
        } else {
          pipe(this, dispose(error));
        }
      }
    },
    [Object_init](
      this: typeof properties,
      scheduler: SchedulerLike,
      f: SideEffect,
    ) {
      init(disposablePrototype, this);
      this.scheduler = scheduler;
      this.f = f;
    },
  };

  return createObjectFactory<
    typeof prototype,
    typeof properties,
    SchedulerLike,
    SideEffect
  >(prototype, properties);
})();

export const __yield = (options?: { delay?: number }) => {
  const delay = getDelay(options);

  const scheduler = isNone(currentScheduler)
    ? raise<SchedulerLike>(
        "__yield effect may only be invoked from within a SchedulerContinuation",
      )
    : currentScheduler;

  if (delay > 0 || shouldYield(scheduler)) {
    pipe(YieldError, newInstanceWith(delay), raise);
  }
};

export const schedule =
  (
    f: SideEffect | ContinuationLike,
    options?: { readonly delay?: number },
  ): Function1<SchedulerLike, DisposableLike> =>
  scheduler => {
    const continuation =
      typeof f === "function" ? createContinuation(scheduler, f) : f;
    scheduler[SchedulerLike_schedule](continuation, options);
    return continuation;
  };

export const create = /*@__PURE__*/ (() => {
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
    scheduler: typeof properties & SchedulerLike,
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
    scheduler: typeof properties & SchedulerLike,
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
    scheduler: typeof properties & SchedulerLike,
    continuation: ContinuationLike,
  ) => {
    if (supportsSetImmediate) {
      scheduleImmediateWithSetImmediate(scheduler, continuation);
    } else {
      scheduleDelayed(scheduler, continuation, 0);
    }
  };

  const run = (
    scheduler: typeof properties & SchedulerLike,
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
    [Object_init](this: typeof properties, yieldInterval: number) {
      init(disposablePrototype, this);
      this.yieldInterval = yieldInterval;
    },

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

  const createInstance = /*@__PURE__*/ createObjectFactory<
    typeof prototype,
    typeof properties,
    number
  >(prototype, properties);

  return (
    options: {
      readonly yieldInterval?: number;
    } = {},
  ): SchedulerLike => {
    const { yieldInterval = 5 } = options;
    return createInstance(yieldInterval);
  };
})();
