import {
  create as createDisposable,
  DisposableLike,
} from "@reactive-js/disposable";

import { createAutoDisposing } from "@reactive-js/rx-subscriber";
import { SchedulerLike } from "@reactive-js/scheduler";
import { ObservableLike } from "./observable";

/**
 * Safely connects an ObservableLike to a SubscriberLike,
 * using the provided scheduler. The returned DisposableLike
 * may used to cancel the subscription.
 */
export const connect = <T>(
  observable: ObservableLike<T>,
  scheduler: SchedulerLike,
): DisposableLike => {
  const subscription = createDisposable();
  const subscriber = createAutoDisposing(scheduler, subscription);
  observable.subscribe(subscriber);
  subscriber.connect();
  return subscription;
};