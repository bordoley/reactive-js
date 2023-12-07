import {
  DeferredObservableLike,
  ObservableLike,
  RunnableLike,
  RunnableWithSideEffectsLike,
  SchedulerLike,
  StreamLike,
  StreamLike_scheduler,
} from "../../../concurrent.js";
import {
  Tuple2,
  Updater,
  compose,
  identity,
  pipe,
} from "../../../functions.js";
import {
  QueueableLike,
  QueueableLike_backpressureStrategy,
} from "../../../utils.js";
import Observable_concatMap from "../../Observable/__internal__/Observable.concatMap.js";
import Observable_dispatchTo from "../../Observable/__internal__/Observable.dispatchTo.js";
import Observable_forkMerge from "../../Observable/__internal__/Observable.forkMerge.js";
import Observable_pairwise from "../../Observable/__internal__/Observable.pairwise.js";
import Observable_subscribe from "../../Observable/__internal__/Observable.subscribe.js";
import Observable_takeFirst from "../../Observable/__internal__/Observable.takeFirst.js";
import Observable_throttle from "../../Observable/__internal__/Observable.throttle.js";
import type * as Stream from "../../Stream.js";

const Stream_syncState: Stream.Signature["syncState"] = <T>(
  onInit: (
    initialValue: T,
  ) =>
    | DeferredObservableLike<Updater<T>>
    | RunnableWithSideEffectsLike<Updater<T>>
    | RunnableLike<Updater<T>>,
  onChange: (
    oldValue: T,
    newValue: T,
  ) =>
    | DeferredObservableLike<Updater<T>>
    | RunnableWithSideEffectsLike<Updater<T>>
    | RunnableLike<Updater<T>>,
  options?: {
    readonly throttleDuration?: number;
    readonly capacity?: number;
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly scheduler: SchedulerLike;
  },
) => {
  const throttleDuration = options?.throttleDuration ?? 0;

  return (stateStore: StreamLike<Updater<T>, T>) => {
    const scheduler = options?.scheduler ?? stateStore[StreamLike_scheduler];

    return pipe(
      stateStore,
      Observable_forkMerge(
        compose(Observable_takeFirst(), Observable_concatMap(onInit)),
        compose(
          throttleDuration > 0
            ? Observable_throttle(throttleDuration)
            : identity<ObservableLike<T>>,
          Observable_pairwise(),
          Observable_concatMap<Tuple2<T, T>, Updater<T>>(
            ([oldValue, newValue]) => onChange(oldValue, newValue),
          ),
        ),
      ),
      Observable_dispatchTo<Updater<T>>(stateStore),
      Observable_subscribe(scheduler, {
        backpressureStrategy: options?.backpressureStrategy,
        capacity: options?.capacity,
      }),
    );
  };
};

export default Stream_syncState;
