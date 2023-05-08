import {
  DisposableLike,
  MulticastObservableLike,
  ObservableLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  SchedulerLike,
} from "../../../core.js";
import Disposable_onDisposed from "../../../core/Disposable/__internal__/Disposable.onDisposed.js";
import {
  Factory,
  Function1,
  Optional,
  none,
  pipe,
} from "../../../functions.js";
import Publisher_createRefCounted from "../../Publisher/__internal__/Publisher.createRefCounted.js";
import Observable_defer from "./Observable.defer.js";
import Observable_multicastImpl from "./Observable.multicastImpl.js";

const Observable_share =
  <T>(
    schedulerOrFactory: SchedulerLike | Factory<SchedulerLike & DisposableLike>,
    options?: {
      readonly replay?: number;
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
    },
  ): Function1<ObservableLike<T>, ObservableLike<T>> =>
  (source: ObservableLike<T>) => {
    let multicasted: Optional<MulticastObservableLike<T>> = none;

    // FIXME: Type test scheduler for VTS
    return Observable_defer<T>(
      () =>
        multicasted ??
        (() => {
          multicasted = pipe(
            source,
            Observable_multicastImpl<T>(
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

export default Observable_share;
