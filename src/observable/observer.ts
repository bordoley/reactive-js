import { AbstractDisposableContainer } from "../container";
import { __DEV__ } from "../env";
import { raise } from "../functions";
import { SchedulerLike } from "../scheduler";
import { SinkLike } from "../source";

/**
 * Abstract base class for implementing the `ObserverLike` interface.
 */
export class Observer<T>
  extends AbstractDisposableContainer
  implements SinkLike<T>
{
  constructor(readonly scheduler: SchedulerLike) {
    super();
  }

  assertState(this: Observer<T>): void {}

  notify(_: T): void {}
}
if (__DEV__) {
  Observer.prototype.assertState = function assertStateDev<T>(
    this: Observer<T>,
  ) {
    if (!this.scheduler.inContinuation) {
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
    super(delegate.scheduler);
  }

  notify(next: T) {
    this.delegate.notify(next);
  }
}

export const createDelegatingObserver = <T>(
  delegate: Observer<T>,
): Observer<T> => new DelegatingObserver(delegate);
