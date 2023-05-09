import * as Observable from "../Observable.js";
import {
  Factory,
  Function1,
  Optional,
  bindMethod,
  newInstance,
  none,
  pipe,
} from "../functions.js";
import {
  DisposableLike_dispose,
  ObservableLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  SchedulerLike,
} from "../types.js";

class ObservableSvelteStore<T> {
  constructor(
    private readonly observable: ObservableLike<T>,
    private readonly scheduler: SchedulerLike,
    private readonly options: {
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
    },
  ) {}

  subscribe(callback: (next: Optional<T>) => void): Factory<void> {
    const { observable, scheduler, options } = this;

    const subscription = pipe(
      observable,
      Observable.forEach(callback),
      Observable.subscribe(scheduler, options),
    );

    callback(none);

    return bindMethod(subscription, DisposableLike_dispose);
  }
}

export const subscribe =
  <T>(
    scheduler: SchedulerLike,
    options: {
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
    } = {},
  ): Function1<
    ObservableLike<T>,
    {
      subscribe(callback: (next: Optional<T>) => void): Factory<void>;
    }
  > =>
  obs =>
    newInstance(ObservableSvelteStore, obs, scheduler, options);
