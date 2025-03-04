import * as Computation from "../../../computations/Computation.js";
import {
  DeferredComputationWithSideEffectsLike,
  DeferredComputationWithSideEffectsType,
} from "../../../computations.js";
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

const ObservableModule = {
  concatAll: Observable.concatAll,
  keep: Observable.keep,
  map: Observable.map,
};

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
        Observable.forkMerge(
          compose(
            Observable.takeFirst(),
            Computation.concatMap(ObservableModule)(onInit, {
              innerType: DeferredComputationWithSideEffectsType,
            }),
          ),
          compose(
            throttleDuration > 0
              ? Observable.throttle(throttleDuration)
              : identity<ObservableLike<T>>,
            Observable.pairwise<T>(),
            Computation.concatMap(ObservableModule)<
              Tuple2<T, T>,
              Updater<T>,
              DeferredComputationWithSideEffectsLike
            >(([oldValue, newValue]) => onChange(oldValue, newValue), {
              innerType: DeferredComputationWithSideEffectsType,
            }),
          ),
          { innerType: DeferredComputationWithSideEffectsType },
        ),
        Observable.dispatchTo<Updater<T>>(stream),
        Computation.ignoreElements(ObservableModule)(),
        Observable.subscribe(scheduler),
        Disposable.addTo(stream),
      );

      return stream;
    },
  });

export default Streamable_syncState;
