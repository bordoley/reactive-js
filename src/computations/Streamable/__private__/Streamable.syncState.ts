import * as Computation from "../../../computations/Computation.js";
import {
  DeferredComputationWithSideEffects,
  DeferredComputationWithSideEffectsLike,
  DeferredObservableLike,
  ObservableLike,
  ProducerLike_consume,
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
import { SchedulerLike } from "../../../utils.js";
import * as Broadcaster from "../../Broadcaster.js";
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
    scheduler: SchedulerLike,
    syncStateOptions?: {
      readonly throttleDuration?: number;
    },
  ) =>
  (streamable: StreamableLike<Updater<T>, T>) => ({
    [StreamableLike_stream](options) {
      const throttleDuration = syncStateOptions?.throttleDuration ?? 0;
      const subscriber = streamable[StreamableLike_stream](options);

      pipe(
        subscriber,
        Broadcaster.toObservable(),
        // FIXME: Observable shouldn't implement forkMerg, move it to broadcaster.
        Observable.forkMerge(
          compose(
            Observable.takeFirst(),
            Computation.concatMap(ObservableModule)(onInit, {
              innerType: DeferredComputationWithSideEffects,
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
              innerType: DeferredComputationWithSideEffects,
            }),
          ),
          { innerType: DeferredComputationWithSideEffects },
        ),
        Observable.toProducer(scheduler),
        invoke(ProducerLike_consume, subscriber),
      );

      return subscriber;
    },
  });

export default Streamable_syncState;
