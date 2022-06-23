import { addDisposable, addTeardown } from "../disposable";
import { DispatcherLike, SubjectLike } from "../observable";
import { AbstractDisposableObservable } from "./observable";
import { Observer } from "./observer";

import { toDispatcher } from "./toDispatcher";

class SubjectImpl<T>
  extends AbstractDisposableObservable<T>
  implements SubjectLike<T>
{
  private readonly observers: Set<DispatcherLike<T>> = new Set();
  private readonly replayed: T[] = [];

  constructor(private readonly replay: number) {
    super();
  }

  get observerCount() {
    return this.observers.size;
  }

  dispatch(next: T) {
    if (!this.isDisposed) {
      const { replay, replayed } = this;

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

  sink(observer: Observer<T>) {
    // The idea here is that an onSubscribe function may
    // call next from unscheduled sources such as event handlers.
    // So we marshall those events back to the scheduler.
    const dispatcher = toDispatcher(observer);

    if (!this.isDisposed) {
      const { observers } = this;
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
