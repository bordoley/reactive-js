import { AbstractDisposable, addDisposable, addTeardown } from "../disposable";
import { DispatcherLike, ObserverLike, SubjectLike } from "../observable";

import { toDispatcher } from "./toDispatcher";

class SubjectImpl<T> extends AbstractDisposable implements SubjectLike<T> {
  get type(): this {
    return this;
  }
  get T(): unknown {
    return undefined;
  }

  private readonly observers: Set<DispatcherLike<T>> = new Set();
  private readonly replayed: T[] = [];

  readonly isSynchronous = false;

  constructor(private readonly replay: number) {
    super();
  }

  get observerCount() {
    return this.observers.size;
  }

  dispatch(next: T) {
    if (!this.isDisposed) {
      const replayed = this.replayed;
      const replay = this.replay;

      if (replay > 0) {
        replayed.push(next);
        if (replayed.length > replay) {
          replayed.shift();
        }
      }

      for (const observer of this.observers) {
        observer.dispatch(next);
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
      dispatcher.dispatch(next);
    }

    addDisposable(this, dispatcher);
  }
}

export const createSubject = <T>(
  options: { readonly replay?: number } = {},
): SubjectLike<T> => {
  const { replay = 0 } = options;
  return new SubjectImpl(replay);
};
