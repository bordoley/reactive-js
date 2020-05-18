import {
  AbstractDisposable,
  dispose,
  addOnDisposedWithError,
  addOnDisposedWithoutErrorTeardown,
  addTeardown,
  addDisposable,
} from "../../disposable";
import { YieldableLike, schedule } from "../../scheduler";
import { DispatcherLike, ObserverLike } from "./interfaces";

const scheduleDrainQueue = <T>(dispatcher: ObserverDelegatingDispatcher<T>) => {
  if (dispatcher.nextQueue.length === 1) {
    const { observer } = dispatcher;
    const continuationSubcription = schedule(observer, dispatcher.continuation);
    addOnDisposedWithError(continuationSubcription, observer);
    addOnDisposedWithoutErrorTeardown(
      continuationSubcription,
      dispatcher.onContinuationDispose,
    );
  }
};

class ObserverDelegatingDispatcher<T> extends AbstractDisposable
  implements DispatcherLike<T> {
  readonly continuation = ($: YieldableLike) => {
    const nextQueue = this.nextQueue;
    const observer = this.observer;

    let observerIsDisposed = observer.isDisposed;
    let nextQueueLength = nextQueue.length;
    while (nextQueueLength > 0 && !observerIsDisposed) {
      const next = nextQueue.shift() as T;
      observer.notify(next);

      observerIsDisposed = observer.isDisposed;
      nextQueueLength = nextQueue.length;
      if (nextQueueLength > 0 && !observerIsDisposed) {
        $.yield();
      }
    }
  };

  readonly onContinuationDispose = () => {
    if (this.isDisposed) {
      dispose(this.observer as ObserverLike<T>, this.error);
    }
  };

  readonly nextQueue: T[] = [];

  constructor(readonly observer: ObserverLike<T>) {
    super();
    addTeardown(this, e => {
      if (this.nextQueue.length === 0) {
        dispose(observer, e);
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
