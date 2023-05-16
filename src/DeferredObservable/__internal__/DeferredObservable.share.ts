import type * as DeferredObservable from "../../DeferredObservable.js";
import Disposable_onDisposed from "../../Disposable/__internal__/Disposable.onDisposed.js";
import MulticastObservable_create from "../../MulticastObservable/__internal__/MulticastObservable.create.js";
import Observable_createRefCountedPublisher from "../../Observable/__internal__/Observable.createRefCountedPublisher.js";
import { Factory, Optional, none, pipe } from "../../functions.js";
import {
  DeferredObservableLike,
  DisposableLike,
  ObservableLike,
  ObservableLike_observe,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  ReplayObservableLike,
  SchedulerLike,
} from "../../types.js";
import DeferredObservable_multicastImpl from "./DeferredObservable.multicastImpl.js";

const createLazyMulticastObservable = <T>(
  factory: Factory<ObservableLike<T>>,
) =>
  MulticastObservable_create(observer => {
    factory()[ObservableLike_observe](observer);
  });

const DeferredObservable_share: DeferredObservable.Signature["share"] =
  <T>(
    schedulerOrFactory: SchedulerLike | Factory<SchedulerLike & DisposableLike>,
    options?: {
      readonly replay?: number;
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
    },
  ) =>
  (source: DeferredObservableLike<T>) => {
    let multicasted: Optional<ReplayObservableLike<T>> = none;

    return createLazyMulticastObservable<T>(
      () =>
        multicasted ??
        (() => {
          multicasted = pipe(
            source,
            DeferredObservable_multicastImpl<T>(
              Observable_createRefCountedPublisher,
              schedulerOrFactory,
              options,
            ),
            Disposable_onDisposed(() => {
              multicasted = none;
            }),
          );
          return multicasted;
        })(),
    );
  };

export default DeferredObservable_share;
