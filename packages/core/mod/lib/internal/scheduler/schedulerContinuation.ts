import {
  AbstractDisposable,
  Exception,
  addTeardown,
  dispose,
  DisposableLike,
} from "../../disposable.ts";
import { SideEffect1 } from "../../functions.ts";
import { none, Option, isSome } from "../../option.ts";
import {
  SchedulerContinuationLike,
  SchedulerContinuationRunStatusChangedListenerLike,
  YieldError,
  SchedulerLike,
  PrioritySchedulerLike,
  YieldableLike,
} from "./interfaces.ts";

const notifyListeners = (
  listeners: Set<SchedulerContinuationRunStatusChangedListenerLike>,
  state: boolean,
) => {
  for (const listener of listeners) {
    listener.onRunStatusChanged(state);
  }
};

const isYieldError = (e: unknown): e is YieldError => e instanceof YieldError;

class SchedulerContinuationImpl extends AbstractDisposable
  implements SchedulerContinuationLike {
  private listeners: Set<
    SchedulerContinuationRunStatusChangedListenerLike
  > = new Set();

  constructor(private readonly f: SideEffect1<YieldableLike>) {
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

  continue(state: YieldableLike) {
    if (!this.isDisposed) {
      const listeners = this.listeners;
      let error: Option<Exception> = none;
      let yieldError: Option<YieldError> = none;

      notifyListeners(listeners, true);
      try {
        this.f(state);
      } catch (cause) {
        if (isYieldError(cause)) {
          yieldError = cause;
        } else {
          error = { cause };
        }
      }
      notifyListeners(listeners, false);

      if (isSome(yieldError)) {
        throw yieldError;
      } else {
        dispose(this, error);
      }
    }
  }
}

export const runContinuation = (
  scheduler: SchedulerLike,
  continuation: SchedulerContinuationLike,
): void => {
  try {
    continuation.continue(scheduler);
  } catch (cause) {
    if (isYieldError(cause)) {
      scheduler.schedule(continuation, cause);
    } else {
      continuation.dispose({ cause });
    }
  }
};

export const schedule = (
  scheduler: SchedulerLike,
  f: SideEffect1<YieldableLike>,
  options = { delay: 0 },
): DisposableLike => {
  const continuation = new SchedulerContinuationImpl(f);
  scheduler.schedule(continuation, options);
  return continuation;
};

export const scheduleWithPriority = (
  scheduler: PrioritySchedulerLike,
  f: SideEffect1<YieldableLike>,
  options: { priority: number; delay?: number },
): DisposableLike => {
  const continuation = new SchedulerContinuationImpl(f);
  scheduler.schedule(continuation, options);
  return continuation;
};
