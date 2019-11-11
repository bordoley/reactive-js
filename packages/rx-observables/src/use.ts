import { create } from "./create";
import {
  observe,
  Observable,
  ObservableLike,
  ObservableResourceLike
} from "@rx-min/rx-core";

export const use = <T>(factory: () => ObservableResourceLike<T>) =>
  create(subscriber => {
    const resource = factory();

    subscriber
      .add(
        Observable.connect(
          Observable.lift(resource, observe(subscriber)),
          subscriber.scheduler
        )
      )
      .add(resource);
  });
