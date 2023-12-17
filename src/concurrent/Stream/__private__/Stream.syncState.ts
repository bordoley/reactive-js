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
import * as Observable from "../../Observable.js";
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
    readonly scheduler?: SchedulerLike;
  },
) => {
  const throttleDuration = options?.throttleDuration ?? 0;

  return (stateStore: StreamLike<Updater<T>, T>) => {
    const scheduler = options?.scheduler ?? stateStore[StreamLike_scheduler];

    return pipe(
      stateStore,
      Observable.forkMerge(
        compose(Observable.takeFirst(), Observable.concatMap(onInit)),
        compose(
          throttleDuration > 0
            ? Observable.throttle(throttleDuration)
            : identity<ObservableLike<T>>,
          Observable.pairwise(),
          Observable.concatMap<Tuple2<T, T>, Updater<T>>(
            ([oldValue, newValue]) => onChange(oldValue, newValue),
          ),
        ),
      ),
      Observable.dispatchTo<Updater<T>>(stateStore),
      Observable.subscribe(scheduler, {
        backpressureStrategy: options?.backpressureStrategy,
        capacity: options?.capacity,
      }),
    );
  };
};

export default Stream_syncState;
