import { SubscriberLike, toSafeObserver } from "@reactive-js/rx-subscriber";
import { connect } from "./connect";
import { ObservableLike, pipe } from "./observable";
import { observe } from "./observe"
import { SchedulerLike } from "@reactive-js/scheduler";

export const subscribeOn = <T>(
  observable: ObservableLike<T>,
  scheduler: SchedulerLike,
): ObservableLike<T> => {
  const subscribe = (subscriber: SubscriberLike<T>) => {
    const observer = toSafeObserver(subscriber);

    const innerSubscription = connect(
      pipe(observable, observe(observer)),
      scheduler,
    );

    subscriber.add(innerSubscription);
    innerSubscription.add(() => subscriber.remove(innerSubscription));
  };

  return { subscribe };
};