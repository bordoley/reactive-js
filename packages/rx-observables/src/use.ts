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
  delay?: number,
  priority?: number,
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
            subscriber.subscription.remove(innerSubscription).remove(resource.disposable);
          },
        }),
      ),
      subscriber.scheduler,
    );

    subscriber.subscription.add(innerSubscription).add(resource.disposable);
  };

  return Observable.create(subscribe, delay, priority);
};
