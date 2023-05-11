import type * as DeferredObservable from "../../DeferredObservable.js";
import Disposable_onDisposed from "../../Disposable/__internal__/Disposable.onDisposed.js";
import Publisher_createRefCounted from "../../Publisher/__internal__/Publisher.createRefCounted.js";
import SharedObservable_create from "../../SharedObservable/__internal__/SharedObservable.create.js";
import { Factory, Optional, none, pipe } from "../../functions.js";
import {
  DeferredObservableLike,
  DisposableLike,
  MulticastObservableLike,
  ObservableLike,
  ObservableLike_observe,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  SchedulerLike,
} from "../../types.js";
import DeferredObservable_multicastImpl from "./DeferredObservable.multicastImpl.js";

const createLazySharedObservable = <T>(factory: Factory<ObservableLike<T>>) =>
  SharedObservable_create(observer => {
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
    let multicasted: Optional<MulticastObservableLike<T>> = none;

    return createLazySharedObservable<T>(
      () =>
        multicasted ??
        (() => {
          multicasted = pipe(
            source,
            DeferredObservable_multicastImpl<T>(
              Publisher_createRefCounted,
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
