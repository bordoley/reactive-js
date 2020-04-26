import { ObservableLike, SubscriberLike, DispatcherLike } from "./interfaces";
import { toDispatcher } from "./toDispatcher";

class CreateObservable<T> implements ObservableLike<T> {
  readonly isSynchronous = false;
  constructor(
    private readonly onSubscribe: (dispatcher: DispatcherLike<T>) => void,
  ) {}

  subscribe(subscriber: SubscriberLike<T>) {
    // The idea here is that an onSubscribe function may
    // call next from unscheduled sources such as event handlers.
    // So we marshall those events back to the scheduler.
    const dispatcher = toDispatcher(subscriber);

    try {
      this.onSubscribe(dispatcher);
    } catch (cause) {
      subscriber.dispose({ cause });
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
  onSubscribe: (dispatcher: DispatcherLike<T>) => void,
): ObservableLike<T> => new CreateObservable(onSubscribe);
