import {
  AbstractDisposable,
  Error,
  addDisposable,
  addOnDisposedWithError,
  addOnDisposedWithoutErrorTeardown,
  addTeardown,
  dispose,
} from "../disposable";
import { pipe } from "../functions";
import { DispatcherLike } from "../observable";
import { Option } from "../option";
import { __yield, schedule } from "../scheduler";
import { Observer } from "./observer";

const scheduleDrainQueue = <T>(dispatcher: ObserverDelegatingDispatcher<T>) => {
  if (dispatcher.nextQueue.length === 1) {
    const { observer } = dispatcher;
    const continuationSubcription = pipe(
      observer,
      schedule(dispatcher.continuation),
    );
    addOnDisposedWithError(continuationSubcription, observer);
    addOnDisposedWithoutErrorTeardown(
      continuationSubcription,
      dispatcher.onContinuationDispose,
    );
  }
};

function onDispose(
  this: ObserverDelegatingDispatcher<unknown>,
  e: Option<Error>,
) {
  if (this.nextQueue.length === 0) {
    pipe(this.observer, dispose(e));
  }
}

class ObserverDelegatingDispatcher<T>
  extends AbstractDisposable
  implements DispatcherLike<T>
{
  readonly continuation = () => {
    const { nextQueue } = this;

    while (nextQueue.length > 0) {
      const next = nextQueue.shift() as T;
      this.observer.notify(next);
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
 * Returns a `DispatcherLike` that delegates to the provided observer.
 *
 * @param observer The `ObserverLike` instance to wrap in a `SafeObserverLike`.
 */
export const createObserverDispatcher = <T>(
  delegate: Observer<T>,
): DispatcherLike<T> => {
  const observer = new ObserverDelegatingDispatcher(delegate);
  addTeardown(observer, onDispose);
  addDisposable(delegate, observer);
  return observer;
};
