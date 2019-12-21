import { DisposableLike } from "@reactive-js/disposable";
import { OperatorLike } from "@reactive-js/pipe";
import { SchedulerLike } from "@reactive-js/scheduler";
import { ErrorLike, ObservableLike, SubscriberLike } from "./interfaces";
import { AbstractSubscriber } from "./abstractSubscriber";

class AutoDisposingSubscriber<T> extends AbstractSubscriber<T>
  implements SubscriberLike<T> {
  constructor(scheduler: SchedulerLike) {
    super(scheduler);
  }

  complete(_?: ErrorLike) {
    this.dispose();
  }

  next(_: T) {}
}

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
  const subscriber = new AutoDisposingSubscriber(scheduler);
  observable.subscribe(subscriber);
  return subscriber;
};
