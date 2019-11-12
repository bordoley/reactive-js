import { create } from "./create";
import {
  connect,
  lift,
  observe,
  ObservableResourceLike,
} from "@rx-min/rx-core";

export const use = <T>(factory: () => ObservableResourceLike<T>) =>
  create(subscriber => {
    const resource = factory();

    subscriber.subscription
      .add(
        connect(
          lift(resource, observe(subscriber)),
          subscriber.scheduler,
        ),
      )
      .add(resource);
  });
