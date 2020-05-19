import {
  addDisposable,
  AbstractDisposable,
  bindDisposables,
} from "../../disposable.ts";
import { ignore, SideEffect1 } from "../../functions.ts";
import {
  SchedulerContinuationLike,
  SchedulerLike,
  yield$ as yieldScheduler,
} from "../../scheduler.ts";
import { __DEV__ } from "../env.ts";
import { ObserverLike } from "./interfaces.ts";

const assertObserverStateProduction = ignore;
const assertObserverStateDev = <T>(observer: ObserverLike<T>) => {
  if (!observer.inContinuation) {
    throw new Error(
      "Observer.notify() may only be invoked within a scheduled SchedulerContinuation",
    );
  } else if (observer.isDisposed) {
    throw new Error("Observer is disposed");
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
export abstract class AbstractObserver<T> extends AbstractDisposable
  implements ObserverLike<T> {
  inContinuation = false;

  private rawScheduler: SchedulerLike;

  constructor(readonly scheduler: SchedulerLike) {
    super();
    this.scheduler = scheduler;

    this.rawScheduler =
      scheduler instanceof AbstractObserver
        ? scheduler.rawScheduler
        : scheduler;
  }

  /** @ignore */
  get now() {
    return this.rawScheduler.now;
  }

  get shouldYield() {
    return this.isDisposed || this.rawScheduler.shouldYield;
  }

  abstract notify(_: T): void;

  /** @ignore */
  onRunStatusChanged(status: boolean) {
    this.inContinuation = status;
  }

  /** @ignore */
  schedule(continuation: SchedulerContinuationLike, options = { delay: 0 }) {
    continuation.addListener("onRunStatusChanged", this);
    addDisposable(this, continuation);
    this.scheduler.schedule(continuation, options);
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
> extends AbstractObserver<TA> {
  constructor(readonly delegate: ObserverLike<TB>) {
    super(delegate);
    addDisposable(delegate, this);
  }
}

export abstract class AbstractAutoDisposingDelegatingObserver<
  TA,
  TB
> extends AbstractObserver<TA> {
  constructor(readonly delegate: ObserverLike<TB>) {
    super(delegate);
    bindDisposables(this, delegate);
  }
}

class DelegatingObserver<T> extends AbstractObserver<T> {
  constructor(readonly delegate: ObserverLike<T>) {
    super(delegate);
  }

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

export const yield$ = <T>(observer: ObserverLike<T>, next: T, delay = 0) => {
  observer.notify(next);

  if (delay > 0 || observer.shouldYield) {
    yieldScheduler(delay);
  }
};
