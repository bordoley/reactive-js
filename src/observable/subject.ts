import { dispatch } from "../dispatcher";
import { Disposable, add, isDisposed, onDisposed } from "../disposable";
import {
  Function1,
  SideEffect1,
  getLength,
  newInstance,
  pipe,
  raise,
} from "../functions";
import { MulticastObservableLike } from "../observable";
import { Observer, getDispatcher } from "../observer";

export class Subject<T>
  extends Disposable
  implements MulticastObservableLike<T>
{
  private readonly observers: Set<Observer<T>> =
    newInstance<Set<Observer<T>>>(Set);
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
    return this.observers.size;
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

      for (const observer of this.observers) {
        pipe(observer, getDispatcher, dispatch(next));
      }
    }
  }

  sink(observer: Observer<T>) {
    if (!isDisposed(this)) {
      const { observers } = this;
      observers.add(observer);

      pipe(
        observer,
        onDisposed(_ => {
          observers.delete(observer);
        }),
      );
    }

    // The idea here is that an onSubscribe function may
    // call next from unscheduled sources such as event handlers.
    // So we marshall those events back to the scheduler.
    const { dispatcher } = observer;

    for (const next of this.replayed) {
      pipe(dispatcher, dispatch(next));
    }

    pipe(this, add(dispatcher, true));
  }
}

export const publish =
  <T>(v: T): Function1<Subject<T>, Subject<T>> =>
  subject => {
    subject.publish(v);
    return subject;
  };

export const publishTo =
  <T>(subject: Subject<T>): SideEffect1<T> =>
  v => {
    subject.publish(v);
    return v;
  };
