import { DisposableLike } from "@reactive-js/disposable";
import { OperatorLike } from "@reactive-js/pipe";
import { SchedulerLike } from "@reactive-js/scheduler";
import { ObservableLike } from "./interfaces";
import { Subscriber } from "./subscriber";

/**
 * Safely subscribes an ObservableLike to a SubscriberLike,
 * using the provided scheduler. The returned DisposableLike
 * may used to cancel the subscription.
 */
export const subscribe = <T>(
  scheduler: SchedulerLike,
): OperatorLike<ObservableLike<T>, DisposableLike> => (
  observable: ObservableLike<T>,
): DisposableLike => {
  const subscriber = new Subscriber(scheduler);
  observable.subscribe(subscriber);
  return subscriber;
};
