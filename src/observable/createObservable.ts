import { SideEffect1 } from "../functions";
import { DispatcherLike, ObservableLike } from "../observable";
import { AbstractObservable } from "./observable";
import { Observer } from "./observer";
import { toDispatcher } from "./toDispatcher";

class CreateObservable<T> extends AbstractObservable<T> {
  constructor(private readonly f: SideEffect1<Observer<T>>) {
    super();
  }

  sink(observer: Observer<T>) {
    this.f(observer);
  }
}

export const createObservableUnsafe = <T>(
  f: SideEffect1<Observer<T>>,
): ObservableLike<T> => new CreateObservable(f);

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
  createObservableUnsafe(observer => {
    const dispatcher = toDispatcher(observer);
    onSubscribe(dispatcher);
  });
