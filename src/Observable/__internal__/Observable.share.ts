import MulticastObservable_create from "../../MulticastObservable/__internal__/MulticastObservable.create.js";
import type * as Observable from "../../Observable.js";
import Observable_multicastImpl from "../../Observable/__internal__/Observable.multicastImpl.js";
import { Factory, Optional, none, pipe } from "../../functions.js";
import {
  DisposableLike,
  ObservableLike,
  ObservableLike_observe,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  ReplayObservableLike,
  SchedulerLike,
} from "../../types.js";
import Observable_createRefCountedPublisher from "./Observable.createRefCountedPublisher.js";

const createLazyMulticastObservable = <T>(
  factory: Factory<ObservableLike<T>>,
) =>
  MulticastObservable_create(observer => {
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
  (source: ObservableLike<T>) => {
    let multicasted: Optional<ReplayObservableLike<T>> = none;

    return createLazyMulticastObservable<T>(
      () =>
        multicasted ??
        (() => {
          multicasted = pipe(
            source,
            Observable_multicastImpl<T>(
              Observable_createRefCountedPublisher,
              schedulerOrFactory,
              options,
            ),
          );
          return multicasted;
        })(),
    );
  };

export default Observable_share;
