import { DisposableLike } from "@reactive-js/disposable";
import { OperatorLike } from "@reactive-js/pipe";
import { SchedulerLike } from "@reactive-js/scheduler";
import { ObservableLike } from "./interfaces";
import { AbstractSubscriber } from "./subscriber";

class DefaultSubscriber<T> extends AbstractSubscriber<T> {
  notify(_: T) {}
}

/**
 * Safely subscribes to an `ObservableLike` with a `SubscriberLike` instance
 * using the provided scheduler. The returned `DisposableLike`
 * may used to cancel the subscription.
 *
 * @param scheduler The scheduler that should be used by the source to notify it's subscriber.
 */
export const subscribe = <T>(
  scheduler: SchedulerLike,
): OperatorLike<ObservableLike<T>, DisposableLike> => (
  observable: ObservableLike<T>,
): DisposableLike => {
  const subscriber = new DefaultSubscriber(scheduler);
  observable.subscribe(subscriber);
  return subscriber.disposable;
};
