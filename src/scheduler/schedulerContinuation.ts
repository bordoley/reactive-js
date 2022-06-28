import {
  AbstractDisposable,
  DisposableLike,
  Error,
  dispose,
  isDisposed,
} from "../disposable";
import { Function1, SideEffect, pipe, raise } from "../functions";
import { Option, isNone, isSome, none } from "../option";
import { SchedulerContinuationLike, SchedulerLike } from "../scheduler";

const isYieldError = (e: unknown): e is YieldError => e instanceof YieldError;

export class YieldError {
  constructor(readonly delay: number) {}
}

let currentScheduler: Option<SchedulerLike> = none;

class SchedulerContinuationImpl
  extends AbstractDisposable
  implements SchedulerContinuationLike
{
  constructor(
    private readonly scheduler: SchedulerLike,
    private readonly f: SideEffect,
  ) {
    super();
  }

  continue() {
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
        scheduler.schedule(this, yieldError);
      } else {
        pipe(this, dispose(error));
      }
    }
  }
}

export const run = (continuation: SchedulerContinuationLike): void => {
  continuation.continue();
};

export const __yield = (options: { delay?: number } = {}) => {
  const { delay = Math.max(options.delay ?? 0, 0) } = options;

  const scheduler = isNone(currentScheduler)
    ? raise<SchedulerLike>(
        "__yield effect may only be invoked from within a SchedulerContinuation",
      )
    : currentScheduler;

  if (delay > 0 || scheduler.shouldYield) {
    throw new YieldError(delay);
  }
};

export const schedule =
  (
    f: SideEffect,
    options?: { readonly delay?: number },
  ): Function1<SchedulerLike, DisposableLike> =>
  scheduler => {
    const continuation = new SchedulerContinuationImpl(scheduler, f);
    scheduler.schedule(continuation, options);
    return continuation;
  };
