import { SubscriberLike, toSafeObserver } from "@reactive-js/rx-subscriber";
import { SchedulerLike } from "@reactive-js/scheduler";
import { connect } from "./connect";
import { ObservableLike, pipe } from "./observable";
import { observe } from "./observe";

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
