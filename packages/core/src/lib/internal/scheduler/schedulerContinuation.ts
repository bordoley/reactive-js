import {
  AbstractDisposable,
  Exception,
  addTeardown,
  dispose,
  DisposableLike,
} from "../../disposable";
import { SideEffect1 } from "../../functions";
import { none, Option, isSome } from "../../option";
import {
  SchedulerContinuationLike,
  SchedulerContinuationRunStatusChangedListenerLike,
  SchedulerLike,
} from "./interfaces";

const notifyListeners = (
  listeners: Set<SchedulerContinuationRunStatusChangedListenerLike>,
  state: boolean,
) => {
  for (const listener of listeners) {
    listener.onRunStatusChanged(state);
  }
};

const isYieldError = (e: unknown): e is YieldError => e instanceof YieldError;

class YieldError {
  constructor(readonly delay: number) {}
}

class SchedulerContinuationImpl<T extends SchedulerLike>
  extends AbstractDisposable
  implements SchedulerContinuationLike {
  private listeners: Set<
    SchedulerContinuationRunStatusChangedListenerLike
  > = new Set();

  constructor(
    private readonly scheduler: T,
    private readonly f: SideEffect1<T>,
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
      let error: Option<Exception> = none;
      let yieldError: Option<YieldError> = none;

      notifyListeners(listeners, true);
      try {
        this.f(this.scheduler);
      } catch (cause) {
        if (isYieldError(cause)) {
          yieldError = cause;
        } else {
          error = { cause };
        }
      }
      notifyListeners(listeners, false);

      if (isSome(yieldError)) {
        this.scheduler.schedule(this, yieldError);
      } else {
        dispose(this, error);
      }
    }
  }
}

export const continue$ = (continuation: SchedulerContinuationLike): void => {
  continuation.continue();
};

export const yield$ = (delay: number) => {
  throw new YieldError(delay);
};

export const schedule = <T extends SchedulerLike>(
  scheduler: T,
  f: SideEffect1<T>,
  options = { delay: 0 },
): DisposableLike => {
  const continuation = new SchedulerContinuationImpl(scheduler, f);
  scheduler.schedule(continuation, options);
  return continuation;
};
