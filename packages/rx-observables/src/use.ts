import {
  connect,
  observe,
  Observable,
  ObservableResourceLike,
} from "@reactive-js/rx-core";

export const use = <T>(factory: () => ObservableResourceLike<T>) =>
  Observable.create(subscriber => {
    const resource = factory();

    subscriber.subscription
      .add(
        connect(
          Observable.lift(resource, observe(subscriber)),
          subscriber.scheduler,
        ),
      )
      .add(resource);
  });
