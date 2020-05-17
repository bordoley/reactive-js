import { AbstractDisposable, add, dispose, Exception } from "../../disposable";
import { isSome } from "../../option";
import { YieldableLike, schedule } from "../../scheduler";
import { DispatcherLike, ObserverLike } from "./interfaces";

const scheduleDrainQueue = <T>(dispatcher: ObserverDelegatingDispatcher<T>) => {
  if (dispatcher.nextQueue.length === 1) {    
    add(
      schedule(dispatcher.observer, dispatcher.continuation),
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
    while (nextQueue.length > 0 && !observerIsDisposed) {
      const next = nextQueue.shift() as T;
      observer.notify(next);

      observerIsDisposed = observer.isDisposed;
      if (nextQueue.length > 0 && !observerIsDisposed) {
        $.yield();
      }
    }
  }

  readonly onContinuationDispose = (e?: Exception) => {
    // FIXME: Maybe publish both?
    const error = e ?? this.error;
    if (isSome(error) || this.isDisposed) {
      dispose(this.observer as ObserverLike<T>, error);
    }
  };

  readonly nextQueue: Array<T> = [];

  constructor(readonly observer: ObserverLike<T>) {
    super();
    add(this, e => {
      if (this.nextQueue.length === 0) {
        dispose(observer, e);
      }
    });
    add(observer, this);
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
