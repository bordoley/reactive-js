import { dispose } from "../../disposable.ts";
import { SideEffect1 } from "../../functions.ts";
import { ObservableLike, SubscriberLike, DispatcherLike } from "./interfaces.ts";
import { toDispatcher } from "./toDispatcher.ts";

class CreateObservable<T> implements ObservableLike<T> {
  readonly isSynchronous = false;
  constructor(private readonly onSubscribe: SideEffect1<DispatcherLike<T>>) {}

  subscribe(subscriber: SubscriberLike<T>) {
    // The idea here is that an onSubscribe function may
    // call next from unscheduled sources such as event handlers.
    // So we marshall those events back to the scheduler.
    const dispatcher = toDispatcher(subscriber);

    try {
      this.onSubscribe(dispatcher);
    } catch (cause) {
      dispose(subscriber, { cause });
    }
  }
}

/**
 * Factory for safely creating new `ObservableLike` instances. The onSubscribe function
 * is called with a `SafeSubscriberLike` that may be notified from any context.
 *
 * Note, implementations should not do significant blocking work in
 * the onSubscribe function.
 *
 * @param onSubscribe
 */
export const createObservable = <T>(
  onSubscribe: SideEffect1<DispatcherLike<T>>,
): ObservableLike<T> => new CreateObservable(onSubscribe);
