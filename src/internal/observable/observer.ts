import {
  addDisposable,
  AbstractDisposable,
  bindDisposables,
} from "../../disposable";
import { ignore, SideEffect1, raise } from "../../functions";
import {
  SchedulerContinuationLike,
  SchedulerLike,
  yield$ as yieldScheduler,
} from "../../scheduler";
import { __DEV__ } from "../env";
import { ObserverLike } from "./interfaces";

const assertObserverStateProduction = ignore;
const assertObserverStateDev = <T>(observer: ObserverLike<T>) => {
  if (!observer.inContinuation) {
    raise(
      "Observer.notify() may only be invoked within a scheduled SchedulerContinuation",
    );
  } else if (observer.isDisposed) {
    raise("Observer is disposed");
  }
};

const _assertObserverState = __DEV__
  ? assertObserverStateDev
  : assertObserverStateProduction;

export const assertObserverState: SideEffect1<ObserverLike<
  unknown
>> = _assertObserverState;

/**
 * Abstract base class for implementing the `ObserverLike` interface.
 */
export abstract class AbstractObserver<T, TDelegate extends SchedulerLike>
  extends AbstractDisposable
  implements ObserverLike<T> {
  inContinuation = false;

  private readonly scheduler: SchedulerLike;

  constructor(readonly delegate: TDelegate) {
    super();

    this.scheduler =
      delegate instanceof AbstractObserver ? delegate.scheduler : delegate;
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

  abstract notify(_: T): void;

  /** @ignore */
  onRunStatusChanged(status: boolean) {
    this.inContinuation = status;
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
  TB
> extends AbstractObserver<TA, ObserverLike<TB>> {
  constructor(delegate: ObserverLike<TB>) {
    super(delegate);
    addDisposable(delegate, this);
  }
}

export abstract class AbstractAutoDisposingDelegatingObserver<
  TA,
  TB
> extends AbstractObserver<TA, ObserverLike<TB>> {
  constructor(delegate: ObserverLike<TB>) {
    super(delegate);
    bindDisposables(this, delegate);
  }
}

class DelegatingObserver<T> extends AbstractObserver<T, ObserverLike<T>> {
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

export const yield$ = <T>(
  observer: ObserverLike<T>,
  next: T,
  delay: number,
) => {
  observer.notify(next);
  yieldScheduler(observer, delay);
};
