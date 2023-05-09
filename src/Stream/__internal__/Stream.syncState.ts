import Observable_concatMap from "../../Observable/__internal__/Observable.concatMap.js";
import Observable_dispatchTo from "../../Observable/__internal__/Observable.dispatchTo.js";
import Observable_forkMerge from "../../Observable/__internal__/Observable.forkMerge.js";
import Observable_pairwise from "../../Observable/__internal__/Observable.pairwise.js";
import Observable_subscribe from "../../Observable/__internal__/Observable.subscribe.js";
import Observable_takeFirst from "../../Observable/__internal__/Observable.takeFirst.js";
import Observable_throttle from "../../Observable/__internal__/Observable.throttle.js";
import { ObservableContainer } from "../../containers.js";
import {
  Function1,
  Updater,
  compose,
  identity,
  pipe,
} from "../../functions.js";
import {
  DisposableLike,
  ObservableLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  SchedulerLike,
  StreamLike,
  StreamLike_scheduler,
} from "../../types.js";

const Stream_syncState = <T>(
  onInit: (initialValue: T) => ObservableLike<Updater<T>>,
  onChange: (oldValue: T, newValue: T) => ObservableLike<Updater<T>>,
  options?: {
    readonly throttleDuration?: number;
    readonly capacity?: number;
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly scheduler: SchedulerLike;
  },
): Function1<StreamLike<Updater<T>, T>, DisposableLike> => {
  const throttleDuration = options?.throttleDuration ?? 0;

  return (stateStore: StreamLike<Updater<T>, T>) => {
    const scheduler = options?.scheduler ?? stateStore[StreamLike_scheduler];

    return pipe(
      stateStore,
      Observable_forkMerge(
        compose(
          Observable_takeFirst<ObservableContainer, T>(),
          Observable_concatMap(onInit),
        ),
        compose(
          throttleDuration > 0
            ? Observable_throttle(throttleDuration)
            : identity,
          Observable_pairwise<ObservableContainer, T>(),
          Observable_concatMap(([oldValue, newValue]) =>
            onChange(oldValue, newValue),
          ),
        ),
      ),
      Observable_dispatchTo<ObservableContainer, Updater<T>>(stateStore),
      Observable_subscribe(scheduler, {
        backpressureStrategy: options?.backpressureStrategy,
        capacity: options?.capacity,
      }),
    );
  };
};

export default Stream_syncState;
