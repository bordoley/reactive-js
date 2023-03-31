import {
  Function1,
  Updater,
  compose,
  identity,
  pipe,
} from "../../../functions.js";
import { DispatcherLike_scheduler, ObservableLike } from "../../../rx.js";
import Observable_concatMap from "../../../rx/Observable/__internal__/Observable.concatMap.js";
import Observable_enqueue from "../../../rx/Observable/__internal__/Observable.enqueue.js";
import Observable_forkMerge from "../../../rx/Observable/__internal__/Observable.forkMerge.js";
import Observable_pairwise from "../../../rx/Observable/__internal__/Observable.pairwise.js";
import Observable_subscribe from "../../../rx/Observable/__internal__/Observable.subscribe.js";
import Observable_takeFirst from "../../../rx/Observable/__internal__/Observable.takeFirst.js";
import Observable_throttle from "../../../rx/Observable/__internal__/Observable.throttle.js";
import { SchedulerLike } from "../../../scheduling.js";
import { StreamLike } from "../../../streaming.js";
import {
  QueueableLike,
  QueueableLike_backpressureStrategy,
} from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";

const Stream_syncState = <T>(
  onInit: (initialValue: T) => ObservableLike<Updater<T>>,
  onChange: (oldValue: T, newValue: T) => ObservableLike<Updater<T>>,
  options?: {
    throttleDuration?: number;
    capacity?: number;
    backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    scheduler: SchedulerLike;
  },
): Function1<StreamLike<Updater<T>, T>, StreamLike<Updater<T>, T>> => {
  const throttleDuration = options?.throttleDuration ?? 0;

  return (stateStore: StreamLike<Updater<T>, T>) => {
    const scheduler =
      options?.scheduler ?? stateStore[DispatcherLike_scheduler];

    pipe(
      stateStore,
      Observable_forkMerge(
        compose(
          Observable_takeFirst<ObservableLike, T>(),
          Observable_concatMap(onInit),
        ),
        compose(
          throttleDuration > 0
            ? Observable_throttle(throttleDuration)
            : identity,
          Observable_pairwise<ObservableLike, T>(),
          Observable_concatMap(([oldValue, newValue]) =>
            onChange(oldValue, newValue),
          ),
        ),
      ),
      Observable_enqueue<ObservableLike, Updater<T>>(stateStore),
      Observable_subscribe(scheduler, {
        backpressureStrategy: options?.backpressureStrategy,
        capacity: options?.capacity,
      }),
      Disposable_addTo(stateStore),
    );

    return stateStore;
  };
};

export default Stream_syncState;
