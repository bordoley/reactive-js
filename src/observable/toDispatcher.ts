import { DispatcherLike } from "../dispatcher";
import {
  AbstractDisposable,
  addDisposable,
  addOnDisposedWithError,
  addOnDisposedWithoutErrorTeardown,
  addTeardown,
  dispose,
} from "../disposable";
import { pipe } from "../functions";
import { ObserverLike } from "../observable";
import { schedule } from "../scheduler";
import { yield$ } from "./observer";

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

class ObserverDelegatingDispatcher<T>
  extends AbstractDisposable
  implements DispatcherLike<T> {
  readonly continuation = () => {
    const nextQueue = this.nextQueue;
    const observer = this.observer;

    while (nextQueue.length > 0) {
      const next = nextQueue.shift() as T;
      yield$(observer, next, 0);
    }
  };

  readonly onContinuationDispose = () => {
    if (this.isDisposed) {
      pipe(this.observer as ObserverLike<T>, dispose(this.error));
    }
  };

  readonly nextQueue: T[] = [];

  constructor(readonly observer: ObserverLike<T>) {
    super();
    addTeardown(this, e => {
      if (this.nextQueue.length === 0) {
        pipe(observer, dispose(e));
      }
    });
    addDisposable(observer, this);
  }

  dispatch(next: T) {
    if (!this.isDisposed) {
      this.nextQueue.push(next);
      scheduleDrainQueue(this);
    }
  }
}

/**
 * Returns a `SafeObserverLike` that delegates to the provided observer.
 *
 * @param observer The `ObserverLike` instance to wrap in a `SafeObserverLike`.
 */
export const toDispatcher = <T>(observer: ObserverLike<T>): DispatcherLike<T> =>
  new ObserverDelegatingDispatcher(observer);
