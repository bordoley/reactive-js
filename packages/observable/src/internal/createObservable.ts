import {
  ObservableLike,
  SafeSubscriberLike,
  SubscriberLike,
} from "./interfaces";
import { enumerate } from "./observable";
import { toSafeSubscriber } from "./toSafeSubscriber";

class CreateObservable<T> implements ObservableLike<T> {
  constructor(
    private readonly onSubscribe: (subscriber: SafeSubscriberLike<T>) => void,
  ) {}

  readonly enumerate = enumerate;
  readonly isSynchronous = false;

  subscribe(subscriber: SubscriberLike<T>) {
    // The idea here is that an onSubscribe function may
    // call next from unscheduled sources such as event handlers.
    // So we marshall those events back to the scheduler.
    const safeSubscriber = toSafeSubscriber(subscriber);
    try {
      this.onSubscribe(safeSubscriber);
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
  onSubscribe: (subscriber: SafeSubscriberLike<T>) => void,
): ObservableLike<T> => new CreateObservable(onSubscribe);
