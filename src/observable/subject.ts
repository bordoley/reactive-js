import { DispatcherLike, dispatch } from "../dispatcher";
import { Disposable, add, isDisposed, onDisposed } from "../disposable";
import { getLength, newInstance, pipe, raise } from "../functions";
import { MulticastObservableLike } from "../observable";
import { Observer } from "../observer";

export class Subject<T>
  extends Disposable
  implements MulticastObservableLike<T>
{
  private readonly dispatchers: Set<DispatcherLike<T>> =
    newInstance<Set<DispatcherLike<T>>>(Set);
  private readonly replayed: T[] = [];

  constructor(public readonly replay: number = 1) {
    super();
  }

  get T(): T {
    return raise();
  }

  get TContainerOf(): Subject<this["T"]> {
    return raise();
  }

  get TLiftableState(): Observer<this["T"]> {
    return raise();
  }

  isEnumerable?: boolean;

  get observerCount() {
    return this.dispatchers.size;
  }

  publish(next: T) {
    if (!isDisposed(this)) {
      const { replay, replayed } = this;

      if (replay > 0) {
        replayed.push(next);
        if (getLength(replayed) > replay) {
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
