import { getDelay } from "../__internal__/optionalArgs";
import { mixinDisposable } from "../__internal__/util/DisposableLike";
import { EnumeratorLike } from "../ix/EnumeratorLike";
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
  newInstance,
  newInstanceWith,
  pipe,
  raise,
} from "../util/functions";
import { ContinuationLike, ContinuationLike_run } from "./ContinuationLike";

export const SchedulerLike_inContinuation = Symbol(
  "SchedulerLike_inContinuation",
);
export const SchedulerLike_now = Symbol("SchedulerLike_now");
export const SchedulerLike_requestYield = Symbol("SchedulerLike_requestYield");
export const SchedulerLike_shouldYield = Symbol("SchedulerLike_shouldYield");
export const SchedulerLike_schedule = Symbol("SchedulerLike_schedule");

export type SchedulerOptions = { readonly delay?: number };

export interface SchedulerLike<
  TOptions extends SchedulerOptions = SchedulerOptions,
> extends DisposableLike {
  readonly [SchedulerLike_inContinuation]: boolean;
  readonly [SchedulerLike_now]: number;
  readonly [SchedulerLike_shouldYield]: boolean;

  /**
   * Request the scheduler to yield.
   */
  [SchedulerLike_requestYield](): void;

  [SchedulerLike_schedule](
    continuation: ContinuationLike,
    options?: TOptions,
  ): void;
}

export type PrioritySchedulerOptions = {
  readonly priority: number;
  readonly delay?: number;
};

/**
 * A scheduler which schedules work according to it's priority.
 *
 * @noInheritDoc
 */
export interface PrioritySchedulerLike
  extends SchedulerLike<PrioritySchedulerOptions> {}

export interface VirtualTimeSchedulerLike
  extends EnumeratorLike<void>,
    SchedulerLike {}

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

const Continuation = /*@__PURE__*/ (() => {
  class Continuation {
    constructor(
      private readonly scheduler: SchedulerLike,
      private readonly f: SideEffect,
    ) {}

    [ContinuationLike_run](this: this & ContinuationLike) {
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
    }
  }

  return pipe(
    Continuation,
    mixinDisposable<SchedulerLike, SideEffect, Continuation>(),
  );
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
      typeof f === "function" ? newInstance(Continuation, scheduler, f) : f;
    scheduler[SchedulerLike_schedule](continuation, options);
    return continuation;
  };
