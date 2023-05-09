import {
  DeferredObservableLike,
  DisposableLike,
  MulticastObservableLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  SchedulerLike,
  SharedObservableLike,
} from "../../../core.js";
import {
  Factory,
  Function1,
  Optional,
  none,
  pipe,
} from "../../../functions.js";
import Disposable_onDisposed from "../../Disposable/__internal__/Disposable.onDisposed.js";
import Publisher_createRefCounted from "../../Publisher/__internal__/Publisher.createRefCounted.js";
import SharedObservable_defer from "../../SharedObservable/__internal__/SharedObservable.defer.js";
import DeferredObservable_multicastImpl from "./DeferredObservable.multicastImpl.js";

const DeferredObservable_share =
  <T>(
    schedulerOrFactory: SchedulerLike | Factory<SchedulerLike & DisposableLike>,
    options?: {
      readonly replay?: number;
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
    },
  ): Function1<DeferredObservableLike<T>, SharedObservableLike<T>> =>
  (source: DeferredObservableLike<T>) => {
    let multicasted: Optional<MulticastObservableLike<T>> = none;

    return SharedObservable_defer<T>(
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
