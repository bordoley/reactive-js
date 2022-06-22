import { Function1, SideEffect1, pipe } from "../functions";
import { DispatcherLike, ObservableLike } from "../observable";
import { SchedulerLike } from "../scheduler";
import { AbstractSource, sinkInto } from "../source";

import { defer } from "./defer";
import { Observer } from "./observer";
import { toDispatcher } from "./toDispatcher";

/**
 * Factory for safely creating new `ObservableLike` instances. The onSubscribe function
 * is called with a `SafeObserverLike` that may be notified from any context.
 *
 * Note, implementations should not do significant blocking work in
 * the onSubscribe function.
 *
 * @param onSubscribe
 */
export const createObservable = <T>(
  onSubscribe: SideEffect1<DispatcherLike<T>>,
): ObservableLike<T> =>
  defer(observer => () => {
    const dispatcher = toDispatcher(observer);
    onSubscribe(dispatcher);
  });

class Observable<T>
  extends AbstractSource<T, Observer<T>>
  implements ObservableLike<T>
{
  constructor(private readonly f: Function1<SchedulerLike, ObservableLike<T>>) {
    super();
  }

  sink(observer: Observer<T>) {
    const observable = this.f(observer);
    pipe(observable, sinkInto(observer));
  }
}

export const createObservableWithScheduler = <T>(
  f: Function1<SchedulerLike, ObservableLike<T>>,
): ObservableLike<T> => new Observable(f);
