import {
  ComputationLike_isPure,
  EventSourceLike_subscribe,
  ObservableLike,
  StreamLike,
  StreamableLike,
  StreamableLike_stream,
} from "../../../computations.js";
import {
  Tuple2,
  Updater,
  compose,
  identity,
  invoke,
  pipe,
} from "../../../functions.js";
import * as Observable from "../../Observable.js";
import type * as Streamable from "../../Streamable.js";

const Streamable_syncState: Streamable.Signature["syncState"] =
  <T, TStream extends StreamLike<Updater<T>, T>>(
    onInit: (initialValue: T) => ObservableLike<Updater<T>>,
    onChange: (oldValue: T, newValue: T) => ObservableLike<Updater<T>>,
    syncStateOptions?: {
      readonly throttleDuration?: number;
    },
  ) =>
  (streamable: StreamableLike<Updater<T>, T, TStream>) => ({
    [StreamableLike_stream](scheduler, options) {
      const throttleDuration = syncStateOptions?.throttleDuration ?? 0;
      const stream = streamable[StreamableLike_stream](scheduler, options);

      pipe(
        stream,
        Observable.fromBroadcaster<T>(),
        Observable.forkMerge<T, T>(
          compose(
            Observable.takeFirst(),
            Observable.map(onInit),
            Observable.concatAll({
              [ComputationLike_isPure]: false,
            }),
          ),
          compose(
            throttleDuration > 0
              ? Observable.throttle(throttleDuration)
              : identity<ObservableLike<T>>,
            Observable.pairwise<T>(),
            Observable.map<Tuple2<T, T>, ObservableLike<Updater<T>>>(
              ([oldValue, newValue]) => onChange(oldValue, newValue),
            ),
            Observable.concatAll({
              [ComputationLike_isPure]: false,
            }),
          ),
          { [ComputationLike_isPure]: false },
        ),
        Observable.toProducer({ scheduler }),
        invoke(EventSourceLike_subscribe, stream),
      );

      return stream;
    },
  });

export default Streamable_syncState;
