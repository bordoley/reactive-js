import {
  DeferredObservableLike,
  ObservableLike,
  StreamableLike,
  StreamableLike_stream,
} from "../../../concurrent.js";
import {
  Tuple2,
  Updater,
  compose,
  identity,
  pipe,
} from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as Observable from "../../Observable.js";
import type * as Streamable from "../../Streamable.js";

const Streamable_syncState: Streamable.Signature["syncState"] =
  <T>(
    onInit: (initialValue: T) => DeferredObservableLike<Updater<T>>,
    onChange: (oldValue: T, newValue: T) => DeferredObservableLike<Updater<T>>,
    syncStateOptions?: {
      readonly throttleDuration?: number;
    },
  ) =>
  (streamable: StreamableLike<Updater<T>, T>) => ({
    [StreamableLike_stream](scheduler, options) {
      const throttleDuration = syncStateOptions?.throttleDuration ?? 0;
      const stream = streamable[StreamableLike_stream](scheduler, options);

      pipe(
        stream,
        Observable.forkMerge([
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
        ]),
        Observable.dispatchTo<Updater<T>>(stream),
        Observable.ignoreElements(),
        Observable.subscribe(scheduler),
        Disposable.addTo(stream),
      );

      return stream;
    },
  });

export default Streamable_syncState;
