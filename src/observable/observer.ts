import {
  AbstractDisposable,
  addDisposable,
  bindDisposables,
} from "../disposable";
import { __DEV__ } from "../env";
import { SideEffect1, ignore, raise } from "../functions";
import { ObservableLike, ObserverLike } from "../observable";
import { SchedulerContinuationLike, SchedulerLike } from "../scheduler";

const assertStateProduction = ignore;
function assertStateDev<T>(this: ObserverLike<T>) {
  if (!this.inContinuation) {
    raise(
      "Observer.notify() may only be invoked within a scheduled SchedulerContinuation",
    );
  } else if (this.isDisposed) {
    raise("Observer is disposed");
  }
}

const assertState = __DEV__ ? assertStateDev : assertStateProduction;

export abstract class AbstractObserver<T>
  extends AbstractDisposable
  implements ObserverLike<T>
{
  abstract inContinuation: boolean;

  /** @ignore */
  assertState(this: ObserverLike<T>): void {}

  abstract now: number;

  abstract shouldYield: boolean;

  notify(_: T): void {}

  /** @ignore */
  onRunStatusChanged(status: boolean) {
    this.inContinuation = status;
  }

  /** @ignore */
  abstract requestYield(): void;

  /** @ignore */
  abstract schedule(
    continuation: SchedulerContinuationLike,
    options?: { readonly delay?: number },
  ): void;
}
AbstractObserver.prototype.assertState = assertState;

/**
 * Abstract base class for implementing the `ObserverLike` interface.
 */
export abstract class AbstractSchedulerDelegatingObserver<
    T,
    TDelegate extends SchedulerLike,
  >
  extends AbstractObserver<T>
  implements ObserverLike<T>
{
  inContinuation = false;

  private readonly scheduler: SchedulerLike;

  readonly assertState = assertState;

  constructor(readonly delegate: TDelegate) {
    super();

    this.scheduler =
      delegate instanceof AbstractSchedulerDelegatingObserver
        ? delegate.scheduler
        : delegate;
  }

  /** @ignore */
  get now() {
    return this.scheduler.now;
  }

  /** @ignore */
  get shouldYield() {
    return (
      this.inContinuation && (this.isDisposed || this.scheduler.shouldYield)
    );
  }

  /** @ignore */
  onRunStatusChanged(status: boolean) {
    this.inContinuation = status;
  }

  /** @ignore */
  requestYield(): void {
    this.delegate.requestYield();
  }

  /** @ignore */
  schedule(
    continuation: SchedulerContinuationLike,
    options?: { readonly delay?: number },
  ) {
    continuation.addListener("onRunStatusChanged", this);
    addDisposable(this, continuation);

    // Note that we schedule on the delegate so that it too may listen to
    // the onRunStatusChanged event.
    this.delegate.schedule(continuation, options);
  }
}

/**
 * Abstract base class for implementing instances of the `ObserverLike` interface
 * which delegate notifications to a parent `ObserverLike` instance
 *
 * @noInheritDoc
 */
export abstract class AbstractDelegatingObserver<
  TA,
  TB,
> extends AbstractSchedulerDelegatingObserver<TA, ObserverLike<TB>> {
  constructor(delegate: ObserverLike<TB>) {
    super(delegate);
    addDisposable(delegate, this);
  }
}

export abstract class AbstractAutoDisposingDelegatingObserver<
  TA,
  TB,
> extends AbstractSchedulerDelegatingObserver<TA, ObserverLike<TB>> {
  constructor(delegate: ObserverLike<TB>) {
    super(delegate);
    bindDisposables(this, delegate);
  }
}

class DelegatingObserver<T> extends AbstractSchedulerDelegatingObserver<
  T,
  ObserverLike<T>
> {
  notify(next: T) {
    this.delegate.notify(next);
  }
}

export const createDelegatingObserver = <T>(
  delegate: ObserverLike<T>,
): ObserverLike<T> => {
  const observer = new DelegatingObserver(delegate);
  addDisposable(delegate, observer);
  return observer;
};

export const createAutoDisposingDelegatingObserver = <T>(
  delegate: ObserverLike<T>,
): ObserverLike<T> => {
  const observer = new DelegatingObserver(delegate);
  bindDisposables(delegate, observer);
  return observer;
};

export const observe =
  <T>(observer: ObserverLike<T>): SideEffect1<ObservableLike<T>> =>
  observable =>
    observable.observe(observer);
