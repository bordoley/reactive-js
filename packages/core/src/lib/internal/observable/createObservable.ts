import { dispose } from "../../disposable";
import { SideEffect1 } from "../../functions";
import { ObservableLike, ObserverLike, DispatcherLike } from "./interfaces";
import { toDispatcher } from "./toDispatcher";

class CreateObservable<T> implements ObservableLike<T> {
  readonly isSynchronous = false;
  constructor(private readonly onSubscribe: SideEffect1<DispatcherLike<T>>) {}

  observe(observer: ObserverLike<T>) {
    // The idea here is that an onSubscribe function may
    // call next from unscheduled sources such as event handlers.
    // So we marshall those events back to the scheduler.
    const dispatcher = toDispatcher(observer);

    try {
      this.onSubscribe(dispatcher);
    } catch (cause) {
      dispose(observer, { cause });
    }
  }
}

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
): ObservableLike<T> => new CreateObservable(onSubscribe);
