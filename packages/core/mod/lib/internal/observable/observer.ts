import { add, AbstractDisposable } from "../../disposable.ts";
import { ignore, SideEffect1 } from "../../functions.ts";
import {
  SchedulerContinuationLike,
  SchedulerLike,
  schedule,
} from "../../scheduler.ts";
import { __DEV__ } from "../env.ts";
import { ObserverLike } from "./interfaces.ts";

const assertObserverNotifyInContinuationProduction = ignore;
const assertObserverNotifyInContinuationDev = <T>(
  observer: ObserverLike<T>,
) => {
  if (!observer.inContinuation) {
    throw new Error(
      "Observer.notify() may only be invoked within a scheduled SchedulerContinuation",
    );
  }
};

const _assertObserverNotifyInContinuation = __DEV__
  ? assertObserverNotifyInContinuationDev
  : assertObserverNotifyInContinuationProduction;

export const assertObserverNotifyInContinuation: SideEffect1<ObserverLike<
  unknown
>> = _assertObserverNotifyInContinuation;

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
    schedule(this.scheduler, continuation, options);
  }

  /** @ignore */
  shouldYield() {
    return this.scheduler.shouldYield();
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
