import {
  connect,
  observe,
  Observable,
  ObservableResourceLike,
  ObservableLike,
  SubscriberLike,
} from "@reactive-js/rx-core";

export const use = <T>(
  factory: () => ObservableResourceLike<T>,
): ObservableLike<T> => {
  const subscribe = (subscriber: SubscriberLike<T>) => {
    const resource = factory();

    subscriber.subscription
      .add(
        connect(
          Observable.lift(resource, observe(subscriber)),
          subscriber.scheduler,
        ),
      )
      .add(resource);
  };

  return Observable.create(subscribe);
};
