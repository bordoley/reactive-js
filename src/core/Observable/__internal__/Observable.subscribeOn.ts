import {
  BufferLike_capacity,
  DisposableLike,
  ObservableContainer,
  ObservableLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  SchedulerLike,
} from "../../../core.js";
import Disposable_addTo from "../../../core/Disposable/__internal__/Disposable.addTo.js";
import { Factory, isFunction, pipe } from "../../../functions.js";
import Observable_create from "./Observable.create.js";
import Observable_dispatchTo from "./Observable.dispatchTo.js";
import Observable_subscribeWithConfig from "./Observable.subscribeWithConfig.js";

const Observable_subscribeOn =
  <T>(
    schedulerOrFactory: SchedulerLike | Factory<SchedulerLike & DisposableLike>,
    options?: {
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
    },
  ) =>
  (observable: ObservableLike<T>): ObservableLike<T> =>
    // FIXME: type test for VTS
    Observable_create<T>(observer => {
      const scheduler = isFunction(schedulerOrFactory)
        ? pipe(schedulerOrFactory(), Disposable_addTo(observer))
        : schedulerOrFactory;

      pipe(
        observable,
        Observable_dispatchTo<ObservableContainer, T>(observer),
        Observable_subscribeWithConfig(scheduler, {
          [BufferLike_capacity]:
            options?.capacity ?? observer[BufferLike_capacity],
          [QueueableLike_backpressureStrategy]:
            options?.backpressureStrategy ??
            observer[QueueableLike_backpressureStrategy],
        }),
        Disposable_addTo(observer),
      );
    });

export default Observable_subscribeOn;
