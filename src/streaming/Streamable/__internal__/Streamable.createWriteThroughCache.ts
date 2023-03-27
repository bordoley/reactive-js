import {
  Equality,
  Factory,
  Updater,
  compose,
  identity,
  pipe,
} from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
import Observable_concatMap from "../../../rx/Observable/__internal__/Observable.concatMap.js";
import Observable_enqueue from "../../../rx/Observable/__internal__/Observable.enqueue.js";
import Observable_forkMerge from "../../../rx/Observable/__internal__/Observable.forkMerge.js";
import Observable_pairwise from "../../../rx/Observable/__internal__/Observable.pairwise.js";
import Observable_subscribe from "../../../rx/Observable/__internal__/Observable.subscribe.js";
import Observable_takeFirst from "../../../rx/Observable/__internal__/Observable.takeFirst.js";
import Observable_throttle from "../../../rx/Observable/__internal__/Observable.throttle.js";
import { SchedulerLike } from "../../../scheduling.js";
import {
  StreamableLike,
  StreamableLike_isEnumerable,
  StreamableLike_isInteractive,
  StreamableLike_isRunnable,
  StreamableLike_stream,
} from "../../../streaming.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Streamable_createStateStore from "./Streamable.createStateStore.js";

const Streamable_createWriteThroughCache = <T>(
  initialState: Factory<T>,
  onInit: (initialValue: T) => ObservableLike<Updater<T>>,
  onChange: (oldValue: T, newValue: T) => ObservableLike<Updater<T>>,
  options?: {
    equality?: Equality<T>;
    throttleDuration?: number;
  },
): StreamableLike<Updater<T>, T> => {
  const stateStore = Streamable_createStateStore(initialState, options);
  const throttleDuration = options?.throttleDuration ?? 0;

  const stream = (
    scheduler: SchedulerLike,
    options?: { readonly replay?: number; readonly capacity?: number },
  ) => {
    const state = stateStore[StreamableLike_stream](scheduler, options);

    pipe(
      state,
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
      Observable_enqueue<ObservableLike, Updater<T>>(state),
      Observable_subscribe(scheduler, options),
      Disposable_addTo(state),
    );

    return state;
  };

  return {
    [StreamableLike_isEnumerable]: false,
    [StreamableLike_isInteractive]: false,
    [StreamableLike_isRunnable]: false,
    [StreamableLike_stream]: stream,
  };
};

export default Streamable_createWriteThroughCache;
