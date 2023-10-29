import { ObservableLike, SchedulerLike } from "../concurrent.js";
import * as Observable from "../concurrent/Observable.js";
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
  QueueableLike,
  QueueableLike_backpressureStrategy,
} from "../utils.js";

interface SvelteModule {
  subscribe<T>(
    scheduler: SchedulerLike,
    options?: {
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
    },
  ): Function1<
    ObservableLike<T>,
    {
      subscribe(callback: (next: Optional<T>) => void): Factory<void>;
    }
  >;
}

type Signature = SvelteModule;

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

export const subscribe: Signature["subscribe"] =
  (
    scheduler: SchedulerLike,
    options: {
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
    } = {},
  ) =>
  obs =>
    newInstance(ObservableSvelteStore, obs, scheduler, options);
