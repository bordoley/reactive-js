import { AbstractDisposable, addDisposable } from "../disposable";
import { __DEV__ } from "../env";
import { SideEffect1, raise } from "../functions";
import { ObservableLike } from "../observable";
import { SchedulerContinuationLike, SchedulerLike } from "../scheduler";
import { Sink, SinkLike } from "../sink";

/**
 * Abstract base class for implementing the `ObserverLike` interface.
 */
export class Observer<T>
  extends AbstractDisposable
  implements SinkLike<T>, SchedulerLike
{
  inContinuation = false;
  private readonly _scheduler: SchedulerLike;

  constructor(readonly scheduler: SchedulerLike) {
    super();
    this._scheduler =
      scheduler instanceof Observer ? scheduler._scheduler : scheduler;
  }

  get type(): this {
    return this;
  }
  get T(): unknown {
    return undefined;
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

// FIXME: Need to bind the disposables.
export const createDelegatingObserver = <T>(
  delegate: Observer<T>,
): Observer<T> => new DelegatingObserver(delegate);

export const sink =
  <T>(observer: Observer<T>): SideEffect1<ObservableLike<T>> =>
  observable =>
    observable.observe(observer);

export const sinkT: Sink<ObservableLike<unknown>> = {
  sink,
};
