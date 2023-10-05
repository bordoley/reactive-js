import {
  DeferredObservableLike,
  ObservableLike,
  ObservableLike_observe,
  ReplayObservableLike,
  RunnableWithSideEffectsLike,
  SchedulerLike,
} from "../../../concurrent.js";
import { Factory, Optional, none, pipe } from "../../../functions.js";
import {
  DisposableLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
} from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observable_multicastImpl from "../../Observable/__internal__/Observable.multicastImpl.js";
import ReplayPublisher_createRefCounted from "../../ReplayPublisher/__internal__/ReplayPublisher.createRefCounted.js";
import Observable_createMulticast from "./Observable.createMulticast.js";

const createLazyMulticastObservable = <T>(
  factory: Factory<ObservableLike<T>>,
) =>
  Observable_createMulticast(observer => {
    factory()[ObservableLike_observe](observer);
  });

const Observable_share: Observable.Signature["share"] =
  <T>(
    schedulerOrFactory: SchedulerLike | Factory<SchedulerLike & DisposableLike>,
    options?: {
      readonly replay?: number;
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
    },
  ) =>
  (source: DeferredObservableLike<T> | RunnableWithSideEffectsLike<T>) => {
    let multicasted: Optional<ReplayObservableLike<T>> = none;

    return createLazyMulticastObservable<T>(
      () =>
        multicasted ??
        (() => {
          multicasted = pipe(
            source,
            Observable_multicastImpl<T>(
              ReplayPublisher_createRefCounted,
              schedulerOrFactory,
              options,
            ),
          );
          return multicasted;
        })(),
    );
  };

export default Observable_share;
