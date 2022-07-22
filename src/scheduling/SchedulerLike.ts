import { getDelay } from "../__internal__/optionalArgs";
import { SchedulerLike_inContinuation } from "../__internal__/scheduling";
import {
  init as disposableInit,
  properties as disposableProperties,
  prototype as disposablePrototype,
} from "../__internal__/util/Disposable";
import { createObjectFactory } from "../__internal__/util/Object";
import {
  ContinuationLike,
  ContinuationLike_run,
} from "../scheduling/ContinuationLike";
import {
  DisposableLike,
  Error,
  dispose,
  isDisposed,
} from "../util/DisposableLike";
import { Option, isNone, isSome, none } from "../util/Option";
import {
  Function1,
  SideEffect,
  newInstanceWith,
  pipe,
  raise,
} from "../util/functions";

export { SchedulerLike_inContinuation } from "../__internal__/scheduling";
export const SchedulerLike_now = Symbol("SchedulerLike_now");
export const SchedulerLike_requestYield = Symbol("SchedulerLike_requestYield");
export const SchedulerLike_shouldYield = Symbol("SchedulerLike_shouldYield");
export const SchedulerLike_schedule = Symbol("SchedulerLike_schedule");

export type SchedulerOptions = { readonly delay?: number };

export interface SchedulerLike extends DisposableLike {
  readonly [SchedulerLike_inContinuation]: boolean;
  readonly [SchedulerLike_now]: number;
  readonly [SchedulerLike_shouldYield]: boolean;

  /**
   * Request the scheduler to yield.
   */
  [SchedulerLike_requestYield](): void;

  [SchedulerLike_schedule](
    continuation: ContinuationLike,
    options?: SchedulerOptions,
  ): void;
}

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

const continuationProperties: typeof disposableProperties & {
  scheduler: SchedulerLike;
  f: SideEffect;
} = {
  ...disposableProperties,
  scheduler: none as unknown as SchedulerLike,
  f: () => {},
};

const continuationPrototype = {
  ...disposablePrototype,
  [ContinuationLike_run](
    this: typeof continuationProperties & ContinuationLike,
  ) {
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
};

const createContinuationInstance = /*@__PURE__*/ createObjectFactory(
  continuationPrototype,
  continuationProperties,
);

const createContinuation = (
  scheduler: SchedulerLike,
  f: SideEffect,
): ContinuationLike => {
  const instance = createContinuationInstance();
  disposableInit(instance);
  instance.scheduler = scheduler;
  instance.f = f;
  return instance;
};

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

export { create } from "./__private__/hostScheduler";
