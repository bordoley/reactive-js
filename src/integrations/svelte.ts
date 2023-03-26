import {
  Factory,
  Function1,
  Optional,
  bindMethod,
  newInstance,
  none,
  pipe,
} from "../functions.js";
import { ObservableLike } from "../rx.js";
import * as Observable from "../rx/Observable.js";
import { SchedulerLike } from "../scheduling.js";
import { DisposableLike_dispose } from "../util.js";

class ObservableSvelteStore<T> {
  constructor(
    private readonly observable: ObservableLike<T>,
    private readonly scheduler: SchedulerLike,
  ) {}

  subscribe(callback: (next: Optional<T>) => void): Factory<void> {
    const { observable, scheduler } = this;

    const subscription = pipe(
      observable,
      Observable.forEach(callback),
      Observable.subscribe(scheduler),
    );

    callback(none);

    return bindMethod(subscription, DisposableLike_dispose);
  }
}

export const subscribe =
  <T>(
    scheduler: SchedulerLike,
  ): Function1<
    ObservableLike<T>,
    {
      subscribe(callback: (next: Optional<T>) => void): Factory<void>;
    }
  > =>
  obs =>
    newInstance(ObservableSvelteStore, obs, scheduler);
