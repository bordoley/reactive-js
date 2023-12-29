import {
  DeferredObservableLike,
  ObservableLike,
  RunnableLike,
  RunnableWithSideEffectsLike,
  StreamLike,
} from "../../../concurrent.js";
import {
  Tuple2,
  Updater,
  compose,
  identity,
  pipe,
} from "../../../functions.js";
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
  },
) => {
  const throttleDuration = options?.throttleDuration ?? 0;

  return (stateStore: StreamLike<Updater<T>, T>) =>
    pipe(
      stateStore,
      Observable.forkMerge(
        compose(
          Observable.takeFirst(),
          Observable.concatMap(onInit, {
            innerType: Observable.DeferredObservableWithSideEffectsType,
          }),
        ),
        compose(
          throttleDuration > 0
            ? Observable.throttle(throttleDuration)
            : identity<ObservableLike<T>>,
          Observable.pairwise(),
          Observable.concatMap<Tuple2<T, T>, Updater<T>>(
            ([oldValue, newValue]) => onChange(oldValue, newValue),
            { innerType: Observable.DeferredObservableWithSideEffectsType },
          ),
        ),
      ),
      Observable.dispatchTo<Updater<T>>(stateStore),
      Observable.ignoreElements(),
    );
};

export default Stream_syncState;
