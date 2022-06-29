import { DispatcherLike, dispatch } from "../dispatcher";
import { add, isDisposed, onDisposed } from "../disposable";
import { length, pipe } from "../functions";
import { SubjectLike } from "../observable";
import { Observer } from "../observer";
import { AbstractDisposableObservable } from "./observable";

class SubjectImpl<T>
  extends AbstractDisposableObservable<T>
  implements SubjectLike<T>
{
  private readonly dispatchers: Set<DispatcherLike<T>> = new Set();
  private readonly replayed: T[] = [];

  constructor(public readonly replay: number) {
    super();
  }

  get observerCount() {
    return this.dispatchers.size;
  }

  dispatch(next: T) {
    if (!isDisposed(this)) {
      const { replay, replayed } = this;

      if (replay > 0) {
        replayed.push(next);
        if (length(replayed) > replay) {
          replayed.shift();
        }
      }

      for (const observer of this.dispatchers) {
        pipe(observer, dispatch(next));
      }
    }
  }

  sink(observer: Observer<T>) {
    // The idea here is that an onSubscribe function may
    // call next from unscheduled sources such as event handlers.
    // So we marshall those events back to the scheduler.
    const { dispatcher } = observer;

    if (!isDisposed(this)) {
      const { dispatchers } = this;
      dispatchers.add(dispatcher);

      pipe(
        observer,
        onDisposed(_ => {
          dispatchers.delete(dispatcher);
        }),
      );
    }

    for (const next of this.replayed) {
      pipe(dispatcher, dispatch(next));
    }

    pipe(this, add(dispatcher, true));
  }
}

export const createSubject = <T>(
  options: { readonly replay?: number } = {},
): SubjectLike<T> => {
  const { replay = 0 } = options;
  return new SubjectImpl(replay);
};
