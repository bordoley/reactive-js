import { AbstractDisposableContainer } from "./container";
import { DispatcherLike } from "./dispatcher";
import {
  Disposable,
  addTo,
  dispose,
  isDisposed,
  onComplete,
  onDisposed,
} from "./disposable";
import { __DEV__ } from "./env";
import {
  isEmpty,
  length,
  newInstance,
  newInstanceWith,
  pipe,
  raise,
} from "./functions";
import { getDelegate } from "./liftable";
import { Option, isNone, none } from "./option";
import { SchedulerLike, __yield, inContinuation, schedule } from "./scheduler";
import { SinkLike, assertState, notify } from "./source";

const scheduleDrainQueue = <T>(dispatcher: ObserverDelegatingDispatcher<T>) => {
  if (length(dispatcher.nextQueue) === 1) {
    const { observer } = dispatcher;
    pipe(
      getScheduler(observer),
      schedule(dispatcher.continuation),
      addTo(observer),
      onComplete(dispatcher.onContinuationDispose),
    );
  }
};

class ObserverDelegatingDispatcher<T>
  extends Disposable
  implements DispatcherLike<T>
{
  readonly continuation = () => {
    const { nextQueue } = this;

    const { observer } = this;
    while (length(nextQueue) > 0) {
      const next = nextQueue.shift() as T;
      observer.notify(next);
      __yield();
    }
  };

  readonly onContinuationDispose = () => {
    if (isDisposed(this)) {
      pipe(this.observer, dispose(this.error));
    }
  };

  readonly nextQueue: T[] = [];

  constructor(readonly observer: Observer<T>) {
    super();
  }

  get scheduler() {
    return getScheduler(this.observer);
  }

  dispatch(next: T) {
    if (!isDisposed(this)) {
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
        ObserverDelegatingDispatcher,
        newInstanceWith<ObserverDelegatingDispatcher<T>, Observer<T>>(this),
        addTo(this, true),
        onDisposed(e => {
          if (isEmpty(dispatcher.nextQueue)) {
            pipe(this, dispose(e));
          }
        }),
      );

      this._dispatcher = dispatcher;
    }

    return this._dispatcher;
  }

  assertState(this: Observer<T>): void {}

  notify(_: T): void {
    assertState(this);
  }
}
if (__DEV__) {
  Observer.prototype.assertState = function assertStateDev<T>(
    this: Observer<T>,
  ) {
    if (!pipe(this, getScheduler, inContinuation)) {
      raise(
        "Observer.notify() may only be invoked within a scheduled SchedulerContinuation",
      );
    } else if (isDisposed(this)) {
      raise("Observer is disposed");
    }
  };
}

export class AbstractDelegatingObserver<TIn, TOut> extends Observer<TIn> {
  constructor(public readonly delegate: Observer<TOut>) {
    super(getScheduler(delegate));
  }

  notify(_: TIn) {}
}

class DelegatingObserver<T> extends AbstractDelegatingObserver<T, T> {
  notify(next: T) {
    pipe(this, getDelegate, notify(next));
  }
}

export const createDelegatingObserver = <T>(
  delegate: Observer<T>,
): Observer<T> => newInstance(DelegatingObserver, delegate);

export const getScheduler = <T>(observer: Observer<T>): SchedulerLike =>
  observer.scheduler;

export const getDispatcher = <T>(observer: Observer<T>): DispatcherLike<T> =>
  observer.dispatcher;
