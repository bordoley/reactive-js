import { AbstractDisposable } from "../../disposable.ts";
import {
  SchedulerContinuationLike,
  SchedulerLike,
} from "../../scheduler.ts";
import { SubscriberLike } from "./interfaces.ts";

const assertSubscriberNotifyInContinuationProduction = <T>(
  _subscriber: SubscriberLike<T>,
) => {};
const assertSubscriberNotifyInContinuationDev = <T>(
  subscriber: SubscriberLike<T>,
) => {
  if (!subscriber.inContinuation) {
    throw new Error(
      "Subscriber.notify() may only be invoked within a scheduled SchedulerContinuation",
    );
  }
};

const _assertSubscriberNotifyInContinuation =
  process.env.NODE_ENV === "production"
    ? assertSubscriberNotifyInContinuationProduction
    : assertSubscriberNotifyInContinuationDev;

export const assertSubscriberNotifyInContinuation = _assertSubscriberNotifyInContinuation;

/**
 * Abstract base class for implementing the `SubscriberLike` interface.
 *
 * @ignore
 */
export abstract class AbstractSubscriber<T> extends AbstractDisposable
  implements SubscriberLike<T> {
  inContinuation = false;

  constructor(private readonly scheduler: SchedulerLike) {
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

  schedule(continuation: SchedulerContinuationLike, delay = 0) {
    continuation.addListener("onRunStatusChanged", this);
    this.add(continuation);
    this.scheduler.schedule(continuation, delay);
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
