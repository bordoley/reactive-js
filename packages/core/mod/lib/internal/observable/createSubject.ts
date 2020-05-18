import { AbstractDisposable, addTeardown, addDisposable } from "../../disposable.ts";
import { dispatch } from "./dispatcher.ts";
import { SubjectLike, ObserverLike, DispatcherLike } from "./interfaces.ts";
import { toDispatcher } from "./toDispatcher.ts";

class SubjectImpl<T> extends AbstractDisposable implements SubjectLike<T> {
  private readonly observers: Set<DispatcherLike<T>> = new Set();
  private readonly replayed: T[] = [];

  readonly isSynchronous = false;

  constructor(private readonly replayCount: number) {
    super();
  }

  get observerCount() {
    return this.observers.size;
  }

  dispatch(next: T) {
    if (!this.isDisposed) {
      const replayed = this.replayed;
      const replayCount = this.replayCount;

      if (replayCount > 0) {
        replayed.push(next);
        if (replayed.length > replayCount) {
          replayed.shift();
        }
      }

      for (const observer of this.observers) {
        dispatch(observer, next);
      }
    }
  }

  observe(observer: ObserverLike<T>) {
    // The idea here is that an onSubscribe function may
    // call next from unscheduled sources such as event handlers.
    // So we marshall those events back to the scheduler.
    const dispatcher = toDispatcher(observer);

    if (!this.isDisposed) {
      const observers = this.observers;
      observers.add(dispatcher);

      addTeardown(observer, _e => {
        observers.delete(dispatcher);
      });
    }

    for (const next of this.replayed) {
      dispatch(dispatcher, next);
    }

    addDisposable(this, dispatcher);
  }
}

export const createSubject = <T>(replayCount = 0): SubjectLike<T> =>
  new SubjectImpl(replayCount);
