import { add, createDisposable, dispose } from "@reactive-js/disposable";
import {
  SchedulerContinuationLike,
  SchedulerLike,
} from "@reactive-js/scheduler";
import { SubscriberLike } from "./interfaces";

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
export abstract class AbstractSubscriber<T> implements SubscriberLike<T> {
  readonly add = add;
  readonly disposable = createDisposable();
  readonly dispose = dispose;

  constructor(private readonly scheduler: SchedulerLike) {
    this.scheduler = scheduler;
  }

  get inContinuation() {
    return this.scheduler.inContinuation;
  }

  get isDisposed(): boolean {
    return this.disposable.isDisposed;
  }

  get now() {
    return this.scheduler.now;
  }

  abstract notify(_: T): void;

  schedule(
    continuation: SchedulerContinuationLike,
    delay = 0
  ) {
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
