import { AbstractDisposableContainer } from "../container";
import {
  AbstractDisposable,
  addTo,
  addToDisposeOnChildError,
  dispose,
  onComplete,
  onDisposed,
} from "../disposable";
import { __DEV__ } from "../env";
import { pipe, raise } from "../functions";
import { DispatcherLike } from "../observable";
import { Option, isNone, none } from "../option";
import { SchedulerLike, __yield, schedule } from "../scheduler";
import { SinkLike } from "../source";

const scheduleDrainQueue = <T>(dispatcher: ObserverDelegatingDispatcher<T>) => {
  if (dispatcher.nextQueue.length === 1) {
    const { observer } = dispatcher;
    pipe(
      observer.scheduler,
      schedule(dispatcher.continuation),
      addToDisposeOnChildError(observer),
      onComplete(dispatcher.onContinuationDispose),
    );
  }
};

class ObserverDelegatingDispatcher<T>
  extends AbstractDisposable
  implements DispatcherLike<T>
{
  readonly continuation = () => {
    const { nextQueue } = this;

    const { observer } = this;
    while (nextQueue.length > 0) {
      const next = nextQueue.shift() as T;
      observer.notify(next);
      __yield();
    }
  };

  readonly onContinuationDispose = () => {
    if (this.isDisposed) {
      pipe(this.observer, dispose(this.error));
    }
  };

  readonly nextQueue: T[] = [];

  constructor(readonly observer: Observer<T>) {
    super();
  }

  dispatch(next: T) {
    if (!this.isDisposed) {
      this.nextQueue.push(next);
      scheduleDrainQueue(this);
    }
  }
}

/**
 * Abstract base class for implementing the `ObserverLike` interface.
 */
export class Observer<T>
  extends AbstractDisposableContainer
  implements SinkLike<T>
{
  private _dispatcher: Option<DispatcherLike<T>> = none;

  constructor(readonly scheduler: SchedulerLike) {
    super();
  }

  get dispatcher(): DispatcherLike<T> {
    if (isNone(this._dispatcher)) {
      const dispatcher = pipe(
        new ObserverDelegatingDispatcher(this),
        addTo(this),
        onDisposed(e => {
          if (dispatcher.nextQueue.length === 0) {
            pipe(this, dispose(e));
          }
        }),
      );

      this._dispatcher = dispatcher;
    }

    return this._dispatcher;
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
