import { AbstractDisposableContainer } from "../container";
import { addDisposable } from "../disposable";
import { __DEV__ } from "../env";
import { raise } from "../functions";
import { SchedulerContinuationLike, SchedulerLike } from "../scheduler";
import { SinkLike } from "../source";

/**
 * Abstract base class for implementing the `ObserverLike` interface.
 */
export class Observer<T>
  extends AbstractDisposableContainer
  implements SinkLike<T>, SchedulerLike
{
  inContinuation = false;
  private readonly _scheduler: SchedulerLike;

  constructor(readonly scheduler: SchedulerLike) {
    super();
    this._scheduler =
      scheduler instanceof Observer ? scheduler._scheduler : scheduler;
  }

  /** @ignore */
  get now() {
    return this._scheduler.now;
  }

  /** @ignore */
  get shouldYield() {
    return (
      this.inContinuation && (this.isDisposed || this._scheduler.shouldYield)
    );
  }

  assertState(this: Observer<T>): void {}

  notify(_: T): void {}

  /** @ignore */
  onRunStatusChanged(status: boolean) {
    this.inContinuation = status;
  }

  /** @ignore */
  requestYield(): void {
    this._scheduler.requestYield();
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
    this.scheduler.schedule(continuation, options);
  }
}
if (__DEV__) {
  Observer.prototype.assertState = function assertStateDev<T>(
    this: Observer<T>,
  ) {
    if (!this.inContinuation) {
      raise(
        "Observer.notify() may only be invoked within a scheduled SchedulerContinuation",
      );
    } else if (this.isDisposed) {
      raise("Observer is disposed");
    }
  };
}

class DelegatingObserver<T> extends Observer<T> {
  constructor(public readonly delegate: Observer<T>) {
    super(delegate);
  }

  notify(next: T) {
    this.delegate.notify(next);
  }
}

export const createDelegatingObserver = <T>(
  delegate: Observer<T>,
): Observer<T> => new DelegatingObserver(delegate);
