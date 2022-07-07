import { getDelegate } from "../__internal__.delegating";
import { __DEV__ } from "../__internal__.env";
import { DispatcherLike } from "../dispatcher";
import {
  Disposable,
  DisposableOrTeardown,
  Error,
  addTo,
  dispose,
  isDisposed,
  onComplete,
  onDisposed,
} from "../disposable";
import {
  getLength,
  isEmpty,
  newInstance,
  newInstanceWith,
  pipe,
  raise,
} from "../functions";
import { ObserverLike, getScheduler } from "../observer";
import { Option, isNone, none } from "../option";
import { notify } from "../reactiveSink";
import {
  SchedulerLike,
  __yield,
  isInContinuation,
  schedule,
} from "../scheduler";

const scheduleDrainQueue = <T>(dispatcher: ObserverDelegatingDispatcher<T>) => {
  if (getLength(dispatcher.nextQueue) === 1) {
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
    while (getLength(nextQueue) > 0) {
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

  constructor(readonly observer: ObserverLike<T>) {
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
export class Observer<T> extends Disposable implements ObserverLike<T> {
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

  notify(_: T): void {}
}

export class AbstractDisposableBindingDelegatingObserver<
  TIn,
  TOut,
  TObserver extends ObserverLike<TOut> = ObserverLike<TOut>,
> implements ObserverLike<TIn>
{
  private _dispatcher: Option<DispatcherLike<TIn>> = none;

  constructor(public readonly delegate: TObserver) {}

  get dispatcher(): DispatcherLike<TIn> {
    if (isNone(this._dispatcher)) {
      const dispatcher = pipe(
        ObserverDelegatingDispatcher,
        newInstanceWith<ObserverDelegatingDispatcher<TIn>, ObserverLike<TIn>>(
          this,
        ),
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

  get error(): Option<Error> {
    return this.delegate.error;
  }
  get isDisposed(): boolean {
    return this.delegate.isDisposed;
  }

  get scheduler(): SchedulerLike {
    return getScheduler(this.delegate);
  }

  add(
    this: this,
    disposable: DisposableOrTeardown,
    ignoreChildErrors: boolean,
  ): void {
    this.delegate.add(disposable, ignoreChildErrors);
  }
  dispose(this: this, error?: Error | undefined): void {
    this.delegate.dispose(error);
  }

  notify(_: TIn): void {}
}

export class AbstractDelegatingObserver<
  TIn,
  TOut,
  TObserver extends ObserverLike<TOut> = ObserverLike<TOut>,
> extends Observer<TIn> {
  constructor(public readonly delegate: TObserver) {
    super(getScheduler(delegate));
  }

  notify(_: TIn) {}
}

export class DelegatingObserver<
  T,
  TObserver extends ObserverLike<T> = ObserverLike<T>,
> extends AbstractDelegatingObserver<T, T, TObserver> {
  notify(next: T) {
    pipe(this, getDelegate, notify(next));
  }
}

export const createDelegatingObserver = <T>(
  delegate: ObserverLike<T>,
): ObserverLike<T> =>
  newInstance<DelegatingObserver<T>, ObserverLike<T>>(
    DelegatingObserver,
    delegate,
  );

export const decorateNotifyWithAssertions = (
  ObserverClass: new (...any: readonly any[]) => ObserverLike<unknown>,
) => {
  if (__DEV__) {
    const notify = ObserverClass.prototype.notify;

    ObserverClass.prototype.notify = function notifyWithAssertion<T>(
      this: ObserverLike<T>,
      next: T,
    ) {
      if (!pipe(this, getScheduler, isInContinuation)) {
        raise(
          "Observer.notify() may only be invoked within a scheduled SchedulerContinuation",
        );
      } else if (isDisposed(this)) {
        raise("Observer is disposed");
      }
      notify.call(this, next);
    };
  }
};
