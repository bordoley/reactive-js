import { getDelay } from "../__internal__.optionalArgs";
import {
  Disposable,
  DisposableLike,
  Error,
  dispose,
  isDisposed,
} from "../disposable";
import {
  Function1,
  SideEffect,
  instanceFactory,
  newInstance,
  pipe,
  raise,
} from "../functions";
import { Option, isNone, isSome, none } from "../option";
import { SchedulerContinuationLike, SchedulerLike } from "../scheduler";
import { shouldYield } from "./scheduler";

const isYieldError = (e: unknown): e is YieldError => e instanceof YieldError;

export class YieldError {
  constructor(readonly delay: number) {}
}

let currentScheduler: Option<SchedulerLike> = none;

class SchedulerContinuationImpl
  extends Disposable
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

export const __yield = (options?: { delay?: number }) => {
  const delay = getDelay(options);

  const scheduler = isNone(currentScheduler)
    ? raise<SchedulerLike>(
        "__yield effect may only be invoked from within a SchedulerContinuation",
      )
    : currentScheduler;

  if (delay > 0 || shouldYield(scheduler)) {
    pipe(delay, instanceFactory(YieldError), raise);
  }
};

export const schedule =
  (
    f: SideEffect,
    options?: { readonly delay?: number },
  ): Function1<SchedulerLike, DisposableLike> =>
  scheduler => {
    const continuation = newInstance(SchedulerContinuationImpl, scheduler, f);
    scheduler.schedule(continuation, options);
    return continuation;
  };
