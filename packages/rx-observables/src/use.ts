import {
  connect,
  observe,
  Observable,
  ObservableResourceLike,
  ObservableLike,
  SubscriberLike,
} from "@reactive-js/rx-core";

class UseObservable<T> implements ObservableLike<T> {
  private readonly factory: () => ObservableResourceLike<T>;

  constructor(factory: () => ObservableResourceLike<T>) {
    this.factory = factory;
  }

  subscribe(subscriber: SubscriberLike<T>) {
    const resource = this.factory();

    subscriber.subscription
      .add(
        connect(
          Observable.lift(resource, observe(subscriber)),
          subscriber.scheduler,
        ),
      )
      .add(resource);
  }
}

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

  return { subscribe };
};
