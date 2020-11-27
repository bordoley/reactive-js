import {
  AbstractDisposable,
  DisposableLike,
  Error,
  addTeardown,
  dispose,
} from "../disposable";
import { Function1, SideEffect1, pipe } from "../functions";
import { Option, isSome, none } from "../option";
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

class SchedulerContinuationImpl<T extends SchedulerLike>
  extends AbstractDisposable
  implements SchedulerContinuationLike {
  private listeners: Set<SchedulerContinuationRunStatusChangedListenerLike> = new Set();

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
      let error: Option<Error> = none;
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
        pipe(this, dispose(error));
      }
    }
  }
}

export const run = (continuation: SchedulerContinuationLike): void => {
  continuation.continue();
};

export const yield$ = (scheduler: SchedulerLike, delay: number) => {
  if (delay > 0 || scheduler.shouldYield) {
    throw new YieldError(delay);
  }
};

export const schedule = <T extends SchedulerLike>(
  f: SideEffect1<T>,
  options?: { readonly delay?: number },
): Function1<T, DisposableLike> => scheduler => {
  const continuation = new SchedulerContinuationImpl(scheduler, f);
  scheduler.schedule(continuation, options);
  return continuation;
};
