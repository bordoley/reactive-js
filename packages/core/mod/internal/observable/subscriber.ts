import { AbstractDisposable } from "../../disposable.ts";
import { alwaysVoid } from "../../functions.ts";
import { SchedulerContinuationLike, SchedulerLike } from "../../scheduler.ts";
import { __DEV__ } from "../env.ts";
import { SubscriberLike } from "./interfaces.ts";

const assertSubscriberNotifyInContinuationProduction = alwaysVoid;
const assertSubscriberNotifyInContinuationDev = <T>(
  subscriber: SubscriberLike<T>,
) => {
  if (!subscriber.inContinuation) {
    throw new Error(
      "Subscriber.notify() may only be invoked within a scheduled SchedulerContinuation",
    );
  }
};

const _assertSubscriberNotifyInContinuation = __DEV__
  ? assertSubscriberNotifyInContinuationDev
  : assertSubscriberNotifyInContinuationProduction;

export const assertSubscriberNotifyInContinuation: (
  subscriber: SubscriberLike<unknown>,
) => void = _assertSubscriberNotifyInContinuation;

/**
 * Abstract base class for implementing the `SubscriberLike` interface.
 */
export abstract class AbstractSubscriber<T> extends AbstractDisposable
  implements SubscriberLike<T> {
  inContinuation = false;

  constructor(readonly scheduler: SchedulerLike) {
    super();
    this.scheduler = scheduler;
  }

  get now() {
    return this.scheduler.now;
  }

  abstract notify(_: T): void;

  onRunStatusChanged(status: boolean) {
    this.inContinuation = status;
  }

  schedule(continuation: SchedulerContinuationLike, options = { delay: 0 }) {
    continuation.addListener("onRunStatusChanged", this);
    this.add(continuation);
    this.scheduler.schedule(continuation, options);
  }

  shouldYield() {
    return this.scheduler.shouldYield();
  }
}

/**
 * Abstract base class for implementing instances of the `SubscriberLike` interface
 * which delegate notifications to a parent `SubscriberLike` instance
 *
 * @noInheritDoc
 */
export abstract class AbstractDelegatingSubscriber<
  TA,
  TB
> extends AbstractSubscriber<TA> {
  constructor(readonly delegate: SubscriberLike<TB>) {
    super(delegate);
    delegate.add(this);
  }
}
