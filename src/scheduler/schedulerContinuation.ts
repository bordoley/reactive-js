import {
  AbstractDisposable,
  DisposableLike,
  Error,
  addTeardown,
  dispose,
} from "../disposable";
import { Function1, SideEffect, pipe, raise } from "../functions";
import { Option, isNone, isSome, none } from "../option";
import {
  SchedulerContinuationLike,
  SchedulerContinuationRunStatusChangedListenerLike,
  SchedulerLike,
} from "../scheduler";

const notifyListeners = (
  listeners: Set<SchedulerContinuationRunStatusChangedListenerLike>,
  state: boolean,
) => {
  for (const listener of listeners) {
    listener.onRunStatusChanged(state);
  }
};

const isYieldError = (e: unknown): e is YieldError => e instanceof YieldError;

export class YieldError {
  constructor(readonly delay: number) {}
}

let currentScheduler: Option<SchedulerLike> = none;

class SchedulerContinuationImpl
  extends AbstractDisposable
  implements SchedulerContinuationLike {
  private listeners: Set<SchedulerContinuationRunStatusChangedListenerLike> = new Set();

  constructor(
    private readonly scheduler: SchedulerLike,
    private readonly f: SideEffect,
  ) {
    super();

    addTeardown(this, _e => {
      this.listeners.clear();
    });
  }

  addListener(
    _ev: "onRunStatusChanged",
    listener: SchedulerContinuationRunStatusChangedListenerLike,
  ) {
    if (!this.isDisposed) {
      this.listeners.add(listener);
    }
  }

  removeListener(
    _ev: "onRunStatusChanged",
    listener: SchedulerContinuationRunStatusChangedListenerLike,
  ) {
    this.listeners.delete(listener);
  }

  continue() {
    if (!this.isDisposed) {
      const listeners = this.listeners;
      let error: Option<Error> = none;
      let yieldError: Option<YieldError> = none;

      notifyListeners(listeners, true);

      const oldCurrentScheduler = currentScheduler;
      currentScheduler = this.scheduler;
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
      notifyListeners(listeners, false);

      if (isSome(yieldError)) {
        this.scheduler.schedule(this, yieldError);
      } else {
        pipe(this, dispose(error));
      }
    }
  }
}

export const run = (continuation: SchedulerContinuationLike): void => {
  continuation.continue();
};

export const __yield = (delay = 0) => {
  const scheduler = isNone(currentScheduler)
    ? raise<SchedulerLike>(
        "__currentScheduler effect may only be invoked from within a SchedulerContinuation",
      )
    : currentScheduler;

  if (delay > 0 || scheduler.shouldYield) {
    throw new YieldError(delay);
  }
};

export const schedule = (
  f: SideEffect,
  options?: { readonly delay?: number },
): Function1<SchedulerLike, DisposableLike> => scheduler => {
  const continuation = new SchedulerContinuationImpl(scheduler, f);
  scheduler.schedule(continuation, options);
  return continuation;
};
