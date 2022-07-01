import { DispatcherLike, dispatch } from "../dispatcher";
import { add, isDisposed, onDisposed } from "../disposable";
import { length, newInstance, pipe } from "../functions";
import { MulticastObservableLike } from "../observable";
import { Observer } from "../observer";
import { DisposableObservable } from "./observable";

export class Subject<T>
  extends DisposableObservable<T>
  implements MulticastObservableLike<T>
{
  private readonly dispatchers: Set<DispatcherLike<T>> =
    newInstance<Set<DispatcherLike<T>>>(Set);
  private readonly replayed: T[] = [];

  constructor(public readonly replay: number = 1) {
    super();
  }

  get observerCount() {
    return this.dispatchers.size;
  }

  publish(next: T) {
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
