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

    const innerSubscription = connect(
      Observable.lift(
        resource,
        observe({
          next: (next: T) => subscriber.next(next),
          complete: (error?: Error) => {
            subscriber.complete(error);
            subscriber.subscription.remove(innerSubscription).remove(resource);
          },
        }),
      ),
      subscriber.scheduler,
    );

    subscriber.subscription.add(innerSubscription).add(resource);
  };

  return Observable.create(subscribe);
};
