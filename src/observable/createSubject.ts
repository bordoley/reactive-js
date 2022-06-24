import { addDisposable, addTeardown } from "../disposable";
import { DispatcherLike, SubjectLike } from "../observable";
import { AbstractDisposableObservable } from "./observable";
import { Observer } from "./observer";

class SubjectImpl<T>
  extends AbstractDisposableObservable<T>
  implements SubjectLike<T>
{
  private readonly dispatchers: Set<DispatcherLike<T>> = new Set();
  private readonly replayed: T[] = [];

  constructor(private readonly replay: number) {
    super();
  }

  get observerCount() {
    return this.dispatchers.size;
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

      for (const observer of this.dispatchers) {
        observer.dispatch(next);
      }
    }
  }

  sink(observer: Observer<T>) {
    // The idea here is that an onSubscribe function may
    // call next from unscheduled sources such as event handlers.
    // So we marshall those events back to the scheduler.
    const dispatcher = observer.dispatcher;

    if (!this.isDisposed) {
      const { dispatchers } = this;
      dispatchers.add(dispatcher);

      addTeardown(observer, _e => {
        dispatchers.delete(dispatcher);
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
