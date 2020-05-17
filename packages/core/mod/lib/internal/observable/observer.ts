import {
  add,
  AbstractDisposable,
  addDisposableOrTeardown,
} from "../../disposable.ts";
import { ignore, SideEffect1, pipe } from "../../functions.ts";
import { SchedulerContinuationLike, SchedulerLike } from "../../scheduler.ts";
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

  constructor(readonly scheduler: SchedulerLike) {
    super();
    this.scheduler = scheduler;
  }

  /** @ignore */
  get now() {
    return this.scheduler.now;
  }

  abstract notify(_: T): void;

  /** @ignore */
  onRunStatusChanged(status: boolean) {
    this.inContinuation = status;
  }

  /** @ignore */
  schedule(continuation: SchedulerContinuationLike, options = { delay: 0 }) {
    continuation.addListener("onRunStatusChanged", this);
    add(this, continuation);
    this.scheduler.schedule(continuation, options);
  }

  /** @ignore */
  yield(options?: { delay: number }) {
    return this.scheduler.yield(options);
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
    add(delegate, this);
  }
}

export abstract class AbstractAutoDisposingDelegatingObserver<
  TA,
  TB
> extends AbstractObserver<TA> {
  constructor(readonly delegate: ObserverLike<TB>) {
    super(delegate);
    add(delegate, this);
    add(this, delegate);
  }
}

class DelegatingObserver<T> extends AbstractDelegatingObserver<T, T> {
  constructor(readonly delegate: ObserverLike<T>) {
    super(delegate);
  }

  notify(next: T) {
    this.delegate.notify(next);
  }
}

export const createDelegatingObserver = <T>(
  delegate: ObserverLike<T>,
): ObserverLike<T> => new DelegatingObserver(delegate);

export const createAutoDisposingDelegatingObserver = <T>(
  delegate: ObserverLike<T>,
): ObserverLike<T> =>
  pipe(delegate, createDelegatingObserver, addDisposableOrTeardown(delegate));
