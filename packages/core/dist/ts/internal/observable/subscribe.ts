import { DisposableLike } from "../../disposable.ts";
import { Operator } from "../../pipe.ts";
import { SchedulerLike } from "../../scheduler.ts";
import { ObservableLike } from "./interfaces.ts";
import {
  AbstractSubscriber,
  assertSubscriberNotifyInContinuation,
} from "./subscriber.ts";

class DefaultSubscriber<T> extends AbstractSubscriber<T> {
  notify(_: T) {
    assertSubscriberNotifyInContinuation(this);
  }
}

/**
 * Safely subscribes to an `ObservableLike` with a `SubscriberLike` instance
 * using the provided scheduler. The returned `DisposableLike`
 * may used to cancel the subscription.
 *
 * @param scheduler The SchedulerLike instance that should be used by the source to notify it's subscriber.
 */
export const subscribe = <T>(
  scheduler: SchedulerLike,
): Operator<ObservableLike<T>, DisposableLike> => (
  observable: ObservableLike<T>,
): DisposableLike => {
  const subscriber = new DefaultSubscriber(scheduler);
  observable.subscribe(subscriber);
  return subscriber;
};
